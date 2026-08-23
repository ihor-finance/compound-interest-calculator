<#
    Builds the Android app end to end: web bundle -> Capacitor sync -> Gradle.

    Neither the JDK nor the Android SDK is on the system PATH, so this script
    points at the copies under C:\Android. Change the two paths below if you move
    them.

    Usage (from the project root, in PowerShell):
        .\scripts\build-android.ps1              # debug APK, for testing on a phone
        .\scripts\build-android.ps1 -Release     # release AAB + APK, for Google Play

    A release build is signed only if android\keystore.properties exists;
    see android\keystore.properties.example for how to create the key.
#>
param(
    [switch]$Release
)

$ErrorActionPreference = 'Stop'

$env:JAVA_HOME        = 'C:\Android\jdk-21'
$env:ANDROID_HOME     = 'C:\Android\Sdk'
$env:ANDROID_SDK_ROOT = 'C:\Android\Sdk'

if (-not (Test-Path $env:JAVA_HOME))    { throw "JDK not found at $env:JAVA_HOME" }
if (-not (Test-Path $env:ANDROID_HOME)) { throw "Android SDK not found at $env:ANDROID_HOME" }

$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

Write-Host '==> Building web bundle' -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw 'Web build failed' }

Write-Host '==> Syncing into the Android project' -ForegroundColor Cyan
npx cap sync android
if ($LASTEXITCODE -ne 0) { throw 'Capacitor sync failed' }

$outputDir = Join-Path $projectRoot 'release'
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

Set-Location (Join-Path $projectRoot 'android')

if ($Release) {
    Write-Host '==> Gradle: bundleRelease + assembleRelease' -ForegroundColor Cyan
    cmd /c '.\gradlew.bat bundleRelease assembleRelease --no-daemon'
    if ($LASTEXITCODE -ne 0) { throw 'Gradle release build failed' }

    $signed = -not (Test-Path (Join-Path $projectRoot 'android\keystore.properties'))
    Get-ChildItem 'app\build\outputs' -Recurse -Include '*.aab', '*.apk' |
        Where-Object { $_.FullName -match 'release' } |
        ForEach-Object { Copy-Item $_.FullName $outputDir -Force; Write-Host "    $($_.Name)" }
    if ($signed) {
        Write-Host 'NOTE: no keystore.properties found — these artifacts are UNSIGNED.' -ForegroundColor Yellow
    }
} else {
    Write-Host '==> Gradle: assembleDebug' -ForegroundColor Cyan
    cmd /c '.\gradlew.bat assembleDebug --no-daemon'
    if ($LASTEXITCODE -ne 0) { throw 'Gradle debug build failed' }

    # Name the file after the version in build.gradle so old builds are never
    # mistaken for new ones on the way to a phone.
    $gradle = Get-Content 'app\build.gradle' -Raw
    $version = if ($gradle -match 'versionName\s+"([^"]+)"') { $Matches[1] } else { 'unknown' }
    $apkName = "CompoundInterestCalculator-$version-debug.apk"

    Copy-Item 'app\build\outputs\apk\debug\app-debug.apk' (Join-Path $outputDir $apkName) -Force
    Write-Host "    $apkName"
}

Set-Location $projectRoot
Write-Host "==> Done. Output in: $outputDir" -ForegroundColor Green

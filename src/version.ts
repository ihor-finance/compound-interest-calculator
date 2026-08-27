/**
 * Version shown inside the app. Must match `versionName` in
 * android/app/build.gradle — scripts/build-android.ps1 checks that they agree
 * and refuses to build if they have drifted.
 *
 * package.json carries the same release as 1.0.3, because npm rejects "1.03"
 * as invalid semver. The number users see comes from here and from versionName.
 */
export const APP_VERSION = '1.14';

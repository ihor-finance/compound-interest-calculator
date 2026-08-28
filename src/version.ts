/**
 * Version shown inside the app. Must match `versionName` in
 * android/app/build.gradle — scripts/build-android.ps1 checks that they agree
 * and refuses to build if they have drifted.
 *
 * This is the first public release, so it is 1.0. The 1.01–1.17 that came
 * before were build numbers during development; not one of them was ever
 * published, so nobody has seen them and there is no history to preserve.
 *
 * package.json carries the same release as 1.0.0, because npm insists on three
 * parts. The number users see comes from here and from versionName.
 */
export const APP_VERSION = '1.0';

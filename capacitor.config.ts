import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ihorfinance.compoundcalc',
  appName: 'Compound Interest Calculator',
  webDir: 'dist',
  android: {
    // Keep the WebView background in sync with the app shell so rotation and
    // keyboard transitions never flash white on a dark theme.
    backgroundColor: '#F4F6F8'
  },
  plugins: {
    StatusBar: {
      // The plugin defaults this to true, which puts the WebView behind the
      // status bar — the header then renders underneath the clock and battery.
      // Applied at plugin construction, so the layout is right before any of
      // our JavaScript runs.
      overlaysWebView: false,
      // Starting values matching the light theme the app opens in. The theme
      // effect in src/App.tsx takes over from here; LIGHT means dark icons on a
      // light bar.
      style: 'LIGHT',
      backgroundColor: '#FFFFFF'
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;

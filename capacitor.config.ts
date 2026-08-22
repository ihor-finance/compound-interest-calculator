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
  server: {
    androidScheme: 'https'
  }
};

export default config;

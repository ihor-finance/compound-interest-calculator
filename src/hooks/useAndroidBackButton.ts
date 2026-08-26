import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import type { PluginListenerHandle } from '@capacitor/core';

/**
 * Android's hardware back button.
 *
 * Capacitor's BridgeActivity does not override the back press, so Android's
 * default ran: finish the activity. From the methodology or policy page, back
 * closed the whole app instead of returning to the calculator — the routes live
 * in a HashRouter the system knows nothing about.
 *
 * The rule is deliberately flat rather than a history walk. There are four
 * routes and the three inner ones are only reachable from the footer, so "back
 * goes to the calculator, and from the calculator it leaves" is both what a
 * person expects and impossible to get lost in. history.back() would instead
 * retrace whatever order the footer links were tapped in.
 */

type Interceptor = () => void;

/** Innermost first: the last thing opened is the first thing back closes. */
const interceptors: Interceptor[] = [];

/**
 * Claims the back button while `active`, for anything laid over the page. An
 * open dialog has to swallow the press — otherwise back navigates the page out
 * from under it, which on Android reads as the app losing your place.
 */
export function useBackInterceptor(active: boolean, handler: () => void) {
  const handlerRef = useRef(handler);
  // Written in an effect, not during render: with StrictMode the render pass
  // runs twice and a ref written there is not safe to rely on.
  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!active) return;
    const entry = () => handlerRef.current();
    interceptors.push(entry);
    return () => {
      const index = interceptors.indexOf(entry);
      if (index !== -1) interceptors.splice(index, 1);
    };
  }, [active]);
}

export function useAndroidBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Read through a ref so the listener is registered once. Re-registering on
  // every navigation would race its own async removal.
  const pathRef = useRef(location.pathname);
  useEffect(() => {
    pathRef.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;

    let handle: PluginListenerHandle | undefined;
    let cancelled = false;

    CapacitorApp.addListener('backButton', () => {
      const innermost = interceptors[interceptors.length - 1];
      if (innermost) {
        innermost();
        return;
      }
      if (pathRef.current !== '/') {
        navigate('/');
        return;
      }
      CapacitorApp.exitApp();
    }).then(registered => {
      if (cancelled) registered.remove();
      else handle = registered;
    });

    return () => {
      cancelled = true;
      handle?.remove();
    };
  }, [navigate]);
}

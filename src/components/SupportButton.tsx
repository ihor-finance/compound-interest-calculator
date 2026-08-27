import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

/**
 * Where the button goes. Ko-fi carries both one-off and monthly support, which
 * is what was wanted, and it exists today — which redempsly.com/support does
 * not. Point this at our own page instead whenever that page is built: it is one
 * string, and nothing else in the app knows the difference.
 *
 * Whatever it points at, it must be a page that only *asks*. Nothing may come
 * back into the app in return — see the rules on the component below.
 */
export const SUPPORT_URL = 'https://ko-fi.com/redempsly';

/**
 * The off switch.
 *
 * False renders the button greyed out and inert: a tap swaps its label for a
 * thank-you and goes nowhere, so Play's payment rules have nothing to apply to.
 * That is how 1.11 and 1.12 shipped, while there was still nowhere to send
 * anyone. Set it back to false and the app is in that state again within one
 * build — worth keeping for the day a store review asks a question.
 *
 * Typed rather than inferred so both branches stay live code; a bare `false`
 * narrows to the literal type and makes the other half unreachable.
 */
const supportEnabled: boolean = true;

/**
 * "Support the project" — the app's answer to the question of how it pays for
 * itself, and the reason there are no ads.
 *
 * It is a link, not a payment flow, and that distinction is what
 * keeps the app on Google Play. Play treats a payment taken inside the app for
 * anything the app gives back as a purchase that must go through Play Billing. A
 * link out to a page that gives nothing back is not a purchase. Two rules
 * follow, and neither is optional:
 *
 *   1. It leaves the app. Capacitor's Bridge.launchIntent fires an ACTION_VIEW
 *      intent for any host that is neither the app's own nor listed in
 *      server.allowNavigation. ko-fi.com is neither, so a plain <a> lands in
 *      the system browser. Which means: do not add the host to allowNavigation,
 *      and do not "improve" this with a Custom Tab or the Capacitor Browser
 *      plugin — both put the payment page back inside the app frame, which is
 *      exactly the thing being avoided.
 *
 *   2. A donation buys nothing. No unlocked feature, no removed ad, no badge,
 *      no thank-you screen that hands anything over. The moment it does, it is a
 *      digital purchase and a completely different set of rules applies.
 *
 * The wording is neutral for the same reason: "support", never "buy", "unlock",
 * "upgrade" or "remove ads". docs/DONATIONS.md has the full reasoning.
 */
export const SupportButton = ({ className = '' }: { className?: string }) => {
  const { t } = useTranslation();
  const [thanked, setThanked] = useState(false);

  // Clears itself so the button goes back to reading as a button. Cleanup
  // matters: the footer unmounts on navigation to a legal page, and a timer
  // outliving it would set state on nothing.
  useEffect(() => {
    if (!thanked) return;
    const timer = setTimeout(() => setThanked(false), 2600);
    return () => clearTimeout(timer);
  }, [thanked]);

  const label = t.footer.support || 'Support the project';

  if (supportEnabled) {
    return (
      <a
        href={SUPPORT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`support-button ${className}`.trim()}
      >
        <Heart size={15} strokeWidth={2.2} aria-hidden="true" />
        <span>{label}</span>
      </a>
    );
  }

  // A real <button> rather than a link with nowhere to go, and deliberately not
  // `disabled` — a disabled button fires no click, so there would be no way to
  // say why nothing happened. aria-live lets a screen reader hear the swap.
  return (
    <button
      type="button"
      className={`support-button support-button--soon ${className}`.trim()}
      onClick={() => setThanked(true)}
    >
      <Heart size={15} strokeWidth={2.2} aria-hidden="true" />
      <span aria-live="polite">
        {thanked ? (t.footer.supportSoon || 'Coming soon — thank you!') : label}
      </span>
    </button>
  );
};

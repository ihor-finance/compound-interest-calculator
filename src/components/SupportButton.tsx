import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

/**
 * Page on our own site listing the ways to support the project. Everything that
 * touches money lives there, not here — see the rules below.
 */
export const SUPPORT_URL = 'https://redempsly.com/support';

/**
 * Flip to true once redempsly.com/support is live.
 *
 * Until then the button is present but inert: it renders greyed out and a tap
 * swaps its label for a thank-you instead of going anywhere. The button earns
 * its place in the first release anyway — the layout is settled now rather than
 * bolted on later, and a dead link to a page that does not exist would be worse
 * than an honest "not yet".
 *
 * Which service the page ends up carrying is still open: the Ko-fi plan does not
 * survive contact with Ukrainian payment rules. See docs/DONATIONS.md. None of
 * that reaches this file — the page is the thing that changes.
 */
const supportEnabled = false;

/**
 * "Support the project" — the app's answer to the question of how it pays for
 * itself, and the reason there are no ads.
 *
 * Once enabled it is a link, not a payment flow, and that distinction is what
 * keeps the app on Google Play. Play treats a payment taken inside the app for
 * anything the app gives back as a purchase that must go through Play Billing. A
 * link out to a page that gives nothing back is not a purchase. Two rules
 * follow, and neither is optional:
 *
 *   1. It leaves the app. Capacitor's Bridge.launchIntent fires an ACTION_VIEW
 *      intent for any host that is neither the app's own nor listed in
 *      server.allowNavigation. redempsly.com is neither, so a plain <a> lands in
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

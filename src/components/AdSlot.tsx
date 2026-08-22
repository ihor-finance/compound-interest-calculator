/**
 * Reserved advertising space.
 *
 * Version 1.0 ships with NO ads: `adsEnabled` is false, so every slot renders
 * `null` and costs nothing — no layout shift, no extra DOM, no dependency.
 *
 * The point of the component is that the *positions* are decided now, while the
 * layout is being designed, instead of being bolted on later. See docs/ADS.md
 * for how each placement gets wired up to AdMob.
 *
 *   'bottom-anchor' — the shelf at the very bottom of the app frame. A native
 *                     AdMob adaptive banner is anchored there by the OS; the web
 *                     layer only has to reserve the height so nothing is covered.
 *                     `--ad-slot-h` in App.css does exactly that.
 *
 *   'inline-card'   — an in-content card between the charts and the projection
 *                     table. Styled like every other card, so it reads as part of
 *                     the page rather than an overlay. Suitable for house promos
 *                     or partner links (plain web content, no AdMob plugin).
 */
export type AdPlacement = 'bottom-anchor' | 'inline-card';

/** Flip to true only together with the wiring described in docs/ADS.md. */
const adsEnabled = false;

interface Props {
  placement: AdPlacement;
}

export const AdSlot = ({ placement }: Props) => {
  if (!adsEnabled) return null;

  if (placement === 'bottom-anchor') {
    // The native banner floats above this element; it only reserves space.
    return <div className="ad-slot ad-slot--anchor" aria-hidden="true" />;
  }

  return <div className="ad-slot ad-slot--card card" aria-hidden="true" />;
};

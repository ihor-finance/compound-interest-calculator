import { useState, useRef, useLayoutEffect } from 'react';
import { Info } from 'lucide-react';
import '../App.css';

interface TooltipProps {
  content: string;
  /** Preferred side. Flipped automatically when that side has no room. */
  position?: 'top' | 'bottom';
  children?: React.ReactNode;
}

/** Keep this much clear of every screen edge. */
const EDGE_PADDING = 16;

export const Tooltip = ({ content, position = 'top', children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [side, setSide] = useState<'above' | 'below'>(position === 'bottom' ? 'below' : 'above');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const show = () => {
    timer.current = setTimeout(() => setIsVisible(true), 150);
  };

  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    setIsVisible(false);
  };

  useLayoutEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  /**
   * Positions the popup once it has been measured.
   *
   * Two independent corrections, both needed because the popup is anchored to a
   * small icon that can sit anywhere on screen:
   *  - vertical: use the preferred side unless it would run off the top or
   *    bottom, in which case flip to the other one;
   *  - horizontal: the popup is centred on the icon, so near either edge it is
   *    nudged back inside and the arrow is shifted the opposite way to stay
   *    pointing at the icon.
   *
   * Runs in a layout effect so the correction is applied before the browser
   * paints, rather than the popup visibly jumping into place.
   */
  useLayoutEffect(() => {
    const popup = popupRef.current;
    const anchor = containerRef.current;
    if (!isVisible || !popup || !anchor) return;

    popup.style.transform = '';
    const arrow = popup.querySelector('.tooltip-arrow') as HTMLElement | null;
    if (arrow) arrow.style.transform = '';

    const anchorRect = anchor.getBoundingClientRect();
    const height = popup.offsetHeight;
    const roomAbove = anchorRect.top - EDGE_PADDING;
    const roomBelow = window.innerHeight - anchorRect.bottom - EDGE_PADDING;
    const preferred = position === 'bottom' ? 'below' : 'above';
    const fits = preferred === 'above' ? roomAbove >= height + 8 : roomBelow >= height + 8;
    setSide(fits ? preferred : (preferred === 'above' ? 'below' : 'above'));

    const rect = popup.getBoundingClientRect();
    let shift = 0;
    if (rect.left < EDGE_PADDING) shift = EDGE_PADDING - rect.left;
    else if (rect.right > window.innerWidth - EDGE_PADDING) shift = window.innerWidth - EDGE_PADDING - rect.right;

    if (shift !== 0) {
      popup.style.transform = `translateX(calc(-50% + ${shift}px))`;
      if (arrow) arrow.style.transform = `translateX(${-shift}px)`;
    }
  }, [isVisible, position, content]);

  return (
    <div
      ref={containerRef}
      className="tooltip-container"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onClick={() => (isVisible ? hide() : show())}
    >
      {children ?? (
        <button type="button" aria-label="More info" className="info-icon-btn">
          <Info size={16} />
        </button>
      )}

      {isVisible && (
        <div ref={popupRef} role="tooltip" className={`tooltip-popup tooltip-popup--${side}`}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div className={`tooltip-arrow tooltip-arrow--${side}`} />
        </div>
      )}
    </div>
  );
};

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Info } from 'lucide-react';
import '../App.css';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom';
  children?: React.ReactNode;
}

/** Form groups whose tooltip opens in the flow rather than floating over them. */
const FIELD_HOSTS = '.input-group, .variance-toggle-group';

export const Tooltip = ({ content, position = 'top', children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [fieldHost, setFieldHost] = useState<HTMLElement | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const show = () => {
    timer.current = setTimeout(() => {
      // Resolved here rather than in an effect: both pieces of state settle in
      // the same update, so opening a tooltip costs one render, not two.
      setFieldHost(containerRef.current?.closest<HTMLElement>(FIELD_HOSTS) ?? null);
      setIsVisible(true);
    }, 150);
  };

  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    setIsVisible(false);
    setFieldHost(null);
  };

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // Floating tooltips still need nudging away from the screen edge; in-flow ones
  // span their group and can never reach it.
  useEffect(() => {
    if (!isVisible || fieldHost || !tooltipRef.current) return;

    const rect = tooltipRef.current.getBoundingClientRect();
    const padding = 16;
    let leftShift = 0;
    if (rect.left < padding) leftShift = padding - rect.left;
    else if (rect.right > window.innerWidth - padding) leftShift = window.innerWidth - padding - rect.right;

    if (leftShift !== 0) {
      tooltipRef.current.style.transform = `translateX(calc(-50% + ${leftShift}px))`;
      const arrow = tooltipRef.current.querySelector('.tooltip-arrow') as HTMLElement | null;
      if (arrow) arrow.style.transform = `translateX(${-leftShift}px)`;
    }
  }, [isVisible, fieldHost]);

  // A tooltip on a form field is portalled to the end of its group so it takes up
  // real space and pushes the rest of the form down. Floating it was the problem:
  // anchored to the icon it covered the field being explained, and moved below
  // the field it covered the next one.
  const popup = isVisible ? (
    <div
      ref={tooltipRef}
      role="tooltip"
      className={fieldHost ? 'tooltip-popup tooltip-popup--inline' : `tooltip-popup ${position}`}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {!fieldHost && <div className={`tooltip-arrow ${position}`} />}
    </div>
  ) : null;

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
      {popup && (fieldHost ? createPortal(popup, fieldHost) : popup)}
    </div>
  );
};

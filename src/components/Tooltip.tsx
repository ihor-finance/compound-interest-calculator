import { useState, useRef, useEffect } from 'react';
import { Info } from 'lucide-react';
import '../App.css';

interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom';
  children?: React.ReactNode;
}

export const Tooltip = ({ content, position = 'top', children }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    timer.current = setTimeout(() => setIsVisible(true), 150);
  };

  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && tooltipRef.current) {
      // Inside a form field App.css stretches the popup between the group's
      // edges instead of centring it on the icon, so it can never reach a screen
      // edge and must not be nudged sideways. Testing the ancestor mirrors that
      // rule directly — computed `left`/`right` resolve to pixels either way and
      // cannot tell the two modes apart.
      if (tooltipRef.current.closest('.input-group, .variance-toggle-group')) return;

      const rect = tooltipRef.current.getBoundingClientRect();
      const padding = 16; // Minimum distance from screen edge
      let leftShift = 0;
      
      if (rect.left < padding) {
        leftShift = padding - rect.left;
      } else if (rect.right > window.innerWidth - padding) {
        leftShift = window.innerWidth - padding - rect.right;
      }
      
      if (leftShift !== 0) {
        tooltipRef.current.style.transform = `translateX(calc(-50% + ${leftShift}px))`;
        const arrow = tooltipRef.current.querySelector('.tooltip-arrow') as HTMLElement;
        if (arrow) {
          arrow.style.transform = `translateX(${-leftShift}px)`;
        }
      }
    }
  }, [isVisible]);

  return (
    <div 
      className="tooltip-container relative inline-flex items-center"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      onClick={() => isVisible ? hide() : show()} // added onClick for mobile
    >
      {children ? children : (
        <button type="button" aria-label="More info" className="info-icon-btn">
          <Info size={16} />
        </button>
      )}
      
      {isVisible && (
        <div ref={tooltipRef} className={`tooltip-popup ${position}`}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div className={`tooltip-arrow ${position}`} />
        </div>
      )}
      
      <style>{`
        .tooltip-container {
          position: relative;
          display: inline-flex;
          margin-left: 4px;
        }
        .tooltip-popup {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--surface);
          color: var(--text-primary);
          padding: 12px 14px;
          border-radius: 12px;
          box-shadow: var(--shadow-elevated);
          font-size: 12px;
          line-height: 16px;
          width: max-content;
          max-width: min(380px, calc(100vw - 32px));
          z-index: 1000;
          border: 1px solid var(--border);
          text-align: left;
          font-weight: 400;
        }
        .tooltip-popup.top {
          bottom: calc(100% + 8px);
        }
        .tooltip-popup.bottom {
          top: calc(100% + 8px);
        }
        .tooltip-arrow {
          position: absolute;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
        }
        .tooltip-arrow.top {
          top: 100%;
          border-color: var(--surface) transparent transparent transparent;
        }
        .tooltip-arrow.bottom {
          bottom: 100%;
          border-color: transparent transparent var(--surface) transparent;
        }
      `}</style>
    </div>
  );
};

import { useState, useRef, useEffect } from 'react';
import { vulkanTerms } from '../data/vulkanTerms';
import './Hover.css';

interface HoverProps {
  term: string;
  children?: React.ReactNode;
  inlineCode?: boolean;
}

export default function Hover({ term, children, inlineCode = false }: HoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');

  const termData = vulkanTerms[term];

  useEffect(() => {
    // Check position when the pop-up is shown
    if (isHovered && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const popoverHeightThreshold = 180; // Height threshold to trigger flipping

      if (spaceAbove < popoverHeightThreshold) {
        setPosition('bottom');
      } else {
        setPosition('top');
      }
    }
  }, [isHovered]); // This effect runs only when `isHovered` changes

  const containerClassName = `hover-container ${inlineCode ? 'hover-container--inline-code' : ''}`;

  if (!termData) {
    return (
      <span className={inlineCode ? containerClassName : ''}>
        <span className="hover-trigger hover-trigger--error">
          {children || term}
        </span>
      </span>
    );
  }

  return (
    <span
      className={containerClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="hover-trigger" ref={triggerRef}>
        {children || term}
      </span>

      {isHovered && (
        <div className={`hover-card hover-card--${position}`}>
          <strong className="hover-card__title">{termData.title}</strong>
          <p className="hover-card__description">{termData.description}</p>
          {termData.codeExample && (
            <pre className="hover-card__code">
              <code>{termData.codeExample}</code>
            </pre>
          )}
          {termData.url && (
            <a href={termData.url} className="hover-card__link">
              Read more
            </a>
          )}
        </div>
      )}
    </span>
  );
}


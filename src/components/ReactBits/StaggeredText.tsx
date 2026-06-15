import type { CSSProperties, ElementType } from 'react';
import styles from './StaggeredText.module.scss';

interface StaggeredTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  startDelay?: number;
  stepDelay?: number;
}

export function StaggeredText({
  text,
  as: Component = 'span',
  className = '',
  wordClassName = '',
  startDelay = 0,
  stepDelay = 28,
}: StaggeredTextProps) {
  let charIndex = 0;
  const words = text.split(' ');

  return (
    <Component className={`${styles.text} ${className}`} aria-label={text}>
      <span className={styles.content} aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`} className={`${styles.word} ${wordClassName}`}>
            {Array.from(word).map((char) => {
              const delay = startDelay + charIndex * stepDelay;
              charIndex += 1;

              return (
                <span
                  key={`${char}-${charIndex}`}
                  className={styles.char}
                  style={{ '--char-delay': `${delay}ms` } as CSSProperties}
                >
                  {char}
                </span>
              );
            })}
            {wordIndex < words.length - 1 ? '\u00a0' : null}
          </span>
        ))}
      </span>
    </Component>
  );
}

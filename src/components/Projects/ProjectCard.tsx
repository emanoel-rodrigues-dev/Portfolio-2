import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Projects.module.scss';

interface ProjectCardProps {
  project: {
    category: string;
    title: string;
    kind: string;
    period?: string;
    image?: string;
    imageWebp?: string;
    imageAlt?: string;
    description: string;
    role: string;
    outcome: string;
    tags: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const previewTitleId = useId();
  const imageAlt = project.imageAlt ?? `Tela do projeto ${project.title}`;
  const mediaButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPreviewOpen(false);
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    const triggerButton = mediaButtonRef.current;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      triggerButton?.focus();
    };
  }, [isPreviewOpen]);

  return (
    <article className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <span className={styles.category}>{project.category}</span>
        <div className={styles.metaGroup}>
          {project.period && <span className={styles.period}>{project.period}</span>}
          <span className={styles.kind}>{project.kind}</span>
        </div>
      </div>
      {project.image && (
        <>
          <button
            type="button"
            ref={mediaButtonRef}
            className={`${styles.mediaFrame} ${isImageLoaded ? styles.mediaFrameLoaded : ''}`}
            onClick={() => setIsPreviewOpen(true)}
            aria-label={`Ampliar imagem do projeto ${project.title}`}
          >
            <picture>
              {project.imageWebp && <source srcSet={project.imageWebp} type="image/webp" />}
              <img
                src={project.image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsImageLoaded(true)}
              />
            </picture>
            <span className={styles.mediaIcon} aria-hidden="true"></span>
          </button>
          {isPreviewOpen && createPortal(
            <div
              className={styles.previewOverlay}
              onMouseDown={() => setIsPreviewOpen(false)}
            >
              <div
                className={styles.previewDialog}
                role="dialog"
                aria-modal="true"
                aria-labelledby={previewTitleId}
                onMouseDown={(event) => event.stopPropagation()}
              >
                <div className={styles.previewHeader}>
                  <div>
                    <span className={styles.previewCategory}>{project.category}</span>
                    <h5 id={previewTitleId}>{project.title}</h5>
                  </div>
                  <button
                    type="button"
                    ref={closeButtonRef}
                    className={styles.previewClose}
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Fechar imagem ampliada"
                  >
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <picture>
                  {project.imageWebp && <source srcSet={project.imageWebp} type="image/webp" />}
                  <img src={project.image} alt={imageAlt} decoding="async" />
                </picture>
              </div>
            </div>,
            document.body
          )}
        </>
      )}
      <h4 className={styles.title}>{project.title}</h4>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.caseInfo}>
        <div className={styles.caseItem}>
          <span className={styles.caseLabel}>Atuação</span>
          <p>{project.role}</p>
        </div>
        <div className={styles.caseItem}>
          <span className={styles.caseLabel}>Entrega</span>
          <p>{project.outcome}</p>
        </div>
      </div>
      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

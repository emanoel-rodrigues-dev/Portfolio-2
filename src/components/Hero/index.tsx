import styles from './Hero.module.scss';
import { StaggeredText } from '../ReactBits/StaggeredText';

const resume = {
  href: '/curriculo-resumido.pdf',
  download: 'Emanoel_Rodrigues.pdf',
  label: 'Baixar currículo',
  detail: 'Versão principal',
};

function DownloadIcon() {
  return (
    <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  );
}

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div 
        className={styles.bgImage} 
        style={{ backgroundImage: "url('/Emanoel-Novo-Peaky.png')" }}
      ></div>
      <div className={styles.bgGradient}></div>
       
      <div className={styles.content}>
        <h2 className={styles.subtitle}>React, Angular, TypeScript, Java e Spring Boot</h2>
        <StaggeredText
          as="h1"
          text="Emanoel Rodrigues"
          className={styles.title}
          wordClassName={styles.titleWord}
          startDelay={120}
          stepDelay={34}
        />
        <p className={styles.description}>
          Desenvolvedor Full Stack com 3 anos de experiência em produção, graduado em Análise e Desenvolvimento de Sistemas e graduando em Redes de Computadores.<br />{' '}
          <span className={styles.descriptionHighlight}>
            Atuação full stack com React, Angular, Next.js, TypeScript, Java, Spring Boot e APIs REST.
          </span>
        </p>
        
        <div className={styles.actionButtons}>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="https://github.com/emanoel-rodrigues-dev" target="_blank" rel="noreferrer">GitHub</a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="https://www.linkedin.com/in/emanoel-rodrigues" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="#contato">Contato</a>
          <div className={styles.resumeOptions}>
            <a
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnWithIcon} ${styles.resumeBtn}`}
              href={resume.href}
              download={resume.download}
              aria-label="Baixar currículo"
            >
              <DownloadIcon />
              <span className={styles.resumeText}>
                <span>{resume.label}</span>
                <small>{resume.detail}</small>
              </span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

import styles from './Hero.module.scss';
import { StaggeredText } from '../ReactBits/StaggeredText';

const resumeOptions = [
  {
    href: '/curriculo-mestre-ats.pdf',
    download: 'Emanoel_Rodrigues_Curriculo_Mestre_ATS.pdf',
    label: 'Currículo detalhado',
    detail: 'Mais descritivo',
  },
  {
    href: '/curriculo-resumido.pdf',
    download: 'Emanoel_Rodrigues_Curriculo_Resumido.pdf',
    label: 'Currículo resumido',
    detail: 'Versão curta',
  },
];

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
        <h2 className={styles.subtitle}>React, Angular e Java</h2>
        <StaggeredText
          as="h1"
          text="Emanoel Rodrigues"
          className={styles.title}
          wordClassName={styles.titleWord}
          startDelay={120}
          stepDelay={34}
        />
        <p className={styles.description}>
          Desenvolvedor Full Stack com 3 anos de experiência em produção, graduado em Análise e Desenvolvimento de Sistemas e graduando em Redes de Computadores.<br />
          <span className={styles.descriptionHighlight}>
            Front-end ao back-end com foco em qualidade, performance e escalabilidade.
          </span>
        </p>
        
        <div className={styles.actionButtons}>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="https://github.com/EmanoelRodrigues-darmlabs" target="_blank" rel="noreferrer">GitHub</a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="https://www.linkedin.com/in/emanoel-rodrigues" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="#contato">Contato</a>
          <div className={styles.resumeOptions} role="group" aria-label="Opções de download do currículo">
            {resumeOptions.map((resume) => (
              <a
                key={resume.href}
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnWithIcon} ${styles.resumeBtn}`}
                href={resume.href}
                download={resume.download}
                aria-label={`Baixar ${resume.label}`}
              >
                <DownloadIcon />
                <span className={styles.resumeText}>
                  <span>{resume.label}</span>
                  <small>{resume.detail}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

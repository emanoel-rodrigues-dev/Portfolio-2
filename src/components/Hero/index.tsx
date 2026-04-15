import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div 
        className={styles.bgImage} 
        style={{ backgroundImage: "url('/Emanoel-Novo-Peaky.png')" }}
      ></div>
      <div className={styles.bgGradient}></div>
       
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Pela Ordem do Código</h2>
        <h1 className={styles.title}>Emanoel Rodrigues</h1>
        <p className={styles.description}>
          Full Stack Developer & Front-end Tech Lead.<br />
          <span className={styles.descriptionHighlight}>
            Construindo aplicações web modernas, escaláveis e orientadas a resultados.
          </span>
        </p>
        
        <div className={styles.actionButtons}>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="https://github.com/EmanoelRodrigues-darmlabs" target="_blank" rel="noreferrer">GitHub</a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="https://www.linkedin.com/in/emanoel-rodrigues" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="#contato">Contato</a>
          <a className={`${styles.btn} ${styles.btnPrimary} ${styles.btnWithIcon}`} href="/curriculo.pdf" download="Emanoel_Rodrigues_CV.pdf">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Baixar Currículo
          </a>
        </div>
      </div>

      <div className={styles.decorationLineWrapper}>
        <div className={styles.decorationLine}></div>
      </div>
    </section>
  );
}

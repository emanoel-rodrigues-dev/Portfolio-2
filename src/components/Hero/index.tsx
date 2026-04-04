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
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="https://github.com/EmanoelRodrigues-darmlabs" target="_blank" rel="noreferrer">GitHub</a>
          <a className={`${styles.btn} ${styles.btnOutline}`} href="https://www.linkedin.com/in/emanoel-rodrigues" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className={`${styles.btn} ${styles.btnSecondary}`} href="#contato">Contato</a>
        </div>
      </div>

      <div className={styles.decorationLineWrapper}>
        <div className={styles.decorationLine}></div>
      </div>
    </section>
  );
}

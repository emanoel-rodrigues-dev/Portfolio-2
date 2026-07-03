import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.container}>
        <h3 className={styles.title}>Entre em Contato</h3>
        <p className={styles.quote}>
          "A inteligência é uma coisa preciosa, não é mesmo? Frequentemente chega tarde demais." — Peaky Blinders
        </p>

        <div className={styles.contactInfo}>
          <div className={styles.contactGroup}>
            <span className={styles.contactLabel}>Email Profissional</span>
            <a className={styles.contactLink} href="mailto:emanuellegario@gmail.com">
              emanuellegario@gmail.com
            </a>
          </div>
          <div className={styles.contactGroup}>
            <span className={styles.contactLabel}>Telefone / WhatsApp</span>
            <a 
              className={styles.contactLink} 
              href="https://wa.me/5588981283896" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              (88) 9 8128-3896
            </a>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a className={styles.socialLink} href="https://github.com/emanoel-rodrigues-dev" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={styles.socialLink} href="https://www.linkedin.com/in/emanoel-rodrigues" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Emanoel Rodrigues. Crafted with focus and precision.
        </div>
      </div>
    </footer>
  );
}

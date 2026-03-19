import styles from './Navbar.module.scss';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          ER <span className={styles.logoSub}>Developments</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#hero">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </nav>
  );
}

import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fecha o menu ao clicar em um link
  const closeMenu = () => setIsOpen(false);

  // Bloqueia o scroll quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          ER <span className={styles.logoSub}>Developments</span>
        </div>
        
        {/* Hamburger Button */}
        <button 
          className={`${styles.menuButton} ${isOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#experiencia" onClick={closeMenu}>Experiência</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </div>
      </div>
    </nav>
  );
}

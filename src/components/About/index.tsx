import { useState } from 'react';
import styles from './About.module.scss';

export function About() {
  const [isPeaky, setIsPeaky] = useState(false);

  return (
    <section className={styles.about} id="sobre">
      <div className={styles.grid}>
        <div className={styles.textContent}>
          <h3 className={styles.sectionTitle}>
            <span className={styles.titleLine}></span> Sobre Mim
          </h3>
          <div className={styles.description}>
            <p>Graduado em Análise e Desenvolvimento de Sistemas, sou um <span className={styles.highlight}>Desenvolvedor Full Stack</span> apaixonado por arquitetura limpa e performance.</p>
            <p>Com sólida experiência em ecossistemas modernos como <span className={styles.goldHighlight}>React, Next.js, TypeScript e Spring Boot</span>, atuo liderando frentes técnicas de front-end, garantindo que a entrega não seja apenas funcional, mas excepcional em termos de engenharia.</p>
            <p>Meu foco é a escalabilidade. Acredito que o código bem escrito é como uma alfaiataria sob medida: preciso, elegante e feito para durar.</p>
          </div>
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <span className={styles.roleTitle}>Tech Lead</span>
              <span className={styles.roleSubtitle}>Front-end Specialist</span>
            </div>
            <div className={styles.roleCard}>
              <span className={styles.roleTitle}>Full Stack</span>
              <span className={styles.roleSubtitle}>Java & TypeScript</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <div className={styles.toggleWrapper}>
              <button 
                className={`${styles.toggleBtn} ${!isPeaky ? styles.btnActive : styles.btnInactive}`}
                onClick={() => setIsPeaky(false)}
              >
                Estilo Profissional
              </button>
              <button 
                className={`${styles.toggleBtn} ${isPeaky ? styles.btnActive : styles.btnInactive}`}
                onClick={() => setIsPeaky(true)}
              >
                Estilo Peaky
              </button>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.borderEffect}></div>
              <div className={styles.imageOverflow}>
                <img 
                  alt="Emanoel Rodrigues - Profissional" 
                  className={`${styles.photo} ${!isPeaky ? styles.photoActive : styles.photoInactive}`}
                  src="/Emanoel.jpg" 
                />
                <img 
                  alt="Emanoel Rodrigues - Peaky Blinders" 
                  className={`${styles.photo} ${isPeaky ? styles.photoActive : styles.photoInactive}`}
                  src="/Emanoel-Peaky.png" 
                />
              </div>
              <div className={styles.cornerTL}></div>
              <div className={styles.cornerTR}></div>
              <div className={styles.cornerBL}></div>
              <div className={styles.cornerBR}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

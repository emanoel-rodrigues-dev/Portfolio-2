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
            <p>Sou <span className={styles.highlight}>Desenvolvedor Full Stack</span> com 3 anos de experiência em projetos reais de produção, atuando do front-end ao back-end com foco em qualidade, performance e escalabilidade.</p>
            <p>No front-end, trabalho com <span className={styles.goldHighlight}>React.js, Next.js, Angular e TypeScript</span>, criando SPAs responsivas e cross-browser com Design Systems e boas práticas de UI/UX.</p>
            <p>No back-end, desenvolvo com Java e Spring Boot, APIs RESTful, integração com MySQL e Firebase, Docker e Git. Sou graduado em Análise e Desenvolvimento de Sistemas e graduando em Redes de Computadores.</p>
          </div>
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <span className={styles.roleTitle}>Full Stack</span>
              <span className={styles.roleSubtitle}>React, Angular & Java</span>
            </div>
            <div className={styles.roleCard}>
              <span className={styles.roleTitle}>Qualidade</span>
              <span className={styles.roleSubtitle}>Testes & Segurança</span>
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
                  src="/Emanoel-Novo.jpeg" 
                />
                <img 
                  alt="Emanoel Rodrigues - Peaky Blinders" 
                  className={`${styles.photo} ${isPeaky ? styles.photoActive : styles.photoInactive}`}
                  src="/Emanoel-Novo-Peaky.png" 
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

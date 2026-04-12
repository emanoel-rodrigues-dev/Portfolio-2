import styles from './Skills.module.scss';

const skills = [
  {
    category: "Front-end",
    items: ["React / Next.js", "TypeScript", "SASS / UI Design", "Angular / Redux"]
  },
  {
    category: "Back-end & Arquitetura",
    items: ["Java / Spring Boot", "Node.js", "REST APIs", "Arquitetura de Software", "WebSockets / Tempo Real"]
  },
  {
    category: "Ferramentas & Infra",
    items: ["Docker", "Git", "Linux", "Redes Ópticas / GPON"]
  },
  {
    category: "Metodologias & Liderança",
    items: ["Scrum / Ágil", "Liderança Técnica", "Code Review", "Product Owner (PO)"]
  }
];

const principles = [
  {
    id: "01.",
    title: "Simplicidade é Chave",
    description: "Código limpo e legível é prioridade sobre soluções excessivamente complexas."
  },
  {
    id: "02.",
    title: "Foco em Performance",
    description: "Aplicações devem ser rápidas e eficientes por natureza, não por correção posterior."
  },
  {
    id: "03.",
    title: "Escalabilidade",
    description: "Arquiteturas pensadas para crescer sem comprometer a estabilidade."
  }
];

export function Skills() {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h3 className={styles.sectionTitle}>Habilidades</h3>
        <div className={styles.skillsList}>
          {skills.map(skillGroup => (
            <div key={skillGroup.category} className={styles.skillGroup}>
              <span className={styles.skillCategory}>{skillGroup.category}</span>
              <div className={styles.skillTags}>
                {skillGroup.items.map(item => (
                  <span key={item} className={styles.skillTag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.principlesContainer}>
        <h3 className={styles.sectionTitle}>Princípios de Engenharia</h3>
        <ul className={styles.principlesList}>
          {principles.map(principle => (
            <li key={principle.id} className={styles.principleItem}>
              <span className={styles.principleId}>{principle.id}</span>
              <div>
                <span className={styles.principleTitle}>{principle.title}</span>
                <p className={styles.principleDesc}>{principle.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.stamp}>
          <span>Quality<br/>Guaranteed<br/>Since 2024</span>
        </div>
      </div>
    </section>
  );
}

import styles from './Skills.module.scss';

const skills = [
  {
    category: "React & Ecossistema",
    items: ["React.js", "Next.js", "Hooks customizados", "Context API", "Redux", "Styled Components", "React Query"]
  },
  {
    category: "Angular & Ecossistema",
    items: ["Angular v6-19", "Angular CLI", "RxJS", "Guards", "Interceptors HTTP", "Formulários reativos", "Lazy loading"]
  },
  {
    category: "Linguagens & UI",
    items: ["JavaScript ES6+", "TypeScript", "HTML5 semântico", "CSS3", "SCSS/SASS", "Programação funcional", "UI/UX"]
  },
  {
    category: "Back-end & Dados",
    items: ["Java 8+", "Spring Boot", "APIs RESTful", "JWT", "MySQL", "Firebase", "Microsserviços"]
  },
  {
    category: "Qualidade, Segurança & Web",
    items: ["TDD", "Jest", "Jasmine", "Karma", "ARIA/WCAG", "XSS/SQLi", "SEO", "WebSocket"]
  },
  {
    category: "DevOps & Metodologias",
    items: ["Docker", "Git/GitHub", "GitHub Actions", "Linux", "Scrum", "Kanban", "Copilot", "ChatGPT"]
  }
];

const principles = [
  {
    id: "01.",
    title: "Aprendizado Rápido",
    description: "Capacidade comprovada de absorver novas stacks e aplicá-las em produção com autonomia."
  },
  {
    id: "02.",
    title: "Qualidade em Produção",
    description: "TDD, code review, performance, acessibilidade e segurança como parte natural da entrega."
  },
  {
    id: "03.",
    title: "Visão de Produto",
    description: "Colaboração próxima com designers, POs e engenharia para resolver problemas reais de negócio."
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

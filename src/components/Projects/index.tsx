import styles from './Projects.module.scss';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    category: "Full Stack",
    title: "Plataformas DARM / Furukawa / Lightera",
    description: "Atuação em plataformas críticas de negócio do front-end ao back-end, com React.js, Angular 19, Java/Spring Boot, APIs RESTful, WebSocket, MySQL e Firebase.",
    tags: ["React", "Angular", "Java", "Spring Boot"]
  },
  {
    id: 2,
    category: "BI & Analytics",
    title: "Plataforma Insights",
    description: "Dashboards e gráficos interativos para métricas de negócio em tempo real, com Design System, SCSS, acessibilidade ARIA e otimização cross-browser.",
    tags: ["React", "Angular", "PrimeNG", "SCSS"]
  },
  {
    id: 3,
    category: "Monitoramento",
    title: "Event Handler (EH)",
    description: "Plataforma de monitoramento em tempo real com Angular, TypeScript e WebSocket, voltada para missão crítica, alta performance, testes e segurança em formulários.",
    tags: ["Angular", "TypeScript", "WebSocket", "Jasmine"]
  },
  {
    id: 4,
    category: "Produto Digital",
    title: "BookTrade",
    description: "Produto criado do zero, cobrindo ideação, arquitetura, desenvolvimento, deploy e manutenção com atuação como PO e desenvolvedor full stack.",
    tags: ["React", "Redux", "Spring Boot", "MySQL"]
  }
];

export function Projects() {
  return (
    <section className={styles.projects} id="projetos">
      <div className={styles.header}>
        <div>
          <h3 className={styles.sectionTitle}>Projetos em Destaque</h3>
          <p className={styles.subtitle}>Projetos e produtos alinhados ao currículo atual.</p>
        </div>
        <div className={styles.headerLine}></div>
      </div>
      
      <div className={styles.grid}>
        {projects.map(proj => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
}

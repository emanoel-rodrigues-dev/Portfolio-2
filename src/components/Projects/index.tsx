import styles from './Projects.module.scss';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    category: "Inovação",
    title: "Sistema MAESTRO",
    description: "Ferramenta integrada voltada à otimização do ciclo de vida do desenvolvimento de software, centralizando processos de engenharia para maior eficiência.",
    tags: ["Next.js", "Node.js", "PostgreSQL"]
  },
  {
    id: 2,
    category: "Monitoramento",
    title: "Event Handler (EH)",
    description: "Dashboard de alta performance para monitoramento de redes ópticas em tempo real, focado em diagnóstico rápido de falhas e experiência do usuário.",
    tags: ["React", "TypeScript", "SASS"]
  }
];

export function Projects() {
  return (
    <section className={styles.projects} id="projetos">
      <div className={styles.header}>
        <div>
          <h3 className={styles.sectionTitle}>Projetos em Destaque</h3>
          <p className={styles.subtitle}>Artesanato digital em larga escala.</p>
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

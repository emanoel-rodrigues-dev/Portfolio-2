import styles from './Projects.module.scss';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    category: "Gerenciamento",
    title: "OSP Manager",
    description: "Módulo avançado para gerenciamento de redes ópticas GPON, focado em alta disponibilidade e provisionamento eficiente.",
    tags: ["React", "Next.js", "Java", "Spring"]
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

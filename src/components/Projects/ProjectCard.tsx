import styles from './Projects.module.scss';

interface ProjectCardProps {
  project: {
    category: string;
    title: string;
    description: string;
    tags: string[];
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <span className={styles.category}>{project.category}</span>
      <h4 className={styles.title}>{project.title}</h4>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

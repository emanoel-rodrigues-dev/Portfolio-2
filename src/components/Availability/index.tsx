import styles from './Availability.module.scss';

export function Availability() {
  return (
    <section className={styles.availability} aria-labelledby="availability-title">
      <div className={styles.content}>
        <span className={styles.eyebrow}>Novos desafios</span>
        <h3 id="availability-title" className={styles.title}>Aberto a oportunidades</h3>
        <p className={styles.description}>
          Disponível para oportunidades profissionais e projetos sob demanda como
          Desenvolvedor Full Stack, com foco em produtos web, sistemas corporativos
          e aplicações em produção.
        </p>
        <div className={styles.tags} aria-label="Áreas de interesse">
          <span>Full Stack</span>
          <span>Produtos Web</span>
          <span>Sistemas Corporativos</span>
        </div>
      </div>

      <div className={styles.actions} aria-label="Ações para contato profissional">
        <a className={styles.primaryAction} href="#contato">Conversar</a>
        <a
          className={styles.secondaryAction}
          href="https://www.linkedin.com/in/emanoel-rodrigues"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

import styles from './Recommendations.module.scss';

const recommendations = [
  {
    name: 'Alysson Chicó',
    role: 'Sênior Java Developer',
    context: 'Liderança técnica no OSP',
    quote:
      'Demonstrou comprometimento, profissionalismo e excelência técnica, buscando entregar soluções de qualidade e agregar valor ao negócio.'
  },
  {
    name: 'Auricio Gomes',
    role: 'Desenvolvedor Full Stack',
    context: 'Mesmo time no projeto OSP',
    quote:
      'Um profissional dedicado, aberto a opiniões e sempre disposto a entender o contexto para discutir melhorias.'
  },
  {
    name: 'Alex Lacerda Ramos',
    role: 'Professor no IFCE',
    context: 'Supervisão acadêmica no ALMA Labs',
    quote:
      'Demonstrou responsabilidade, interesse em aprender e comprometimento com as atividades em projetos de desenvolvimento web.'
  }
];

export function Recommendations() {
  return (
    <section className={styles.recommendations} aria-labelledby="recommendations-title">
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Feedbacks recebidos</span>
          <h3 id="recommendations-title" className={styles.title}>
            Recomendações
          </h3>
          <p className={styles.subtitle}>
            Feedbacks recebidos no LinkedIn sobre entregas, comunicação e evolução
            técnica.
          </p>
        </div>

        <a
          className={styles.link}
          href="https://www.linkedin.com/in/emanoel-rodrigues/details/recommendations/"
          target="_blank"
          rel="noreferrer"
        >
          Ver no LinkedIn
        </a>
      </div>

      <div className={styles.grid}>
        {recommendations.map((recommendation) => (
          <article key={recommendation.name} className={styles.card}>
            <span className={styles.context}>{recommendation.context}</span>
            <p className={styles.quote}>&ldquo;{recommendation.quote}&rdquo;</p>
            <div className={styles.author}>
              <strong>{recommendation.name}</strong>
              <span>{recommendation.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

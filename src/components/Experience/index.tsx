import styles from './Experience.module.scss';
import type { ReactNode } from 'react';

const experiences: {
  id: number;
  company: string;
  period: string;
  role: string;
  highlights: string[];
  icon: ReactNode;
}[] = [
  {
    id: 1,
    company: "DARM / Furukawa / Lightera",
    period: "Dez 2024 - Atual",
    role: "Desenvolvedor Full Stack",
    highlights: [
      "Atuação no módulo OSP para gerenciamento de redes GPON.",
      "Back-end com Java / Spring Boot.",
      "Front-end com React / Next.js.",
      "Containerização com Docker e controle de versão com Git."
    ],
    icon: <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
  },
  {
    id: 2,
    company: "Darm Labs",
    period: "Nov 2024 - Atual",
    role: "Líder Técnico de Front-End",
    highlights: [
      "Liderança técnica de times e definição de arquitetura.",
      "Padronização de código e melhores práticas.",
      "Realização de Code Reviews e mentoria técnica."
    ],
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
  },
  {
    id: 3,
    company: "Darm Labs (MAESTRO)",
    period: "Jul 2024 - Jul 2025",
    role: "Desenvolvedor Front-End",
    highlights: [
      "Otimização do ciclo de vida de desenvolvimento de software.",
      "Arquitetura modular e componentização avançada.",
      "Forte integração entre requisitos de negócio e implementação técnica."
    ],
    icon: (
      <>
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
        <path clipRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" fillRule="evenodd"></path>
      </>
    )
  },
  {
    id: 4,
    company: "DARM / Furukawa / Lightera",
    period: "Jan 2024 - Dez 2024",
    role: "Desenvolvedor Web Front-End",
    highlights: [
      "Monitoramento em tempo real de redes Furukawa (Event Handler).",
      "Visualização de alertas críticos de OLT e ONU.",
      "Stack: React, Next.js, TypeScript e SASS."
    ],
    icon: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.25-2.906z"></path>
  },
  {
    id: 5,
    company: "BookTrade (Autônomo)",
    period: "Fev 2024 - Atual",
    role: "Co-criador & Front-End Dev",
    highlights: [
      "Atuação como Product Owner na definição estratégica de funcionalidades.",
      "Desenvolvimento completo da interface front-end.",
      "Foco em experiência do usuário e visão de produto."
    ],
    icon: <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
  },
  {
    id: 6,
    company: "DARM / Furukawa / Lightera",
    period: "Ago 2024 - Dez 2024",
    role: "Desenvolvedor Front-End",
    highlights: [
      "Projeto Insights: Visualização e análise de dados complexos.",
      "Criação de dashboards para métricas operacionais em tempo real.",
      "Stack: React, Next.js e TypeScript."
    ],
    icon: <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
  },
  {
    id: 7,
    company: "Darm Labs",
    period: "Ago 2023 - Set 2023",
    role: "Trainee Mobile Developer",
    highlights: [
      "Introdução ao desenvolvimento mobile em ambiente ágil.",
      "Trabalho orientado por Scrum e SASS.",
      "Foco em boas práticas de UI/UX para interfaces móveis."
    ],
    icon: <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>
  }
];

export function Experience() {
  return (
    <section className={styles.experience} id="experiencia">
      <h3 className={styles.sectionTitle}>Jornada Profissional</h3>
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.timelineItem}>
            <div className={styles.iconMarker}>
              <svg className={styles.svgIcon} fill="currentColor" viewBox="0 0 20 20">
                {exp.icon}
              </svg>
            </div>
            <div className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <span className={styles.companyName}>{exp.company}</span>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <h4 className={styles.role}>{exp.role}</h4>
              <ul className={styles.highlightsList}>
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import styles from './Experience.module.scss';
import type { ReactNode } from 'react';

const experiences: {
  id: number;
  company: string;
  period: string;
  role: string;
  highlights: string[];
  icon: ReactNode;
  viewBox?: string;
}[] = [
  {
    id: 1,
    company: "DARM / Furukawa / Lightera",
    period: "Dez 2024 - Atual",
    role: "Desenvolvedor Full Stack",
    highlights: [
      "Desenvolvimento full stack com React.js, Angular 19 e Java/Spring Boot em plataformas críticas de negócio.",
      "Implementação de guards, interceptors HTTP com JWT, formulários reativos, lazy loading e rotas avançadas.",
      "TDD com Jest/Jasmine, code review, otimização de performance e boas práticas de segurança contra XSS e SQLi.",
      "Integração com APIs RESTful, WebSocket, MySQL, Firebase, Docker, Git/GitHub e CI/CD com GitHub Actions.",
      "Uso de GitHub Copilot e ChatGPT para acelerar entregas e elevar a qualidade do código."
    ],
    icon: <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
  },
  {
    id: 2,
    company: "DARM Labs",
    period: "Nov 2024 - Atual",
    role: "Líder Técnico de Front-End",
    highlights: [
      "Definição de arquitetura front-end, padrões de componentização, Design System e estratégias de qualidade.",
      "Code review sistemático, mentoria informal e investigação de novas tecnologias para React e Angular.",
      "Colaboração com designers, product owners e engenheiros em cerimônias Scrum com foco em entregas de alto impacto."
    ],
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>,
    viewBox: "0 0 24 24"
  },
  {
    id: 3,
    company: "DARM Labs (Projeto MAESTRO)",
    period: "Jul 2024 - Jul 2025",
    role: "Desenvolvedor Front-End",
    highlights: [
      "Criação de SPAs com React.js, Next.js e TypeScript, usando Redux, hooks customizados, Context API e Styled Components.",
      "Aplicação de TDD com Jest, SEO com Next.js, HTML semântico e performance de carregamento.",
      "Integração com Firebase, CI/CD com GitHub Actions, Docker, Git e uso ativo de IA no desenvolvimento."
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
    company: "DARM / Furukawa / Lightera (Plataforma Insights)",
    period: "Ago 2024 - Dez 2024",
    role: "Desenvolvedor Front-End",
    highlights: [
      "Desenvolvimento de plataforma de Business Intelligence e analytics data-driven com React.js e Angular.",
      "Criação de dashboards, gráficos interativos e métricas de negócio em tempo real.",
      "Uso de Design System com Angular Material e PrimeNG, SCSS, ARIA e otimização cross-browser."
    ],
    icon: <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.25-2.906z"></path>
  },
  {
    id: 5,
    company: "DARM / Furukawa / Lightera (Event Handler)",
    period: "Jan 2024 - Dez 2024",
    role: "Desenvolvedor Front-End",
    highlights: [
      "Plataforma de monitoramento em tempo real com Angular, TypeScript e WebSocket para missão crítica.",
      "TDD com Jasmine e Karma, manutenção de aplicações legadas, depuração via logs e stack traces.",
      "Integração com MySQL, segurança em formulários, sanitização de inputs e acessibilidade web."
    ],
    icon: <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
  },
  {
    id: 6,
    company: "BookTrade (Autônomo)",
    period: "Fev 2024 - Atual",
    role: "Co-criador | PO & Full Stack Developer",
    highlights: [
      "Produto digital criado do zero: ideação, arquitetura, desenvolvimento, deploy e manutenção.",
      "Atuação full stack com React.js, Redux, Styled Components, Jest/TDD, Angular, Java, Spring Boot e MySQL.",
      "Firebase, autenticação JWT, SEO, CI/CD com GitHub Actions e Design System com Angular Material."
    ],
    icon: <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
  },
  {
    id: 7,
    company: "DARM Labs",
    period: "Ago 2023 - Set 2023",
    role: "Trainee Mobile Developer",
    highlights: [
      "Primeiro contato com desenvolvimento mobile em ambiente de inovação.",
      "Demonstração de rápida curva de aprendizado em contexto técnico e colaborativo.",
      "Vivência com rotinas ágeis, boas práticas de interface e evolução contínua."
    ],
    icon: <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>,
    viewBox: "0 0 24 24"
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
              <svg className={styles.svgIcon} fill="currentColor" viewBox={exp.viewBox || "0 0 20 20"}>
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

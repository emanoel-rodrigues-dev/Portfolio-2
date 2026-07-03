import styles from './Projects.module.scss';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    category: "Plataforma OSP",
    title: "DARM / Furukawa / Lightera",
    description: "Módulo da Furukawa / Lightera para gerenciamento de redes GPON e redes ópticas, com atuação full stack em React.js, Angular 19, Java/Spring Boot, APIs RESTful/WebSocket e regras de negócio.",
    tags: ["React", "Angular 19", "Java", "Spring Boot", "WebSocket", "MySQL"]
  },
  {
    id: 2,
    category: "Plataforma Insights",
    title: "DARM / Furukawa / Lightera",
    description: "Front-end para análise e processamento de dados em tempo real dos serviços Furukawa, com dashboards, métricas operacionais e indicadores de sistemas integrados.",
    tags: ["React", "Angular", "PrimeNG", "SCSS", "Dashboards"]
  },
  {
    id: 3,
    category: "Event Handler (EH)",
    title: "DARM / Furukawa / Lightera",
    description: "Monitoramento em tempo real de redes ópticas, com alertas de OLTs e ONUs, falhas, quedas de equipamentos, correlação de eventos, notificações automáticas e integração com MySQL.",
    tags: ["React", "Angular", "WebSocket", "Jasmine", "MySQL"]
  },
  {
    id: 4,
    category: "Gestão Clínica",
    title: "UpClinic",
    description: "SaaS clínico multi-tenant desenvolvido como freelancer, com painel de TV para filas e chamadas de pacientes, módulos administrativos e operacionais, controle por empresa e relatórios.",
    tags: ["React 18", "TypeScript", "Supabase", "Tailwind", "React Query"]
  },
  {
    id: 5,
    category: "Gestão de Licitações",
    title: "UpLicita",
    description: "Sistema web freelancer para gestão de licitações, pedidos, compras e fornecedores, incluindo fluxos operacionais com IA para busca de fornecedores e deploy em produção.",
    tags: ["React 18", "TypeScript", "Supabase", "Zustand", "IA", "Vercel"]
  },
  {
    id: 6,
    category: "Produto Digital",
    title: "BookTrade",
    description: "Plataforma para venda e troca de livros entre estudantes, criada do zero com atuação em produto, organização de entregas, interfaces, integrações e regras de negócio.",
    tags: ["React", "Redux", "Spring Boot", "Firebase"]
  },
  {
    id: 7,
    category: "Finanças Pessoais",
    title: "Minha Grana",
    description: "App próprio de controle financeiro pessoal, com dashboards e gráficos para receitas, despesas e indicadores, apoiado por Supabase, rotinas automatizadas e visualização de dados.",
    tags: ["React 19", "TypeScript", "Supabase", "React Query", "Recharts", "SCSS"]
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

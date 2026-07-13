import styles from './Projects.module.scss';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    id: 1,
    category: "Ecossistema Corporativo",
    title: "DARM / Furukawa / Lightera",
    kind: "Corporativo",
    image: "/cases/darm-ecosystem.png",
    imageWebp: "/cases/darm-ecosystem.webp",
    imageAlt: "Arte conceitual do ecossistema corporativo com módulos OSP, Insights e Event Handler conectados por linhas de rede",
    description: "Atuação em três frentes corporativas do ecossistema DARM / Furukawa / Lightera: OSP, Insights e Event Handler, com foco em redes GPON, redes ópticas, dashboards e monitoramento em tempo real.",
    role: "Interfaces, integrações e fluxos em OSP, Insights e Event Handler com React.js, Redux no OSP, Angular, Java/Spring Boot, APIs REST/WebSocket e MySQL.",
    outcome: "Apoio à operação, análise de dados, eventos e monitoramento de redes ópticas em ambiente corporativo.",
    tags: ["React", "Redux", "Angular", "Java", "Spring Boot", "WebSocket"]
  },
  {
    id: 2,
    category: "Gestão Clínica",
    title: "UpClinic",
    kind: "Freelancer",
    image: "/cases/upclinic-atendimentos.png",
    imageWebp: "/cases/upclinic-atendimentos.webp",
    imageAlt: "Tela de atendimentos do UpClinic com pacientes organizados em colunas de confirmação, triagem, aguardando e em atendimento",
    description: "Sistema clínico multi-tenant desenvolvido como freelancer, com painel de TV para filas e chamadas de pacientes, módulos administrativos e operacionais, controle por empresa e relatórios.",
    role: "Desenvolvimento do produto, arquitetura front-end, integrações com Supabase e fluxos administrativos.",
    outcome: "Sistema pronto para operação clínica com módulos de atendimento, controle e visualização.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind", "React Query"]
  },
  {
    id: 3,
    category: "Gestão Comercial",
    title: "Jôjô Make",
    kind: "Freelancer",
    image: "/cases/jojo-make-dashboard.png",
    imageWebp: "/cases/jojo-make-dashboard.webp",
    imageAlt: "Dashboard do sistema Jôjô Make com painel de produtos, estoque baixo, pagamentos e navegação por módulos",
    description: "Sistema para gestão e venda de cosméticos consignados ou distribuídos em farmácias, com controle de produtos, estoque por farmácia, movimentações, vendas, pagamentos e relatórios.",
    role: "Atuação no desenvolvimento de fluxos administrativos, controle por perfil, PDV vinculado à farmácia, integração com Supabase e rotinas de baixa automática de estoque.",
    outcome: "Produto operacional para acompanhar onde cada item está, quanto vendeu em cada farmácia e valores ainda a receber.",
    tags: ["React", "TypeScript", "Supabase", "TanStack Query", "Recharts"]
  },
  {
    id: 4,
    category: "Gestão de Licitações",
    title: "UpLicita",
    kind: "Freelancer",
    image: "/cases/uplicita-dashboard.png",
    imageWebp: "/cases/uplicita-dashboard.webp",
    imageAlt: "Dashboard escuro do sistema UpLicita com painel de pedidos, compras, financeiro e fornecedores",
    description: "Sistema web freelancer para gestão de licitações, pedidos, compras e fornecedores, incluindo fluxos operacionais com IA para busca de fornecedores e deploy em produção.",
    role: "Criação de fluxos de compras, fornecedores, pedidos e recursos de apoio com IA.",
    outcome: "Produto publicado em produção para organizar processos e reduzir trabalho manual.",
    tags: ["React", "TypeScript", "Supabase", "IA", "Vercel"]
  },
  {
    id: 5,
    category: "Produto Digital",
    title: "BookTrade",
    kind: "Autônomo",
    image: "/cases/booktrade-catalog.png",
    imageWebp: "/cases/booktrade-catalog.webp",
    imageAlt: "Catálogo do BookTrade com busca, categorias e livros disponíveis para venda e troca",
    description: "Plataforma para venda e troca de livros entre estudantes, criada do zero com atuação em produto, organização de entregas, interfaces, integrações e regras de negócio.",
    role: "Co-criação do produto, definição de funcionalidades, organização das entregas e atuação full stack.",
    outcome: "Base digital para conectar estudantes em um ambiente colaborativo de venda e troca de livros.",
    tags: ["React", "Spring Boot", "Firebase"]
  },
  {
    id: 6,
    category: "Finanças Pessoais",
    title: "Minha Grana",
    kind: "Produto próprio",
    image: "/cases/minha-grana-dashboard.png",
    imageWebp: "/cases/minha-grana-dashboard.webp",
    imageAlt: "Dashboard financeiro do Minha Grana com indicadores de saldo, gasto seguro, próximas saídas e alertas",
    description: "App próprio de controle financeiro pessoal, com dashboards e gráficos para receitas, despesas e indicadores, apoiado por Supabase, rotinas automatizadas e visualização de dados.",
    role: "Desenvolvimento de dashboards, organização de receitas/despesas e visualizações para tomada de decisão.",
    outcome: "Ferramenta pessoal para acompanhar saldo, reservas, contas e ritmo de gastos.",
    tags: ["React", "TypeScript", "Supabase", "React Query", "Recharts", "SCSS"]
  }
];

export function Projects() {
  return (
    <section className={styles.projects} id="projetos">
      <div className={styles.header}>
        <div>
          <h3 className={styles.sectionTitle}>Cases Selecionados</h3>
          <p className={styles.subtitle}>Uma seleção de entregas com contexto, atuação e resultado.</p>
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

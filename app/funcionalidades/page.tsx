import {
  Book,
  Zap,
  ShoppingBag,
  Activity,
  FileText,
  Brain,
  Clock,
  Award,
  Leaf,
  Bell,
  Users,
  BarChart3,
} from "lucide-react"
import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"

const features = [
  {
    icon: Book,
    title: "Biblioteca de Algoritmos",
    description: "Acesso a centenas de algoritmos clínicos atualizados e baseados em evidências.",
    bullets: [
      "Protocolos de emergência",
      "Fluxogramas interativos",
      "Busca por sintoma ou diagnóstico",
      "Atualizações em tempo real",
    ],
  },
  {
    icon: Brain,
    title: "Simulações Clínicas",
    description: "Aprenda com casos reais e teste seus conhecimentos em cenários simulados.",
    bullets: [
      "Casos de diferentes especialidades",
      "Feedback imediato",
      "Níveis de dificuldade",
      "Acompanhamento de progresso",
    ],
  },
  {
    icon: Zap,
    title: "Modo Plantão",
    description: "Decisões rápidas para os momentos mais críticos no seu plantão.",
    bullets: [
      "Interface simplificada",
      "Acesso em 3 cliques",
      "Doses e cálculos rápidos",
      "Checklists de emergência",
    ],
  },
  {
    icon: FileText,
    title: "Flashcards Inteligentes",
    description: "Memorize conceitos importantes com nosso sistema de repetição espaçada.",
    bullets: [
      "Algoritmo de memorização",
      "Cards personalizados",
      "Integrado aos algoritmos",
      "Estatísticas de aprendizado",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Encontre equipamentos, cursos e recursos selecionados para sua carreira.",
    bullets: [
      "Produtos verificados",
      "Cursos especializados",
      "Livros recomendados",
      "Descontos exclusivos",
    ],
  },
  {
    icon: Activity,
    title: "Saúde em Tempo Real",
    description: "Dados epidemiológicos atualizados para decisões informadas.",
    bullets: [
      "Dados do Ministério da Saúde",
      "Alertas epidemiológicos",
      "Mapas de incidência",
      "Tendências e previsões",
    ],
  },
  {
    icon: Award,
    title: "Rankings e Gamificação",
    description: "Acompanhe seu progresso e compare com outros profissionais.",
    bullets: [
      "Ranking mundial e local",
      "Sistema de experiência",
      "Conquistas desbloqueáveis",
      "Desafios semanais",
    ],
  },
  {
    icon: Clock,
    title: "Histórico de Estudos",
    description: "Acompanhe todo seu progresso de aprendizado na plataforma.",
    bullets: [
      "Tempo de estudo",
      "Algoritmos visualizados",
      "Simulações completadas",
      "Metas personalizadas",
    ],
  },
  {
    icon: Leaf,
    title: "Modo Eco",
    description: "Economize bateria enquanto estuda com nossa interface otimizada.",
    bullets: [
      "Menor consumo de energia",
      "Tema escuro automático",
      "Sustentabilidade digital",
      "Economia de dados",
    ],
  },
  {
    icon: Bell,
    title: "Notificações Inteligentes",
    description: "Receba atualizações relevantes sem interrupções desnecessárias.",
    bullets: [
      "Alertas personalizados",
      "Novas atualizações de conteúdo",
      "Lembretes de estudo",
      "Modo silencioso",
    ],
  },
  {
    icon: Users,
    title: "Licença Institucional",
    description: "Ideal para hospitais, faculdades e equipes médicas.",
    bullets: [
      "Gestão de equipes",
      "Relatórios de uso",
      "Customização de conteúdo",
      "Suporte dedicado",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboard de Performance",
    description: "Visualize seu desempenho e identifique áreas de melhoria.",
    bullets: [
      "Gráficos interativos",
      "Comparativo temporal",
      "Áreas fortes e fracas",
      "Recomendações de estudo",
    ],
  },
]

export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen bg-mn-surface">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-mn-green-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-mn-surface mb-4">
            Funcionalidades
          </h1>
          <p className="text-lg text-mn-surface/80 max-w-2xl mx-auto">
            Conheça tudo que o MedNotes oferece para impulsionar sua carreira médica
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-mn-surface border border-mn-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-mn-green-900 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-mn-surface" />
                </div>
                <h3 className="text-xl font-semibold text-mn-text mb-2">{feature.title}</h3>
                <p className="text-mn-muted mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-mn-text">
                      <div className="w-1.5 h-1.5 rounded-full bg-mn-green-800" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Heart, Leaf, Target, Users } from "lucide-react"
import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"

const values = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Democratizar o acesso a informação médica de qualidade, ajudando profissionais de saúde a tomarem decisões mais assertivas e baseadas em evidências.",
  },
  {
    icon: Heart,
    title: "Impacto",
    description:
      "Cada decisão clínica informada pode salvar vidas. Nosso objetivo é impactar positivamente milhões de pacientes através dos profissionais que usam nossa plataforma.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Construímos uma comunidade de profissionais comprometidos com a excelência. Juntos, compartilhamos conhecimento e evoluímos constantemente.",
  },
  {
    icon: Leaf,
    title: "Modo Eco",
    description:
      "Acreditamos na sustentabilidade digital. Nosso Modo Eco reduz o consumo de energia e dados, contribuindo para um futuro mais verde.",
  },
]

const team = [
  { name: "Dr. Lucas Ferreira", role: "CEO & Co-fundador", specialty: "Medicina de Emergência" },
  { name: "Dra. Beatriz Almeida", role: "CMO & Co-fundadora", specialty: "Cardiologia" },
  { name: "André Santos", role: "CTO", specialty: "Engenharia de Software" },
  { name: "Dra. Marina Costa", role: "Head de Conteúdo", specialty: "Clínica Médica" },
]

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-mn-surface">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-mn-green-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-mn-surface mb-4">Sobre Nós</h1>
          <p className="text-lg text-mn-surface/80 max-w-2xl mx-auto">
            Conheça a história e os valores que nos movem
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-mn-text mb-6">Nossa História</h2>
            <p className="text-mn-muted leading-relaxed mb-4">
              O MedNotes nasceu da frustração de médicos residentes que não encontravam uma 
              ferramenta adequada para consultar protocolos durante seus plantões. Em 2022, 
              um grupo de médicos e desenvolvedores se uniu para criar a solução que eles 
              mesmos gostariam de ter.
            </p>
            <p className="text-mn-muted leading-relaxed mb-4">
              Desde então, crescemos para uma comunidade de mais de 50.000 profissionais de 
              saúde em todo o Brasil, com conteúdo revisado por especialistas e atualizado 
              constantemente.
            </p>
            <p className="text-mn-muted leading-relaxed">
              Nosso compromisso é com a qualidade da informação médica e com o impacto 
              positivo na vida dos pacientes através de decisões clínicas mais assertivas.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-mn-text mb-12 text-center">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-mn-surface border border-mn-border rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-mn-green-900 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-mn-surface" />
                </div>
                <h3 className="text-lg font-semibold text-mn-text mb-2">{value.title}</h3>
                <p className="text-sm text-mn-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-mn-text mb-12 text-center">Nossa Equipe</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-mn-surface border border-mn-border rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-mn-green-900/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-mn-green-900 font-bold text-xl">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-semibold text-mn-text">{member.name}</h3>
                <p className="text-sm text-mn-green-800 mb-1">{member.role}</p>
                <p className="text-xs text-mn-muted">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-mn-green-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-mn-surface mb-2">50K+</p>
              <p className="text-mn-surface/70">Usuários Ativos</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-mn-surface mb-2">500+</p>
              <p className="text-mn-surface/70">Algoritmos</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-mn-surface mb-2">100+</p>
              <p className="text-mn-surface/70">Simulações</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-mn-surface mb-2">4.9</p>
              <p className="text-mn-surface/70">Avaliação nas Lojas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

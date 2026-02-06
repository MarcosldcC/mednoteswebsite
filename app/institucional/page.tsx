"use client"

import React from "react"
import Link from "next/link"
import {
  ArrowRight, Users, TrendingUp, Shield, Database, BarChart3, Lock, Zap,
  CheckCircle2, GraduationCap, LineChart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"
import { ScrollReveal, ScrollRevealStagger } from "@/components/web/scroll-reveal"

export default function InstitucionalPage() {
  const features = [
    {
      icon: Users,
      title: "Quantidade de alunos vinculados",
      description: "Acompanhe quantos estudantes da sua instituição utilizam o MedNotes.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: TrendingUp,
      title: "Nível de engajamento",
      description: "Meça a recorrência de uso e padrões de estudo em tempo real.",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: BarChart3,
      title: "Frequência semanal",
      description: "Visualize quando e como seus alunos estudam ao longo da semana.",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: Database,
      title: "Tempo médio de utilização",
      description: "Entenda o comprometimento dos alunos com a plataforma.",
      color: "bg-orange-100 text-orange-700",
    },
    {
      icon: LineChart,
      title: "Evolução do engajamento",
      description: "Acompanhe tendências e mudanças ao longo do período letivo.",
      color: "bg-rose-100 text-rose-700",
    },
    {
      icon: Users,
      title: "Comparação entre grupos",
      description: "Compare uso entre turmas e grupos criados pela instituição.",
      color: "bg-indigo-100 text-indigo-700",
    },
  ]

  const benefits = [
    {
      title: "Vincular alunos",
      description: "Integre alunos ao ambiente institucional de forma segura.",
    },
    {
      title: "Criar grupos e turmas",
      description: "Organize os estudantes em agrupamentos para melhor acompanhamento.",
    },
    {
      title: "Acompanhar engajamento",
      description: "Monitore o desempenho e engajamento por cada agrupamento.",
    },
    {
      title: "Controle de acesso",
      description: "Suspenda vínculos institucionais quando necessário.",
    },
  ]

  const privacyFeatures = [
    "Anotações pessoais",
    "Resumos ou flashcards",
    "Conteúdo criado pelo aluno",
    "Dados individuais identificáveis",
  ]

  return (
    <div className="min-h-screen bg-mn-surface font-sans selection:bg-mn-green-900/20">
      <Navbar />

      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-mn-green-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mn-green-900 via-mn-green-900 to-mn-green-800"></div>

          {/* Animated Ambient Orbs */}
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-mn-green-700/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-mn-green-700/20 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mn-surface/10 border border-mn-surface/20 text-mn-surface text-sm font-medium mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                  Solução para Instituições de Ensino
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mn-surface mb-6 leading-[1.1] tracking-tight">
                  Inteligência de Dados para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-400">Ensino Médico</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg md:text-xl text-mn-surface/80 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Uma visão institucional completa que permite acompanhar, de forma segura e agregada, como seus alunos utilizam a plataforma para potencializar o aprendizado.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/planos">
                    <Button size="lg" className="h-12 px-8 bg-mn-surface text-mn-green-900 hover:bg-white hover:scale-105 transition-all duration-300 font-semibold text-base shadow-xl shadow-black/10">
                      Contratar Plano Institucional
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Button size="lg" className="h-12 px-8 bg-mn-surface text-mn-green-900 hover:bg-mn-green-900 hover:text-mn-surface border border-mn-surface transition-all">
                    Falar com Consultor
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Visual/Dashboard Mockup placeholder */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative hidden md:block">
              <ScrollReveal delay={0.3} className="relative">
                <div className="relative rounded-2xl border border-mn-surface/10 bg-mn-surface/5 backdrop-blur-sm p-2 shadow-2xl skew-y-[-2deg] hover:skew-y-0 transition-transform duration-700 ease-out">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-mn-surface to-mn-surface-alt overflow-hidden border border-mn-surface/20 shadow-inner relative group">
                    {/* Mockup UI Elements */}
                    <div className="absolute top-4 left-4 right-4 h-8 bg-white/50 rounded-md flex items-center px-3 space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>

                    <div className="absolute top-16 left-4 right-4 bottom-4 grid grid-cols-2 gap-4">
                      <div className="bg-white/60 rounded-lg p-4 shadow-sm">
                        <div className="h-4 w-24 bg-mn-green-900/10 rounded mb-2"></div>
                        <div className="h-8 w-16 bg-mn-green-900/20 rounded"></div>
                      </div>
                      <div className="bg-white/60 rounded-lg p-4 shadow-sm">
                        <div className="h-4 w-24 bg-mn-green-900/10 rounded mb-2"></div>
                        <div className="h-8 w-16 bg-mn-green-900/20 rounded"></div>
                      </div>
                      <div className="col-span-2 bg-white/60 rounded-lg p-4 shadow-sm flex items-end justify-between gap-2">
                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                          <div key={i} className="w-full bg-mn-green-900/20 rounded-t-sm transition-all duration-500 group-hover:bg-mn-green-900/30" style={{ height: `${h}%` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl border border-mn-border/50 animate-[float_6s_ease-in-out_infinite] z-20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-full text-green-700"><TrendingUp className="w-5 h-5" /></div>
                    <div>
                      <p className="text-xs text-mn-muted font-medium">Engajamento</p>
                      <p className="text-lg font-bold text-mn-green-900">+24%</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24 bg-mn-surface-alt/50">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="inline-block px-3 py-1 rounded-full bg-mn-green-900/10 text-mn-green-900 text-sm font-semibold">
                  Visão Institucional
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-mn-text leading-tight">
                  Gerenciamento acadêmico <br />
                  <span className="text-mn-green-700">inteligente e seguro.</span>
                </h2>
                <p className="text-lg text-mn-muted leading-relaxed">
                  Uma ferramenta pensada para coordenações que desejam compreender padrões de estudo e usar dados para evoluir o currículo, sem invadir a privacidade do aluno.
                </p>

                <div className="space-y-4">
                  {[
                    "Ambiente isolado e exclusivo por instituição",
                    "Acesso restrito a coordenadores autorizados",
                    "Indicadores baseados no uso real da plataforma"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-mn-green-900/10 flex items-center justify-center flex-shrink-0 text-mn-green-900">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-mn-text/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-mn-green-900/5 rounded-2xl transform rotate-2"></div>
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-mn-border relative">
                  <div className="flex items-center gap-4 mb-6 border-b border-mn-border/50 pb-4">
                    <div className="h-10 w-10 bg-mn-green-900 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-mn-text">Portal da Coordenação</h4>
                      <p className="text-xs text-mn-muted uppercase tracking-wider">Acesso Restrito</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-24 bg-mn-surface-alt rounded-lg border border-dashed border-mn-border flex items-center justify-center text-mn-muted text-sm">
                      Área de Gráficos de Desempenho
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-16 bg-mn-surface-alt rounded-lg"></div>
                      <div className="h-16 bg-mn-surface-alt rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
                O que sua instituição acompanha
              </h2>
              <p className="text-lg text-mn-muted">
                Dashboards claros e métricas essenciais para uma gestão baseada em evidências.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group bg-mn-surface-alt/30 rounded-2xl p-6 border border-mn-border/50 hover:border-mn-green-900/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-mn-text mb-2">{feature.title}</h3>
                    <p className="text-mn-muted leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* Analysis & Feedback Section */}
      <section className="py-24 bg-mn-green-900 text-mn-surface overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.03] skew-x-12 transform origin-top-right"></div>

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Feedback educacional acionável</h2>
                <p className="text-mn-surface/80 text-lg mb-8 leading-relaxed">
                  Transforme dados brutos em decisões pedagógicas. Nossos relatórios interpretativos ajudam a entender a jornada do aluno fora da sala de aula.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Concentração", desc: "Identifique picos de estudo pré-provas." },
                    { title: "Tendências", desc: "Visualize quedas de engajamento antes que virem evasão." },
                    { title: "Benchmarking", desc: "Compare turmas para nivelar o ensino." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full border border-mn-surface/20 flex items-center justify-center font-bold text-xl bg-mn-surface/5">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-mn-surface/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="bg-mn-surface rounded-2xl p-8 text-mn-text shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-mn-green-500 rounded-full blur-2xl opacity-20"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-mn-green-700" />
                  Insight da Semana
                </h3>
                <div className="h-px w-full bg-mn-border/50 mb-4"></div>
                <p className="text-mn-muted italic mb-6">
                  "A Turma XIV apresentou um aumento de 40% no acesso a conteúdos de Cardiologia nas últimas 2 semanas, correlacionando com o novo módulo prático."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div className="text-sm">
                    <p className="font-semibold">Coordenação Pedagógica</p>
                    <p className="text-muted-foreground">MedNotes Analytics</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Organization Benefits */}
      <section className="py-24 bg-mn-surface">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">Organização Simplificada</h2>
              <p className="text-mn-muted max-w-2xl mx-auto">
                Ferramentas administrativas poderosas para gerenciar o vínculo dos seus alunos com facilidade.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealStagger>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-mn-border hover:border-mn-green-900 transition-colors text-center group">
                  <div className="w-12 h-12 mx-auto bg-mn-surface-alt rounded-full flex items-center justify-center mb-4 group-hover:bg-mn-green-900 group-hover:text-white transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-mn-text mb-2">{benefit.title}</h3>
                  <p className="text-sm text-mn-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </ScrollRevealStagger>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 mx-auto max-w-4xl bg-amber-50 border border-amber-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 text-amber-900">
              <div className="p-3 bg-amber-100 rounded-full flex-shrink-0">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-medium text-lg mb-1">Processo Seguro</p>
                <p className="text-amber-800/80 text-sm">A aprovação final de vínculos de alunos é monitorada pelo time MedNotes para garantir a integridade dos dados da sua instituição.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 bg-white border-t border-mn-border">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="bg-mn-surface-alt/50 rounded-3xl p-8 md:p-12 lg:p-16 border border-mn-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-mn-green-900/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>

            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-mn-border text-xs font-bold uppercase tracking-wide text-mn-muted">
                  <Lock className="w-3 h-3" /> Privacidade em Primeiro Lugar
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-mn-text">
                  Dados agregados.<br />
                  <span className="text-mn-muted">Privacidade respeitada.</span>
                </h2>
                <p className="text-lg text-mn-muted">
                  A Visão Institucional foi desenhada desde o princípio seguindo as normas da LGPD, garantindo que a instituição tenha os dados macro necessários sem invadir o espaço pessoal de estudo do aluno.
                </p>

                <div className="bg-white rounded-xl p-6 border border-mn-border shadow-sm">
                  <h4 className="font-bold mb-4 flex items-center gap-2 text-red-600">
                    <Shield className="w-5 h-5" />
                    A instituição NÃO acessa:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {privacyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-mn-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-mn-border"></span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-mn-green-900 rounded-full blur-3xl opacity-5"></div>
                  <img
                    src="/placeholder-privacy.svg"
                    alt="Privacidade Ilustração"
                    className="w-full relative z-10"
                    style={{ display: 'none' }} // Placeholder logic
                  />
                  {/* Fallback visual using code since we don't have the image */}
                  <div className="aspect-square rounded-full border-4 border-dashed border-mn-border flex items-center justify-center relative bg-white/50">
                    <div className="absolute w-3/4 h-3/4 bg-mn-green-900/5 rounded-full flex items-center justify-center">
                      <Lock className="w-24 h-24 text-mn-green-900/20" />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-lg border border-mn-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <p className="font-bold text-mn-text">Dados 100% Anonimizados</p>
                      <p className="text-xs text-mn-muted mt-1">Para fins estatísticos e pedagógicos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-mn-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-mn-surface mb-6 max-w-3xl mx-auto leading-tight">
              Leve a gestão acadêmica da sua faculdade para o próximo nível.
            </h2>
            <p className="text-xl text-mn-surface/80 mb-10 max-w-2xl mx-auto">
              Integração simples, sem necessidade de infraestrutura complexa de TI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/planos">
                <Button size="lg" className="h-14 px-10 text-lg bg-mn-surface text-mn-green-900 hover:bg-white hover:scale-105 transition-all shadow-xl font-bold">
                  Contratar Plano Institucional
                </Button>
              </Link>
              <Button size="lg" className="h-14 px-10 text-lg bg-mn-surface text-mn-green-900 hover:bg-mn-green-900 hover:text-mn-surface border border-mn-surface transition-all">
                Agendar Demonstração
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}

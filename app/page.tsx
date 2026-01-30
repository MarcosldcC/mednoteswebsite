"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Book, Zap, ShoppingBag, Activity, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"
import { MobileFrame } from "@/components/web/mobile-frame"
import { mockPillars, mockTestimonials, mockSteps } from "@/lib/mocks"

const pillarIcons = {
  book: Book,
  zap: Zap,
  "shopping-bag": ShoppingBag,
  activity: Activity,
}

export default function HomePage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement backend submission
    alert("Formulário enviado! (Implementar backend)")
  }

  return (
    <div className="min-h-screen bg-mn-surface">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-mn-green-900 relative overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 opacity-15">
          {/* Large floating circle - slow drift */}
          <div 
            className="absolute top-10 left-5 w-72 h-72 border-2 border-mn-surface rounded-full animate-[float_20s_ease-in-out_infinite]"
            style={{ animationDelay: '0s' }}
          />
          {/* Medium pulsing circle */}
          <div 
            className="absolute top-32 right-10 w-48 h-48 border border-mn-surface rounded-full animate-[pulse-slow_4s_ease-in-out_infinite]"
            style={{ animationDelay: '1s' }}
          />
          {/* Small orbiting circle */}
          <div 
            className="absolute bottom-20 left-1/4 w-32 h-32 border border-mn-surface rounded-full animate-[orbit_15s_linear_infinite]"
          />
          {/* Large bottom circle - slow float opposite direction */}
          <div 
            className="absolute -bottom-10 right-10 w-96 h-96 border-2 border-mn-surface rounded-full animate-[float-reverse_25s_ease-in-out_infinite]"
            style={{ animationDelay: '2s' }}
          />
          {/* Extra small accent circles */}
          <div 
            className="absolute top-1/2 left-20 w-16 h-16 border border-mn-surface rounded-full animate-[bounce-slow_3s_ease-in-out_infinite]"
          />
          <div 
            className="absolute top-1/3 right-1/3 w-24 h-24 border border-mn-surface rounded-full animate-[spin-slow_30s_linear_infinite]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mn-surface mb-6 leading-tight text-balance">
                Inteligência Clínica Baseada em Evidências
              </h1>
              <p className="text-lg md:text-xl text-mn-surface/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
                Acesso rápido a protocolos, modo plantão, marketplace e dados de saúde em tempo real. 
                Tudo que você precisa para decisões clínicas assertivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-mn-surface text-mn-green-900 hover:bg-mn-surface/90 gap-2">
                  Baixar App
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Link href="/planos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-mn-surface text-mn-surface hover:bg-mn-green-800 hover:text-mn-surface w-full sm:w-auto bg-transparent"
                  >
                    Ver Planos
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <MobileFrame
                imageSrc="/images/dashboard.png"
                alt="Dashboard do MedNotes"
                className="w-64 md:w-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pilares Section */}
      <section className="py-16 md:py-24 bg-mn-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
              Os 4 Pilares do MedNotes
            </h2>
            <p className="text-mn-muted max-w-2xl mx-auto">
              Uma plataforma completa para sua jornada médica
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockPillars.map((pillar, index) => {
              const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons]
              return (
                <div
                  key={index}
                  className="group bg-mn-surface border border-mn-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-mn-green-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-mn-surface" />
                  </div>
                  <h3 className="text-lg font-semibold text-mn-text mb-2">{pillar.title}</h3>
                  <p className="text-sm text-mn-muted leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
              Como Funciona
            </h2>
            <p className="text-mn-muted max-w-2xl mx-auto">
              Comece a usar em poucos minutos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 rounded-full bg-mn-green-900 text-mn-surface flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-mn-text mb-2">{step.title}</h3>
                <p className="text-sm text-mn-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24 bg-mn-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
              Conheça o App
            </h2>
            <p className="text-mn-muted max-w-2xl mx-auto">
              Interface intuitiva e moderna para sua prática clínica
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <MobileFrame
              imageSrc="/images/dashboard.png"
              alt="Dashboard"
              className="w-48 md:w-56"
            />
            <MobileFrame
              imageSrc="/images/pagamento.png"
              alt="Pagamento"
              className="w-48 md:w-56"
            />
            <MobileFrame className="w-48 md:w-56" />
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
              O Que Dizem os Médicos
            </h2>
            <p className="text-mn-muted max-w-2xl mx-auto">
              Milhares de profissionais já confiam no MedNotes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mockTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-mn-surface border border-mn-border rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-mn-green-800 text-mn-green-800" />
                  ))}
                </div>
                <p className="text-mn-text mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-mn-text text-sm">{testimonial.name}</p>
                    <p className="text-mn-muted text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact Section */}
      <section className="py-16 md:py-24 bg-mn-green-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-mn-surface mb-4">
                Pronto para Evoluir sua Prática?
              </h2>
              <p className="text-mn-surface/80 mb-8 max-w-lg mx-auto lg:mx-0">
                Junte-se a milhares de médicos que já utilizam o MedNotes para tomar decisões 
                clínicas mais assertivas e baseadas em evidências.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-mn-surface text-mn-green-900 hover:bg-mn-surface/90">
                  Baixar Grátis
                </Button>
                <Link href="/planos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-mn-surface text-mn-surface hover:bg-mn-green-800 hover:text-mn-surface w-full sm:w-auto bg-transparent"
                  >
                    Ver Planos
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-mn-surface rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-mn-text mb-6">Entre em Contato</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="bg-mn-surface-alt border-mn-border-light"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="bg-mn-surface-alt border-mn-border-light"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="bg-mn-surface-alt border-mn-border-light resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

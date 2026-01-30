"use client"

import React from "react"
import Link from "next/link"
import { Book, Zap, ShoppingBag, Activity, ChevronRight, Star, Building2, Heart, Stethoscope, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"
import { MobileFrame } from "@/components/web/mobile-frame"
import { StoreComingSoonDialog } from "@/components/web/store-coming-soon-dialog"
import { ScrollReveal, ScrollRevealStagger } from "@/components/web/scroll-reveal"
import { useMarketingContent } from "@/lib/marketing-content"

const pillarIcons = {
  book: Book,
  zap: Zap,
  "shopping-bag": ShoppingBag,
  activity: Activity,
}

export default function HomePage() {
  const content = useMarketingContent()

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

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mn-surface mb-6 leading-tight text-balance">
                {content.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-mn-surface/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <StoreComingSoonDialog>
                  <Button size="lg" className="bg-mn-surface text-mn-green-900 hover:bg-mn-surface/90 gap-2">
                    Em breve nas lojas
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </StoreComingSoonDialog>
                <Link href="/planos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-mn-surface text-mn-surface hover:bg-mn-green-800 hover:text-mn-surface w-full sm:w-auto bg-transparent"
                  >
                    {content.hero.ctaSecondary}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <MobileFrame
                imageSrc="/images/Dashboard.png"
                alt="Dashboard do MedNotes"
                className="w-64 md:w-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pilares Section */}
      <section className="py-16 md:py-24 bg-mn-surface">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
              Os 4 Pilares do MedNotes
            </h2>
            <p className="text-mn-muted max-w-2xl mx-auto">
              Uma plataforma completa para sua jornada médica
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollRevealStagger staggerDelay={100}>
              {content.pillars.map((pillar, index) => {
                const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons]
                return (
                  <div
                    key={index}
                    className="group h-full flex flex-col bg-mn-surface border border-mn-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-mn-green-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-6 h-6 text-mn-surface" />
                    </div>
                    <h3 className="text-lg font-semibold text-mn-text mb-2 shrink-0">{pillar.title}</h3>
                    <p className="text-sm text-mn-muted leading-relaxed flex-1">{pillar.description}</p>
                  </div>
                )
              })}
            </ScrollRevealStagger>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
              Como Funciona
            </h2>
            <p className="text-mn-muted max-w-2xl mx-auto">
              Comece a usar em poucos minutos
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollRevealStagger staggerDelay={120}>
              {content.steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-mn-green-900 text-mn-surface flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-mn-text mb-2">{step.title}</h3>
                  <p className="text-sm text-mn-muted">{step.description}</p>
                </div>
              ))}
            </ScrollRevealStagger>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24 bg-mn-surface">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
              Conheça o App
            </h2>
            <p className="text-mn-muted max-w-2xl mx-auto">
              Interface intuitiva e moderna para sua prática clínica
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="flex flex-wrap justify-center gap-8">
            <MobileFrame
              imageSrc="/images/Dashboard.png"
              alt="Dashboard"
              className="w-48 md:w-56"
            />
            <MobileFrame
              imageSrc="/images/Pagamento.png"
              alt="Pagamento"
              className="w-48 md:w-56"
            />
            <MobileFrame className="w-48 md:w-56" />
          </ScrollReveal>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-text mb-4">
              O Que Dizem os Médicos
            </h2>
            <p className="text-mn-muted max-w-2xl mx-auto">
              Milhares de profissionais já confiam no MedNotes
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollRevealStagger staggerDelay={100}>
              {content.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="h-full flex flex-col bg-mn-surface border border-mn-border rounded-2xl p-6"
                >
                  <div className="flex gap-1 mb-4 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-mn-green-800 text-mn-green-800" />
                    ))}
                  </div>
                  <p className="text-mn-text mb-4 leading-relaxed flex-1">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3 shrink-0">
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
            </ScrollRevealStagger>
          </div>
        </div>
      </section>

      {/* Empresas Parceiras - linha de logos */}
      <section id="parceiros" className="py-12 md:py-16 bg-transparent">
        <div className="container mx-auto pl-8 md:pl-12 lg:pl-20 pr-6 md:pr-10 lg:pr-16">
          <ScrollReveal className="flex flex-col items-center gap-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-mn-muted">
              Parceiros
            </p>
            <div className="flex flex-nowrap justify-center items-center gap-20 md:gap-32 lg:gap-40">
              {[
                { Icon: Building2, label: "Parceiro" },
                { Icon: Heart, label: "Parceiro" },
                { Icon: Stethoscope, label: "Parceiro" },
                { Icon: ShieldCheck, label: "Parceiro" },
              ].map(({ Icon, label }, i) => (
                <div
                  key={i}
                  className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center shrink-0 text-mn-text opacity-60 hover:opacity-100 transition-all duration-300"
                  title={label}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-mn-green-900">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-mn-surface mb-4">
              {content.ctaTitle}
            </h2>
            <p className="text-mn-surface/80 mb-8">
              {content.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <StoreComingSoonDialog>
                <Button size="lg" className="bg-mn-surface text-mn-green-900 hover:bg-mn-surface/90">
                  Em breve nas lojas
                </Button>
              </StoreComingSoonDialog>
              <Link href="/planos">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-mn-surface text-mn-surface hover:bg-mn-green-800 hover:text-mn-surface w-full sm:w-auto bg-transparent"
                >
                  {content.ctaButtonSecondary}
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-mn-surface/70">
              <Link href="/contato" className="hover:text-mn-surface transition-colors">
                Entre em contato
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}

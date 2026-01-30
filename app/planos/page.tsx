"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"
import { PlanCard } from "@/components/web/plan-card"
import { PlanToggle } from "@/components/web/plan-toggle"
import { mockPlans } from "@/lib/mocks"

export default function PlanosPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen bg-mn-surface">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-mn-green-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-mn-surface mb-4">
            Escolha seu Plano
          </h1>
          <p className="text-lg text-mn-surface/80 max-w-2xl mx-auto">
            Encontre o plano ideal para sua jornada médica
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Toggle */}
          <div className="mb-12">
            <PlanToggle isYearly={isYearly} onToggle={setIsYearly} />
          </div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                name={plan.name}
                priceMonthly={plan.priceMonthly}
                priceYearly={plan.priceYearly}
                benefits={plan.benefits}
                highlighted={plan.highlighted}
                isYearly={isYearly}
                isInstitutional={plan.isInstitutional}
              />
            ))}
          </div>

          {/* Free Plan Link */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-sm text-mn-muted hover:text-mn-text transition-colors"
            >
              Continuar com o plano gratuito →
            </Link>
          </div>

          {/* FAQ */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-mn-text mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              <div className="bg-mn-surface border border-mn-border rounded-xl p-4">
                <h3 className="font-semibold text-mn-text mb-2">Posso trocar de plano?</h3>
                <p className="text-sm text-mn-muted">
                  Sim! Você pode fazer upgrade ou downgrade a qualquer momento. O valor será calculado proporcionalmente.
                </p>
              </div>
              <div className="bg-mn-surface border border-mn-border rounded-xl p-4">
                <h3 className="font-semibold text-mn-text mb-2">Como funciona o plano institucional?</h3>
                <p className="text-sm text-mn-muted">
                  O plano institucional é personalizado para sua equipe ou instituição. Entre em contato para uma proposta.
                </p>
              </div>
              <div className="bg-mn-surface border border-mn-border rounded-xl p-4">
                <h3 className="font-semibold text-mn-text mb-2">Tem garantia?</h3>
                <p className="text-sm text-mn-muted">
                  Oferecemos 7 dias de garantia incondicional em todos os planos pagos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

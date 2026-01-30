/**
 * Conteúdo editável do site de marketing (landing page).
 * O admin salva em localStorage; a home lê daqui para exibir.
 * Para produção, substitua por API/CMS.
 */

"use client"

import { useState, useEffect } from "react"
import { mockPillars, mockTestimonials, mockSteps } from "./mocks"

export const MARKETING_STORAGE_KEY = "mednotes-marketing-content"

export type HeroContent = {
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
}

export type PillarContent = { title: string; description: string; icon: string }
export type StepContent = { number: number; title: string; description: string }
export type TestimonialContent = { name: string; role: string; content: string; avatar: string }

export type MarketingContent = {
  hero: HeroContent
  pillars: PillarContent[]
  steps: StepContent[]
  testimonials: TestimonialContent[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButtonPrimary: string
  ctaButtonSecondary: string
}

export const defaultMarketingContent: MarketingContent = {
  hero: {
    title: "Inteligência Clínica Baseada em Evidências",
    subtitle:
      "Acesso rápido a protocolos, modo plantão, marketplace e dados de saúde em tempo real. Tudo que você precisa para decisões clínicas assertivas.",
    ctaPrimary: "Baixar App",
    ctaSecondary: "Ver Planos",
  },
  pillars: mockPillars.map((p) => ({ title: p.title, description: p.description, icon: p.icon })),
  steps: mockSteps.map((s) => ({ number: s.number, title: s.title, description: s.description })),
  testimonials: mockTestimonials.map((t) => ({
    name: t.name,
    role: t.role,
    content: t.content,
    avatar: t.avatar || "/placeholder-user.jpg",
  })),
  ctaTitle: "Pronto para Evoluir sua Prática?",
  ctaSubtitle:
    "Junte-se a milhares de médicos que já utilizam o MedNotes para tomar decisões clínicas mais assertivas e baseadas em evidências.",
  ctaButtonPrimary: "Baixar Grátis",
  ctaButtonSecondary: "Ver Planos",
}

export function getMarketingContentFromStorage(): MarketingContent | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(MARKETING_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as MarketingContent
  } catch {
    return null
  }
}

/** Hook para a home page: lê conteúdo salvo pelo admin (localStorage) ou usa o padrão */
export function useMarketingContent(): MarketingContent {
  const [content, setContent] = useState<MarketingContent>(defaultMarketingContent)

  useEffect(() => {
    const saved = getMarketingContentFromStorage()
    if (saved) setContent(saved)
  }, [])

  return content
}

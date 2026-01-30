"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PlanCardProps {
  name: string
  priceMonthly: number
  priceYearly: number
  benefits: string[]
  highlighted?: boolean
  isYearly: boolean
  isInstitutional?: boolean
}

export function PlanCard({
  name,
  priceMonthly,
  priceYearly,
  benefits,
  highlighted = false,
  isYearly,
  isInstitutional = false,
}: PlanCardProps) {
  const price = isYearly ? priceYearly : priceMonthly
  const period = isYearly ? "/ano" : "/mês"
  const savings = isYearly ? Math.round((1 - priceYearly / (priceMonthly * 12)) * 100) : 0

  return (
    <div
      className={cn(
        "relative rounded-2xl border transition-all duration-300",
        highlighted
          ? "bg-mn-green-900 border-mn-green-900 text-mn-surface scale-105 shadow-xl"
          : "bg-mn-surface border-mn-border"
      )}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mn-surface text-mn-green-900 text-xs font-semibold px-4 py-1 rounded-full">
          Mais Popular
        </div>
      )}

      <div className="p-6">
        <h3
          className={cn(
            "text-xl font-semibold mb-2",
            highlighted ? "text-mn-surface" : "text-mn-text"
          )}
        >
          {name}
        </h3>

        {isInstitutional ? (
          <div className="mb-6">
            <p className={cn("text-sm", highlighted ? "text-mn-surface/80" : "text-mn-muted")}>
              Preço personalizado
            </p>
          </div>
        ) : (
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span
                className={cn(
                  "text-4xl font-bold transition-all duration-300",
                  highlighted ? "text-mn-surface" : "text-mn-text"
                )}
              >
                R${price.toFixed(2).replace(".", ",")}
              </span>
              <span className={cn("text-sm", highlighted ? "text-mn-surface/70" : "text-mn-muted")}>
                {period}
              </span>
            </div>
            {isYearly && savings > 0 && (
              <p className={cn("text-sm mt-1", highlighted ? "text-mn-surface/80" : "text-mn-green-800")}>
                Economize {savings}% no plano anual
              </p>
            )}
          </div>
        )}

        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check
                className={cn(
                  "w-5 h-5 shrink-0 mt-0.5",
                  highlighted ? "text-mn-surface" : "text-mn-green-800"
                )}
              />
              <span className={cn("text-sm", highlighted ? "text-mn-surface/90" : "text-mn-text")}>
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "w-full transition-all",
            highlighted
              ? "bg-mn-surface text-mn-green-900 hover:bg-mn-surface/90"
              : "bg-mn-green-900 text-mn-surface hover:bg-mn-green-800"
          )}
        >
          {isInstitutional ? "Entrar em Contato" : "Começar Agora"}
        </Button>
      </div>
    </div>
  )
}

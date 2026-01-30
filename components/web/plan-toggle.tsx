"use client"

import { cn } from "@/lib/utils"

interface PlanToggleProps {
  isYearly: boolean
  onToggle: (isYearly: boolean) => void
}

export function PlanToggle({ isYearly, onToggle }: PlanToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={cn(
          "text-sm font-medium transition-colors cursor-pointer",
          !isYearly ? "text-mn-text" : "text-mn-muted"
        )}
        onClick={() => onToggle(false)}
      >
        Mensal
      </span>
      <button
        type="button"
        className={cn(
          "relative w-14 h-7 rounded-full transition-colors",
          isYearly ? "bg-mn-green-900" : "bg-mn-border"
        )}
        onClick={() => onToggle(!isYearly)}
        aria-label="Alternar entre mensal e anual"
      >
        <div
          className={cn(
            "absolute top-1 w-5 h-5 rounded-full bg-mn-surface shadow-md transition-all duration-300",
            isYearly ? "left-8" : "left-1"
          )}
        />
      </button>
      <span
        className={cn(
          "text-sm font-medium transition-colors cursor-pointer",
          isYearly ? "text-mn-text" : "text-mn-muted"
        )}
        onClick={() => onToggle(true)}
      >
        Anual
        <span className="ml-1 text-xs text-mn-green-800 font-semibold">-20%</span>
      </span>
    </div>
  )
}

"use client"

import { useRef, useEffect, useState, Children, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  /** Delay in ms before animation starts when in view */
  delay?: number
  /** "up" = fade + slide from below, "fade" = fade only */
  variant?: "up" | "fade"
  /** Fraction of element visible to trigger (0-1). Default 0.12 */
  threshold?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "up",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          if (delay > 0) {
            const t = setTimeout(() => setIsVisible(true), delay)
            return () => clearTimeout(t)
          }
          setIsVisible(true)
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold, hasAnimated])

  const animationClass = isVisible
    ? variant === "up"
      ? "animate-fade-in-up"
      : "animate-fade-in"
    : "scroll-reveal-initial"

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        !isVisible && "opacity-0 translate-y-7",
        isVisible && animationClass,
        className
      )}
    >
      {children}
    </div>
  )
}

/** Wrapper for staggering multiple children with scroll reveal */
export function ScrollRevealStagger({
  children,
  className,
  staggerDelay = 80,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const items = Children.toArray(children)
  return (
    <>
      {items.map((child, i) => (
        <ScrollReveal key={i} delay={i * staggerDelay}>
          {child}
        </ScrollReveal>
      ))}
    </>
  )
}

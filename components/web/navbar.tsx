"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StoreComingSoonDialog } from "@/components/web/store-coming-soon-dialog"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/planos", label: "Planos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={cn(
        // Sempre verde glass (padrão do site) — sem mudança por scroll
        "fixed top-4 left-4 right-4 z-50 rounded-2xl bg-mn-green-900/90 backdrop-blur-lg border border-mn-green-900/50 shadow-lg shadow-black/10"
      )}
    >
      <nav className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/mednoteslogo.svg" alt="MedNotes" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-sm font-medium text-mn-surface hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA - Em breve nas lojas (popup) */}
          <div className="hidden md:flex items-center gap-3">
            <StoreComingSoonDialog>
              <Button className="bg-mn-surface text-mn-green-900 hover:bg-mn-surface/90">
                Em breve nas lojas
              </Button>
            </StoreComingSoonDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-mn-surface p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-sm font-medium py-2 text-mn-surface hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-mn-border-light">
              <StoreComingSoonDialog>
                <Button className="w-full bg-mn-surface text-mn-green-900 hover:bg-mn-surface/90">
                  Em breve nas lojas
                </Button>
              </StoreComingSoonDialog>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

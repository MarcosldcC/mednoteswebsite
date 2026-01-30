"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  FileText,
  Brain,
  ShoppingBag,
  CreditCard,
  Bell,
  HeadphonesIcon,
  BookOpen,
  FileSearch,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/usuarios", label: "Usuários", icon: Users },
  { href: "/admin/algoritmos", label: "Algoritmos", icon: FileText },
  { href: "/admin/simulacoes", label: "Simulações", icon: Brain },
  { href: "/admin/marketplace", label: "Marketplace", icon: ShoppingBag },
  { href: "/admin/planos", label: "Planos", icon: CreditCard },
  { href: "/admin/notificacoes", label: "Notificações", icon: Bell },
  { href: "/admin/suporte", label: "Suporte", icon: HeadphonesIcon },
  { href: "/admin/conteudo", label: "Conteúdo", icon: BookOpen },
  { href: "/admin/auditoria", label: "Auditoria", icon: FileSearch },
  { href: "/admin/configuracoes", label: "Configurações", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-mn-green-900 text-mn-surface rounded-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 bg-mn-green-900 transition-transform duration-300 lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-mn-surface/10">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-mn-surface flex items-center justify-center">
                <span className="text-mn-green-900 font-bold text-sm">M</span>
              </div>
              <span className="text-mn-surface font-semibold text-lg">mednotes</span>
            </Link>
            <p className="text-mn-surface/50 text-xs mt-1">Painel Administrativo</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                    isActive
                      ? "bg-mn-surface text-mn-green-900"
                      : "text-mn-surface/70 hover:bg-mn-green-800 hover:text-mn-surface"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-mn-surface/10">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-mn-surface/70 hover:bg-mn-green-800 hover:text-mn-surface transition-all"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}

"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminTopbar } from "@/components/admin/topbar"
import { AuthProvider, useAuth } from "@/lib/auth-context"

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isAuthenticated, isLoading } = useAuth()

  // Páginas que não precisam de autenticação
  const publicPages = ["/admin/login"]
  const isPublicPage = publicPages.includes(pathname)

  // Se está carregando, mostra loading
  if (isLoading) {
    return (
      <div className="min-h-screen bg-mn-surface-alt flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-mn-green-900 border-t-transparent rounded-full" />
      </div>
    )
  }

  // Se é página pública (login), renderiza sem sidebar/topbar
  if (isPublicPage) {
    return <>{children}</>
  }

  // Se não está autenticado e não é página pública, redireciona para login
  if (!isAuthenticated) {
    // Renderiza apenas o children que vai fazer o redirect
    return (
      <div className="min-h-screen bg-mn-surface-alt flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-mn-green-900 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-mn-muted">Redirecionando para login...</p>
        </div>
      </div>
    )
  }

  // Layout completo do admin para usuários autenticados
  return (
    <div className="min-h-screen bg-mn-surface-alt">
      <AdminSidebar />
      <div className="lg:ml-64">
        <AdminTopbar />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  )
}

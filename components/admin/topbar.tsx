"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Bell, Search, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/auth-context"

export function AdminTopbar() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  const userInitial = user?.name?.charAt(0).toUpperCase() || "A"
  const userName = user?.name || "Admin"
  const userRole = user?.role === "admin" ? "Administrador" : user?.role === "editor" ? "Editor" : "Visualizador"

  return (
    <header className="sticky top-0 z-30 h-16 bg-mn-surface border-b border-mn-border-light flex items-center px-4 lg:px-6">
      {/* Search */}
      <div className="flex-1 max-w-md ml-12 lg:ml-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mn-muted" />
          <Input
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-mn-surface-alt border-mn-border-light"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative p-2 rounded-lg hover:bg-mn-surface-alt transition-colors"
              aria-label="Notificações"
            >
              <Bell className="w-5 h-5 text-mn-muted" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-3 border-b border-mn-border-light">
              <h4 className="font-semibold text-mn-text">Notificações</h4>
            </div>
            <div className="py-2">
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div>
                  <p className="text-sm text-mn-text">Novo usuário cadastrado</p>
                  <p className="text-xs text-mn-muted">Há 5 minutos</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div>
                  <p className="text-sm text-mn-text">Algoritmo atualizado</p>
                  <p className="text-xs text-mn-muted">Há 1 hora</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 cursor-pointer">
                <div>
                  <p className="text-sm text-mn-text">Nova conversa de suporte</p>
                  <p className="text-xs text-mn-muted">Há 2 horas</p>
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-mn-surface-alt transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-mn-green-900 flex items-center justify-center">
                <span className="text-mn-surface text-sm font-semibold">{userInitial}</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-mn-text">{userName}</p>
                <p className="text-xs text-mn-muted">{userRole}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-mn-muted hidden md:block" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="cursor-pointer">Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleLogout}>
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

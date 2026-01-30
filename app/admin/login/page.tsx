"use client"

import React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"

export default function AdminLoginPage() {
  const router = useRouter()
  const { login, isAuthenticated } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Redireciona se já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin/dashboard")
    }
  }, [isAuthenticated, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await login(form.email, form.password)
      router.push("/admin/dashboard")
    } catch {
      setError("Email ou senha inválidos")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-mn-green-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-mn-surface rounded-full" />
        <div className="absolute bottom-10 right-20 w-96 h-96 border border-mn-surface rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-mn-surface rounded-full" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-mn-surface flex items-center justify-center mx-auto mb-4">
            <span className="text-mn-green-900 font-bold text-2xl">M</span>
          </div>
          <h1 className="text-2xl font-bold text-mn-surface">mednotes</h1>
          <p className="text-mn-surface/60 text-sm mt-1">Painel Administrativo</p>
        </div>

        {/* Login Card */}
        <div className="bg-mn-surface rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-semibold text-mn-text mb-6 text-center">
            Entrar na sua conta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-mn-text mb-1.5">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="admin@mednotes.app"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-mn-surface-alt border-mn-border-light"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-mn-text mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="bg-mn-surface-alt border-mn-border-light pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-mn-muted hover:text-mn-text transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-mn-border text-mn-green-900 focus:ring-mn-green-900"
                />
                <span className="text-mn-muted">Lembrar de mim</span>
              </label>
              <button type="button" className="text-mn-green-800 hover:underline">
                Esqueci a senha
              </button>
            </div>

            <Button
              type="submit"
              className="w-full bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </div>

        <p className="text-center text-mn-surface/60 text-sm mt-6">
          © {new Date().getFullYear()} MedNotes. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}

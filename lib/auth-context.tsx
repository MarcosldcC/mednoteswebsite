"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "editor" | "viewer"
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const STORAGE_KEY = "mednotes_auth"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Verifica se há usuário salvo no sessionStorage ao carregar
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUser(parsed)
      } catch {
        sessionStorage.removeItem(STORAGE_KEY)
      }
    }
    setIsLoading(false)
  }, [])

  const login = useCallback(async (email: string, _password: string) => {
    // Simula delay de API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // TODO: Implementar autenticação real com backend
    // Por enquanto, aceita qualquer login e cria um usuário mock
    const mockUser: User = {
      id: "1",
      name: "Administrador",
      email: email,
      role: "admin",
      avatar: undefined,
    }

    setUser(mockUser)
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser))
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    sessionStorage.removeItem(STORAGE_KEY)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

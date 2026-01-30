"use client"

import { useState } from "react"
import {
  Search,
  Download,
  Filter,
  User,
  Settings,
  FileText,
  CreditCard,
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock data para logs de auditoria
const auditLogs = [
  {
    id: "1",
    action: "user.login",
    description: "Login realizado com sucesso",
    user: "admin@mednotes.com",
    ip: "192.168.1.100",
    timestamp: "2025-01-30T15:30:00",
    type: "info",
    resource: "auth",
  },
  {
    id: "2",
    action: "user.create",
    description: "Novo usuário criado: joao@email.com",
    user: "admin@mednotes.com",
    ip: "192.168.1.100",
    timestamp: "2025-01-30T14:45:00",
    type: "success",
    resource: "users",
  },
  {
    id: "3",
    action: "algorithm.update",
    description: "Algoritmo 'Protocolo de Sepse' atualizado",
    user: "editor@mednotes.com",
    ip: "192.168.1.101",
    timestamp: "2025-01-30T14:20:00",
    type: "info",
    resource: "content",
  },
  {
    id: "4",
    action: "plan.change",
    description: "Plano alterado de Básico para Premium - ID: USR-123",
    user: "admin@mednotes.com",
    ip: "192.168.1.100",
    timestamp: "2025-01-30T13:15:00",
    type: "success",
    resource: "billing",
  },
  {
    id: "5",
    action: "security.failed_login",
    description: "Tentativa de login falha para: teste@email.com",
    user: "Sistema",
    ip: "203.0.113.50",
    timestamp: "2025-01-30T12:00:00",
    type: "warning",
    resource: "security",
  },
  {
    id: "6",
    action: "settings.update",
    description: "Configurações de notificação atualizadas",
    user: "admin@mednotes.com",
    ip: "192.168.1.100",
    timestamp: "2025-01-30T11:30:00",
    type: "info",
    resource: "settings",
  },
  {
    id: "7",
    action: "user.delete",
    description: "Usuário removido: usuario_antigo@email.com",
    user: "admin@mednotes.com",
    ip: "192.168.1.100",
    timestamp: "2025-01-30T10:45:00",
    type: "warning",
    resource: "users",
  },
  {
    id: "8",
    action: "content.publish",
    description: "Conteúdo publicado: Guia de Emergência 2025",
    user: "editor@mednotes.com",
    ip: "192.168.1.101",
    timestamp: "2025-01-30T10:00:00",
    type: "success",
    resource: "content",
  },
  {
    id: "9",
    action: "security.permission_change",
    description: "Permissões alteradas para usuário: maria@mednotes.com",
    user: "admin@mednotes.com",
    ip: "192.168.1.100",
    timestamp: "2025-01-29T16:30:00",
    type: "warning",
    resource: "security",
  },
  {
    id: "10",
    action: "billing.refund",
    description: "Reembolso processado - Valor: R$ 29,90",
    user: "admin@mednotes.com",
    ip: "192.168.1.100",
    timestamp: "2025-01-29T15:00:00",
    type: "info",
    resource: "billing",
  },
]

const resourceConfig = {
  auth: { label: "Autenticação", icon: User, color: "bg-blue-100 text-blue-700" },
  users: { label: "Usuários", icon: User, color: "bg-green-100 text-green-700" },
  content: { label: "Conteúdo", icon: FileText, color: "bg-purple-100 text-purple-700" },
  billing: { label: "Faturamento", icon: CreditCard, color: "bg-yellow-100 text-yellow-700" },
  security: { label: "Segurança", icon: Shield, color: "bg-red-100 text-red-700" },
  settings: { label: "Configurações", icon: Settings, color: "bg-gray-100 text-gray-700" },
}

const typeConfig = {
  info: { icon: Info, color: "text-blue-600" },
  success: { icon: CheckCircle, color: "text-green-600" },
  warning: { icon: AlertTriangle, color: "text-yellow-600" },
  error: { icon: AlertTriangle, color: "text-red-600" },
}

export default function AuditoriaPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [resourceFilter, setResourceFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [dateRange, setDateRange] = useState("today")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch =
      log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesResource = resourceFilter === "all" || log.resource === resourceFilter
    const matchesType = typeFilter === "all" || log.type === typeFilter
    return matchesSearch && matchesResource && matchesType
  })

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage)
  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return {
      date: date.toLocaleDateString("pt-BR"),
      time: date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-mn-text">Logs de Auditoria</h1>
          <p className="text-mn-muted">Monitore todas as ações realizadas no sistema</p>
        </div>
        <Button variant="outline" className="border-mn-border bg-transparent">
          <Download className="w-4 h-4 mr-2" />
          Exportar Logs
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-mn-surface border-mn-border-light">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-mn-text">
                  {auditLogs.filter((l) => l.type === "info").length}
                </p>
                <p className="text-sm text-mn-muted">Informativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-mn-surface border-mn-border-light">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-100">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-mn-text">
                  {auditLogs.filter((l) => l.type === "success").length}
                </p>
                <p className="text-sm text-mn-muted">Sucesso</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-mn-surface border-mn-border-light">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-100">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-mn-text">
                  {auditLogs.filter((l) => l.type === "warning").length}
                </p>
                <p className="text-sm text-mn-muted">Alertas</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-mn-surface border-mn-border-light">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-mn-green-900/10">
                <Shield className="w-5 h-5 text-mn-green-900" />
              </div>
              <div>
                <p className="text-2xl font-bold text-mn-text">
                  {auditLogs.filter((l) => l.resource === "security").length}
                </p>
                <p className="text-sm text-mn-muted">Segurança</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-mn-surface border-mn-border-light">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mn-muted" />
              <Input
                placeholder="Buscar por ação, usuário ou descrição..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={resourceFilter} onValueChange={setResourceFilter}>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Recurso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="auth">Autenticação</SelectItem>
                  <SelectItem value="users">Usuários</SelectItem>
                  <SelectItem value="content">Conteúdo</SelectItem>
                  <SelectItem value="billing">Faturamento</SelectItem>
                  <SelectItem value="security">Segurança</SelectItem>
                  <SelectItem value="settings">Configurações</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="info">Informativo</SelectItem>
                  <SelectItem value="success">Sucesso</SelectItem>
                  <SelectItem value="warning">Alerta</SelectItem>
                  <SelectItem value="error">Erro</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-36">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Hoje</SelectItem>
                  <SelectItem value="week">Última semana</SelectItem>
                  <SelectItem value="month">Último mês</SelectItem>
                  <SelectItem value="all">Todo período</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logs List */}
      <Card className="bg-mn-surface border-mn-border-light">
        <CardHeader>
          <CardTitle className="text-lg">Registros ({filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {paginatedLogs.map((log) => {
              const resource = resourceConfig[log.resource as keyof typeof resourceConfig]
              const type = typeConfig[log.type as keyof typeof typeConfig]
              const ResourceIcon = resource.icon
              const TypeIcon = type.icon
              const { date, time } = formatTimestamp(log.timestamp)

              return (
                <div
                  key={log.id}
                  className="flex items-start gap-4 p-4 rounded-lg border border-mn-border-light hover:bg-mn-surface-alt transition-colors"
                >
                  <div className={`p-2 rounded-lg ${resource.color}`}>
                    <ResourceIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <TypeIcon className={`w-4 h-4 ${type.color}`} />
                      <span className="font-medium text-mn-text text-sm">{log.action}</span>
                    </div>
                    <p className="text-sm text-mn-text">{log.description}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-mn-muted">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {log.user}
                      </span>
                      <span>IP: {log.ip}</span>
                    </div>
                  </div>
                  <div className="text-right text-sm shrink-0">
                    <p className="text-mn-text flex items-center gap-1 justify-end">
                      <Calendar className="w-3 h-3" />
                      {date}
                    </p>
                    <p className="text-mn-muted flex items-center gap-1 justify-end">
                      <Clock className="w-3 h-3" />
                      {time}
                    </p>
                  </div>
                </div>
              )
            })}

            {paginatedLogs.length === 0 && (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-mn-muted mx-auto mb-2" />
                <p className="text-mn-muted">Nenhum registro encontrado</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-mn-border-light">
              <p className="text-sm text-mn-muted">
                Mostrando {(currentPage - 1) * itemsPerPage + 1} a{" "}
                {Math.min(currentPage * itemsPerPage, filteredLogs.length)} de {filteredLogs.length}{" "}
                registros
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm text-mn-text px-2">
                  {currentPage} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

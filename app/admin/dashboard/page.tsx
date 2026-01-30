"use client"

import { Users, Brain, Bell, MessageSquare, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockDashboardMetrics, mockAuditLogs } from "@/lib/mocks"

const metrics = [
  {
    title: "Usuários Ativos",
    value: mockDashboardMetrics.activeUsers.toLocaleString("pt-BR"),
    change: mockDashboardMetrics.activeUsersChange,
    icon: Users,
  },
  {
    title: "Simulações Concluídas",
    value: mockDashboardMetrics.simulationsCompleted.toLocaleString("pt-BR"),
    change: mockDashboardMetrics.simulationsChange,
    icon: Brain,
  },
  {
    title: "Notificações Enviadas",
    value: mockDashboardMetrics.notificationsSent.toString(),
    change: mockDashboardMetrics.notificationsChange,
    icon: Bell,
  },
  {
    title: "Conversas Abertas",
    value: mockDashboardMetrics.openConversations.toString(),
    change: mockDashboardMetrics.conversationsChange,
    icon: MessageSquare,
  },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-mn-text">Dashboard</h1>
        <p className="text-mn-muted">Visão geral do MedNotes</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-mn-surface border-mn-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-mn-muted">
                {metric.title}
              </CardTitle>
              <metric.icon className="w-5 h-5 text-mn-green-800" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-mn-text">{metric.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {metric.change >= 0 ? (
                  <TrendingUp className="w-4 h-4 text-green-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600" />
                )}
                <span
                  className={`text-sm ${metric.change >= 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {metric.change >= 0 ? "+" : ""}
                  {metric.change}%
                </span>
                <span className="text-sm text-mn-muted">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-mn-surface border-mn-border">
          <CardHeader>
            <CardTitle className="text-lg">Usuários por Plano</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-mn-surface-alt rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-mn-green-900/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-mn-green-900" />
                </div>
                <p className="text-mn-muted text-sm">Gráfico de usuários por plano</p>
                <p className="text-mn-muted text-xs mt-1">(Implementar com dados reais)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-mn-surface border-mn-border">
          <CardHeader>
            <CardTitle className="text-lg">Atividade Semanal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-mn-surface-alt rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-mn-green-900/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-mn-green-900" />
                </div>
                <p className="text-mn-muted text-sm">Gráfico de atividade semanal</p>
                <p className="text-mn-muted text-xs mt-1">(Implementar com dados reais)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Audit Log */}
      <Card className="bg-mn-surface border-mn-border">
        <CardHeader>
          <CardTitle className="text-lg">Últimas Alterações</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockAuditLogs.slice(0, 5).map((log) => (
              <div
                key={log.id}
                className="flex items-start justify-between py-3 border-b border-mn-border-light last:border-0"
              >
                <div>
                  <p className="font-medium text-mn-text">{log.action}</p>
                  <p className="text-sm text-mn-muted">{log.details}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-mn-muted">{log.admin}</p>
                  <p className="text-xs text-mn-muted">{log.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

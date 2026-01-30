"use client"

import { useState } from "react"
import { Send, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { mockNotifications } from "@/lib/mocks"

export default function NotificacoesPage() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [form, setForm] = useState({
    title: "",
    message: "",
    target: "all",
  })

  const handleSend = () => {
    if (!form.title || !form.message) {
      alert("Preencha todos os campos")
      return
    }

    const newNotification = {
      id: Date.now().toString(),
      title: form.title,
      message: form.message,
      target: form.target,
      sentAt: new Date().toISOString().split("T")[0],
      readCount: 0,
    }

    setNotifications([newNotification, ...notifications])
    setForm({ title: "", message: "", target: "all" })
    alert("Notificação enviada! (Implementar backend)")
  }

  const getTargetLabel = (target: string) => {
    switch (target) {
      case "all":
        return "Todos"
      case "free":
        return "Free"
      case "premium":
        return "Premium"
      case "institucional":
        return "Institucional"
      default:
        return target
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-mn-text">Notificações</h1>
        <p className="text-mn-muted">Envie notificações para os usuários</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Create Notification Form */}
        <Card className="bg-mn-surface border-mn-border lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Nova Notificação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-mn-text mb-1.5">
                Título
              </label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Título da notificação"
                className="bg-mn-surface-alt border-mn-border-light"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-mn-text mb-1.5">
                Mensagem
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Mensagem da notificação..."
                rows={4}
                className="bg-mn-surface-alt border-mn-border-light"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-mn-text mb-1.5">
                Público-alvo
              </label>
              <Select
                value={form.target}
                onValueChange={(v) => setForm({ ...form, target: v })}
              >
                <SelectTrigger className="bg-mn-surface-alt border-mn-border-light">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os usuários</SelectItem>
                  <SelectItem value="free">Usuários Free</SelectItem>
                  <SelectItem value="premium">Usuários Premium</SelectItem>
                  <SelectItem value="institucional">Institucional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="w-full bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
              onClick={handleSend}
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Notificação
            </Button>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <Card className="bg-mn-surface border-mn-border lg:col-span-2">
          <CardHeader>
            <CardTitle>Notificações Enviadas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-mn-border-light">
                  <TableHead>Título</TableHead>
                  <TableHead>Público</TableHead>
                  <TableHead>Leituras</TableHead>
                  <TableHead>Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notifications.map((notification) => (
                  <TableRow key={notification.id} className="border-mn-border-light">
                    <TableCell>
                      <div>
                        <p className="font-medium text-mn-text">{notification.title}</p>
                        <p className="text-sm text-mn-muted line-clamp-1">
                          {notification.message}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{getTargetLabel(notification.target)}</Badge>
                    </TableCell>
                    <TableCell className="text-mn-text">
                      {notification.readCount.toLocaleString("pt-BR")}
                    </TableCell>
                    <TableCell className="text-mn-muted">{notification.sentAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

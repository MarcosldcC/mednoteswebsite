"use client"

import { useState } from "react"
import { Search, MoreVertical, Ban, CheckCircle, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockUsers } from "@/lib/mocks"

type User = (typeof mockUsers)[0]

export default function UsuariosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [planFilter, setPlanFilter] = useState("all")
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [users, setUsers] = useState(mockUsers)

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || user.status === statusFilter
    const matchesPlan = planFilter === "all" || user.plan === planFilter
    return matchesSearch && matchesStatus && matchesPlan
  })

  const toggleUserStatus = (userId: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === "active" ? "blocked" : "active" }
          : user
      )
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ativo</Badge>
      case "blocked":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Bloqueado</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "premium":
        return <Badge className="bg-mn-green-900 text-mn-surface hover:bg-mn-green-800">Premium</Badge>
      case "institucional":
        return <Badge className="bg-blue-600 text-white hover:bg-blue-700">Institucional</Badge>
      default:
        return <Badge variant="outline">Free</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-mn-text">Usuários</h1>
        <p className="text-mn-muted">Gerencie os usuários da plataforma</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mn-muted" />
          <Input
            placeholder="Buscar por nome ou email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-mn-surface border-mn-border"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40 bg-mn-surface border-mn-border">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="blocked">Bloqueados</SelectItem>
          </SelectContent>
        </Select>
        <Select value={planFilter} onValueChange={setPlanFilter}>
          <SelectTrigger className="w-full sm:w-40 bg-mn-surface border-mn-border">
            <SelectValue placeholder="Plano" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="premium">Premium</SelectItem>
            <SelectItem value="institucional">Institucional</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-mn-surface border border-mn-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-mn-border-light">
              <TableHead>Usuário</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Plano</TableHead>
              <TableHead>Último Login</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id} className="border-mn-border-light">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-mn-text">{user.name}</p>
                      <p className="text-sm text-mn-muted">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(user.status)}</TableCell>
                <TableCell>{getPlanBadge(user.plan)}</TableCell>
                <TableCell className="text-mn-muted">{user.lastLogin}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setSelectedUser(user)}>
                        <Eye className="w-4 h-4 mr-2" />
                        Ver Detalhes
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleUserStatus(user.id)}>
                        {user.status === "active" ? (
                          <>
                            <Ban className="w-4 h-4 mr-2" />
                            Bloquear
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Desbloquear
                          </>
                        )}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* User Detail Dialog */}
      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="bg-mn-surface border-mn-border">
          <DialogHeader>
            <DialogTitle>Detalhes do Usuário</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={selectedUser.avatar || "/placeholder.svg"}
                  alt={selectedUser.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-mn-text">{selectedUser.name}</h3>
                  <p className="text-sm text-mn-muted">{selectedUser.email}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-mn-muted">Status</p>
                  <p className="font-medium text-mn-text capitalize">{selectedUser.status}</p>
                </div>
                <div>
                  <p className="text-sm text-mn-muted">Plano</p>
                  <p className="font-medium text-mn-text capitalize">{selectedUser.plan}</p>
                </div>
                <div>
                  <p className="text-sm text-mn-muted">Cadastrado em</p>
                  <p className="font-medium text-mn-text">{selectedUser.createdAt}</p>
                </div>
                <div>
                  <p className="text-sm text-mn-muted">Último Login</p>
                  <p className="font-medium text-mn-text">{selectedUser.lastLogin}</p>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => setSelectedUser(null)}
                >
                  Fechar
                </Button>
                <Button
                  className={
                    selectedUser.status === "active"
                      ? "flex-1 bg-red-600 hover:bg-red-700 text-white"
                      : "flex-1 bg-green-600 hover:bg-green-700 text-white"
                  }
                  onClick={() => {
                    toggleUserStatus(selectedUser.id)
                    setSelectedUser(null)
                  }}
                >
                  {selectedUser.status === "active" ? "Bloquear" : "Desbloquear"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

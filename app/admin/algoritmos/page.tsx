"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, MoreVertical, Edit, Trash2, Eye } from "lucide-react"
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockAlgorithms } from "@/lib/mocks"

const categories = ["Cardiologia", "Emergência", "Endocrinologia", "Neurologia", "Pneumologia"]

export default function AlgoritmosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredAlgorithms = mockAlgorithms.filter((algo) => {
    const matchesSearch =
      algo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      algo.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || algo.category === categoryFilter
    const matchesStatus = statusFilter === "all" || algo.status === statusFilter
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Publicado</Badge>
      case "draft":
        return <Badge variant="outline">Rascunho</Badge>
      case "review":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Em Revisão</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-mn-text">Algoritmos</h1>
          <p className="text-mn-muted">Gerencie os algoritmos clínicos</p>
        </div>
        <Link href="/admin/algoritmos/novo">
          <Button className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface">
            <Plus className="w-4 h-4 mr-2" />
            Novo Algoritmo
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mn-muted" />
          <Input
            placeholder="Buscar algoritmo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-mn-surface border-mn-border"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-44 bg-mn-surface border-mn-border">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40 bg-mn-surface border-mn-border">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="published">Publicado</SelectItem>
            <SelectItem value="draft">Rascunho</SelectItem>
            <SelectItem value="review">Em Revisão</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-mn-surface border border-mn-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-mn-border-light">
              <TableHead>Algoritmo</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Atualizado</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAlgorithms.map((algo) => (
              <TableRow key={algo.id} className="border-mn-border-light">
                <TableCell>
                  <div>
                    <p className="font-medium text-mn-text">{algo.title}</p>
                    <p className="text-sm text-mn-muted">{algo.subtitle}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{algo.category}</Badge>
                </TableCell>
                <TableCell>{getStatusBadge(algo.status)}</TableCell>
                <TableCell className="text-mn-muted">{algo.updatedAt}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/algoritmos/${algo.id}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          Ver / Editar
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

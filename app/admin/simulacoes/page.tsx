"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Plus, MoreVertical, Eye, Trash2 } from "lucide-react"
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
import { mockSimulations } from "@/lib/mocks"

const categories = ["Cardiologia", "Pediatria", "Obstetrícia", "Geriatria", "Emergência"]

export default function SimulacoesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  const filteredSimulations = mockSimulations.filter((sim) => {
    const matchesSearch =
      sim.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sim.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || sim.category === categoryFilter
    const matchesDifficulty = difficultyFilter === "all" || sim.difficulty === difficultyFilter
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Iniciante</Badge>
      case "intermediate":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Intermediário</Badge>
      case "advanced":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Avançado</Badge>
      default:
        return <Badge variant="secondary">{difficulty}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-mn-text">Simulações</h1>
          <p className="text-mn-muted">Gerencie os casos clínicos simulados</p>
        </div>
        <Link href="/admin/simulacoes/novo">
          <Button className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface">
            <Plus className="w-4 h-4 mr-2" />
            Nova Simulação
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mn-muted" />
          <Input
            placeholder="Buscar simulação..."
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
        <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
          <SelectTrigger className="w-full sm:w-44 bg-mn-surface border-mn-border">
            <SelectValue placeholder="Dificuldade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="beginner">Iniciante</SelectItem>
            <SelectItem value="intermediate">Intermediário</SelectItem>
            <SelectItem value="advanced">Avançado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-mn-surface border border-mn-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-mn-border-light">
              <TableHead>Caso</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Dificuldade</TableHead>
              <TableHead>Steps</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSimulations.map((sim) => (
              <TableRow key={sim.id} className="border-mn-border-light">
                <TableCell>
                  <div>
                    <p className="font-medium text-mn-text">{sim.title}</p>
                    <p className="text-sm text-mn-muted">{sim.description}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{sim.category}</Badge>
                </TableCell>
                <TableCell>{getDifficultyBadge(sim.difficulty)}</TableCell>
                <TableCell className="text-mn-muted">{sim.stepsCount} passos</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/simulacoes/${sim.id}`}>
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

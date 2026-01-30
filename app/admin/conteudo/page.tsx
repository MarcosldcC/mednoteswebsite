"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  FileText,
  BookOpen,
  Video,
  ImageIcon,
  Calendar,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock data
const contentItems = [
  {
    id: "1",
    title: "Guia Completo de Cardiologia",
    type: "article",
    category: "Cardiologia",
    status: "published",
    author: "Dr. Carlos Silva",
    createdAt: "2025-01-15",
    views: 1250,
  },
  {
    id: "2",
    title: "Vídeo: Técnicas de Intubação",
    type: "video",
    category: "Emergência",
    status: "draft",
    author: "Dra. Ana Santos",
    createdAt: "2025-01-20",
    views: 0,
  },
  {
    id: "3",
    title: "Infográfico: Antibióticos",
    type: "image",
    category: "Infectologia",
    status: "review",
    author: "Dr. Pedro Lima",
    createdAt: "2025-01-18",
    views: 450,
  },
  {
    id: "4",
    title: "Protocolo de Sepse",
    type: "document",
    category: "UTI",
    status: "published",
    author: "Dra. Maria Costa",
    createdAt: "2025-01-10",
    views: 3200,
  },
  {
    id: "5",
    title: "Farmacologia Básica",
    type: "article",
    category: "Farmacologia",
    status: "published",
    author: "Dr. João Oliveira",
    createdAt: "2025-01-05",
    views: 2100,
  },
]

const contentTypes = [
  { value: "article", label: "Artigo", icon: BookOpen },
  { value: "video", label: "Vídeo", icon: Video },
  { value: "image", label: "Imagem/Infográfico", icon: ImageIcon },
  { value: "document", label: "Documento", icon: FileText },
]

const statusConfig = {
  published: { label: "Publicado", color: "bg-green-100 text-green-700", icon: CheckCircle },
  draft: { label: "Rascunho", color: "bg-gray-100 text-gray-700", icon: Clock },
  review: { label: "Em Revisão", color: "bg-yellow-100 text-yellow-700", icon: Eye },
  archived: { label: "Arquivado", color: "bg-red-100 text-red-700", icon: XCircle },
}

export default function ConteudoPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredContent = contentItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || item.type === typeFilter
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    return matchesSearch && matchesType && matchesStatus
  })

  const getTypeIcon = (type: string) => {
    const config = contentTypes.find((t) => t.value === type)
    return config?.icon || FileText
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-mn-text">Gerenciamento de Conteúdo</h1>
          <p className="text-mn-muted">Gerencie artigos, vídeos e materiais educativos</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface">
              <Plus className="w-4 h-4 mr-2" />
              Novo Conteúdo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Criar Novo Conteúdo</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label>Título</Label>
                <Input placeholder="Título do conteúdo" className="mt-1" />
              </div>
              <div>
                <Label>Tipo</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Categoria</Label>
                <Input placeholder="Ex: Cardiologia, Emergência" className="mt-1" />
              </div>
              <div>
                <Label>Descrição</Label>
                <Textarea placeholder="Descreva o conteúdo..." className="mt-1" rows={4} />
              </div>
              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button
                  type="button"
                  className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
                  onClick={() => {
                    // TODO: Implementar criação de conteúdo
                    setIsDialogOpen(false)
                  }}
                >
                  Criar Conteúdo
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-mn-surface border-mn-border-light">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-mn-green-900/10">
                <FileText className="w-5 h-5 text-mn-green-900" />
              </div>
              <div>
                <p className="text-2xl font-bold text-mn-text">{contentItems.length}</p>
                <p className="text-sm text-mn-muted">Total</p>
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
                  {contentItems.filter((c) => c.status === "published").length}
                </p>
                <p className="text-sm text-mn-muted">Publicados</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-mn-surface border-mn-border-light">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-yellow-100">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-mn-text">
                  {contentItems.filter((c) => c.status === "draft" || c.status === "review").length}
                </p>
                <p className="text-sm text-mn-muted">Pendentes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-mn-surface border-mn-border-light">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-mn-text">
                  {contentItems.reduce((acc, c) => acc + c.views, 0).toLocaleString()}
                </p>
                <p className="text-sm text-mn-muted">Visualizações</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-mn-surface border-mn-border-light">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mn-muted" />
              <Input
                placeholder="Buscar conteúdo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                {contentTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="published">Publicado</SelectItem>
                <SelectItem value="draft">Rascunho</SelectItem>
                <SelectItem value="review">Em Revisão</SelectItem>
                <SelectItem value="archived">Arquivado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Content List */}
      <Card className="bg-mn-surface border-mn-border-light">
        <CardHeader>
          <CardTitle className="text-lg">Conteúdos ({filteredContent.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredContent.map((item) => {
              const TypeIcon = getTypeIcon(item.type)
              const status = statusConfig[item.status as keyof typeof statusConfig]
              const StatusIcon = status.icon

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light hover:bg-mn-surface-alt transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-mn-green-900/10">
                      <TypeIcon className="w-5 h-5 text-mn-green-900" />
                    </div>
                    <div>
                      <h3 className="font-medium text-mn-text">{item.title}</h3>
                      <div className="flex items-center gap-3 mt-1 text-sm text-mn-muted">
                        <span>{item.category}</span>
                        <span className="w-1 h-1 rounded-full bg-mn-muted" />
                        <span>{item.author}</span>
                        <span className="w-1 h-1 rounded-full bg-mn-muted" />
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(item.createdAt).toLocaleDateString("pt-BR")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm font-medium text-mn-text">{item.views.toLocaleString()}</p>
                      <p className="text-xs text-mn-muted">visualizações</p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${status.color}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {status.label}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer">
                          <Eye className="w-4 h-4 mr-2" />
                          Visualizar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )
            })}

            {filteredContent.length === 0 && (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-mn-muted mx-auto mb-2" />
                <p className="text-mn-muted">Nenhum conteúdo encontrado</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

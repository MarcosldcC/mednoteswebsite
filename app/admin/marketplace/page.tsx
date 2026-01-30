"use client"

import { useState } from "react"
import { Search, Plus, MoreVertical, Edit, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ImageIcon } from "lucide-react"
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
import { mockProducts, mockCategories } from "@/lib/mocks"

type Product = (typeof mockProducts)[0]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [products, setProducts] = useState(mockProducts)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    category: mockCategories[0].name,
    active: true,
  })

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const openModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product)
      setForm({
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
        active: product.active,
      })
    } else {
      setEditingProduct(null)
      setForm({
        title: "",
        description: "",
        price: 0,
        category: mockCategories[0].name,
        active: true,
      })
    }
    setIsModalOpen(true)
  }

  const handleSave = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...p, ...form } : p
        )
      )
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        ...form,
        image: "/placeholder.jpg",
      }
      setProducts([...products, newProduct])
    }
    setIsModalOpen(false)
  }

  const deleteProduct = (id: string) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-mn-text">Marketplace</h1>
          <p className="text-mn-muted">Gerencie os produtos do marketplace</p>
        </div>
        <Button
          className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
          onClick={() => openModal()}
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Produto
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mn-muted" />
          <Input
            placeholder="Buscar produto..."
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
            {mockCategories.map((cat) => (
              <SelectItem key={cat.id} value={cat.name}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="bg-mn-surface border border-mn-border rounded-xl overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-mn-border-light">
              <TableHead>Produto</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id} className="border-mn-border-light">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-mn-surface-alt rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-mn-muted" />
                    </div>
                    <div>
                      <p className="font-medium text-mn-text">{product.title}</p>
                      <p className="text-sm text-mn-muted line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{product.category}</Badge>
                </TableCell>
                <TableCell className="text-mn-text font-medium">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      product.active
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                    }
                  >
                    {product.active ? "Ativo" : "Inativo"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => openModal(product)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => deleteProduct(product.id)}
                      >
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

      {/* Product Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-mn-surface border-mn-border">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "Editar Produto" : "Novo Produto"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-mn-text mb-1.5">
                Título
              </label>
              <Input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Nome do produto"
                className="bg-mn-surface-alt border-mn-border-light"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-mn-text mb-1.5">
                Descrição
              </label>
              <Textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Descrição do produto"
                className="bg-mn-surface-alt border-mn-border-light"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-mn-text mb-1.5">
                  Preço (R$)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={form.price}
                  onChange={(e) =>
                    setForm({ ...form, price: parseFloat(e.target.value) || 0 })
                  }
                  className="bg-mn-surface-alt border-mn-border-light"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-mn-text mb-1.5">
                  Categoria
                </label>
                <Select
                  value={form.category}
                  onValueChange={(v) => setForm({ ...form, category: v })}
                >
                  <SelectTrigger className="bg-mn-surface-alt border-mn-border-light">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCategories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.name}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-mn-text">Ativo</label>
              <Switch
                checked={form.active}
                onCheckedChange={(checked) => setForm({ ...form, active: checked })}
              />
            </div>
            <div className="border-2 border-dashed border-mn-border-light rounded-lg p-6 text-center">
              <ImageIcon className="w-8 h-8 text-mn-muted mx-auto mb-2" />
              <p className="text-sm text-mn-muted">Clique para fazer upload de imagem</p>
            </div>
            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => setIsModalOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                className="flex-1 bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
                onClick={handleSave}
              >
                Salvar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

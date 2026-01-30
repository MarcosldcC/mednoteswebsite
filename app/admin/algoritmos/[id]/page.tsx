"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Plus, GripVertical, Trash2, Upload, Save } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockAlgorithms, mockFlashcards } from "@/lib/mocks"

const categories = ["Cardiologia", "Emergência", "Endocrinologia", "Neurologia", "Pneumologia"]
const statuses = ["draft", "review", "published"]

export default function AlgoritmoDetailPage() {
  const params = useParams()
  const router = useRouter()
  const isNew = params.id === "novo"

  const algorithm = isNew
    ? { id: "", title: "", subtitle: "", category: categories[0], status: "draft" }
    : mockAlgorithms.find((a) => a.id === params.id) || mockAlgorithms[0]

  const [form, setForm] = useState({
    title: algorithm.title,
    subtitle: algorithm.subtitle,
    category: algorithm.category,
    status: algorithm.status,
  })

  const [flashcards, setFlashcards] = useState(
    mockFlashcards.filter((f) => f.algorithmId === params.id)
  )

  const [flowSteps, setFlowSteps] = useState([
    { id: "1", title: "Avaliação Inicial", type: "step", next: "2" },
    { id: "2", title: "Exames Complementares", type: "branch", next: "3" },
    { id: "3", title: "Tratamento", type: "step", next: null },
  ])

  const addFlashcard = () => {
    setFlashcards([
      ...flashcards,
      {
        id: Date.now().toString(),
        algorithmId: params.id as string,
        question: "",
        answer: "",
        order: flashcards.length + 1,
      },
    ])
  }

  const removeFlashcard = (id: string) => {
    setFlashcards(flashcards.filter((f) => f.id !== id))
  }

  const addFlowStep = () => {
    const newId = Date.now().toString()
    setFlowSteps([
      ...flowSteps,
      { id: newId, title: "Novo Passo", type: "step", next: null },
    ])
  }

  const handleSave = () => {
    // TODO: Implementar salvamento
    alert("Algoritmo salvo! (Implementar backend)")
  }

  const handlePublish = () => {
    // TODO: Implementar publicação
    alert("Algoritmo publicado! (Implementar backend)")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/algoritmos">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-mn-text">
              {isNew ? "Novo Algoritmo" : "Editar Algoritmo"}
            </h1>
            <p className="text-mn-muted">
              {isNew ? "Crie um novo algoritmo clínico" : algorithm.title}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Salvar
          </Button>
          <Button className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface" onClick={handlePublish}>
            Publicar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="metadata" className="space-y-4">
        <TabsList className="bg-mn-surface-alt">
          <TabsTrigger value="metadata">Metadados</TabsTrigger>
          <TabsTrigger value="flowchart">Fluxograma</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="pdf">PDF</TabsTrigger>
        </TabsList>

        {/* Metadata Tab */}
        <TabsContent value="metadata">
          <Card className="bg-mn-surface border-mn-border">
            <CardHeader>
              <CardTitle>Informações do Algoritmo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-mn-text mb-1.5">
                  Título
                </label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Ex: Insuficiência Cardíaca Aguda"
                  className="bg-mn-surface-alt border-mn-border-light"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-mn-text mb-1.5">
                  Subtítulo
                </label>
                <Input
                  value={form.subtitle}
                  onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                  placeholder="Ex: Manejo inicial no PS"
                  className="bg-mn-surface-alt border-mn-border-light"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
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
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-mn-text mb-1.5">
                    Status
                  </label>
                  <Select
                    value={form.status}
                    onValueChange={(v) => setForm({ ...form, status: v })}
                  >
                    <SelectTrigger className="bg-mn-surface-alt border-mn-border-light">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status === "draft"
                            ? "Rascunho"
                            : status === "review"
                              ? "Em Revisão"
                              : "Publicado"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Flowchart Tab */}
        <TabsContent value="flowchart">
          <Card className="bg-mn-surface border-mn-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Editor de Fluxograma</CardTitle>
              <Button variant="outline" size="sm" onClick={addFlowStep}>
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Passo
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {flowSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex items-center gap-3 p-4 bg-mn-surface-alt rounded-lg border border-mn-border-light"
                  >
                    <GripVertical className="w-5 h-5 text-mn-muted cursor-grab" />
                    <span className="text-sm text-mn-muted w-6">{index + 1}</span>
                    <Input
                      value={step.title}
                      onChange={(e) => {
                        setFlowSteps(
                          flowSteps.map((s) =>
                            s.id === step.id ? { ...s, title: e.target.value } : s
                          )
                        )
                      }}
                      className="flex-1 bg-mn-surface border-mn-border-light"
                    />
                    <Select
                      value={step.type}
                      onValueChange={(v) => {
                        setFlowSteps(
                          flowSteps.map((s) =>
                            s.id === step.id ? { ...s, type: v } : s
                          )
                        )
                      }}
                    >
                      <SelectTrigger className="w-32 bg-mn-surface border-mn-border-light">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="step">Passo</SelectItem>
                        <SelectItem value="branch">Branch</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setFlowSteps(flowSteps.filter((s) => s.id !== step.id))
                      }
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Flashcards Tab */}
        <TabsContent value="flashcards">
          <Card className="bg-mn-surface border-mn-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Flashcards ({flashcards.length})</CardTitle>
              <Button variant="outline" size="sm" onClick={addFlashcard}>
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Flashcard
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {flashcards.length === 0 ? (
                  <p className="text-center text-mn-muted py-8">
                    Nenhum flashcard criado. Clique em "Adicionar Flashcard" para começar.
                  </p>
                ) : (
                  flashcards.map((card, index) => (
                    <div
                      key={card.id}
                      className="p-4 bg-mn-surface-alt rounded-lg border border-mn-border-light space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-mn-text">
                          Flashcard #{index + 1}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFlashcard(card.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                      <div>
                        <label className="block text-sm text-mn-muted mb-1">
                          Pergunta
                        </label>
                        <Textarea
                          value={card.question}
                          onChange={(e) => {
                            setFlashcards(
                              flashcards.map((f) =>
                                f.id === card.id
                                  ? { ...f, question: e.target.value }
                                  : f
                              )
                            )
                          }}
                          placeholder="Digite a pergunta..."
                          className="bg-mn-surface border-mn-border-light"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-mn-muted mb-1">
                          Resposta
                        </label>
                        <Textarea
                          value={card.answer}
                          onChange={(e) => {
                            setFlashcards(
                              flashcards.map((f) =>
                                f.id === card.id
                                  ? { ...f, answer: e.target.value }
                                  : f
                              )
                            )
                          }}
                          placeholder="Digite a resposta..."
                          className="bg-mn-surface border-mn-border-light"
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PDF Tab */}
        <TabsContent value="pdf">
          <Card className="bg-mn-surface border-mn-border">
            <CardHeader>
              <CardTitle>Upload de PDF</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-mn-border-light rounded-lg p-12 text-center">
                <Upload className="w-12 h-12 text-mn-muted mx-auto mb-4" />
                <p className="text-mn-text font-medium mb-2">
                  Arraste um arquivo PDF ou clique para selecionar
                </p>
                <p className="text-sm text-mn-muted mb-4">
                  Tamanho máximo: 10MB
                </p>
                <Button variant="outline">Selecionar Arquivo</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

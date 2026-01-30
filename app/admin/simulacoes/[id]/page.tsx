"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Plus,
  GripVertical,
  Trash2,
  Save,
  Play,
  ChevronRight,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { mockSimulations, mockSimulationSteps } from "@/lib/mocks"

const stepTypes = [
  { value: "INFO", label: "Informação" },
  { value: "QUESTION_SINGLE", label: "Pergunta (única resposta)" },
  { value: "QUESTION_MULTIPLE", label: "Pergunta (múltiplas)" },
  { value: "RESULT_SUCCESS", label: "Resultado (sucesso)" },
  { value: "RESULT_FAIL", label: "Resultado (falha)" },
]

export default function SimulacaoDetailPage() {
  const params = useParams()
  const isNew = params.id === "novo"

  const simulation = isNew
    ? { id: "", title: "", description: "", difficulty: "intermediate", category: "Cardiologia", stepsCount: 0 }
    : mockSimulations.find((s) => s.id === params.id) || mockSimulations[0]

  const [form, setForm] = useState({
    title: simulation.title,
    description: simulation.description,
    difficulty: simulation.difficulty,
    category: simulation.category,
  })

  const [steps, setSteps] = useState(
    mockSimulationSteps.filter((s) => s.simulationId === params.id)
  )

  const [previewOpen, setPreviewOpen] = useState(false)
  const [currentPreviewStep, setCurrentPreviewStep] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const addStep = () => {
    const newStep = {
      id: Date.now().toString(),
      simulationId: params.id as string,
      type: "INFO",
      title: "Novo Passo",
      content: "",
      order: steps.length + 1,
      options: [],
      correctOption: null,
      feedback: "",
      nextStep: null,
    }
    setSteps([...steps, newStep])
  }

  const removeStep = (id: string) => {
    setSteps(steps.filter((s) => s.id !== id))
  }

  const updateStep = (id: string, updates: Partial<(typeof steps)[0]>) => {
    setSteps(steps.map((s) => (s.id === id ? { ...s, ...updates } : s)))
  }

  const handleSave = () => {
    alert("Simulação salva! (Implementar backend)")
  }

  const startPreview = () => {
    setCurrentPreviewStep(0)
    setSelectedOption(null)
    setPreviewOpen(true)
  }

  const nextPreviewStep = () => {
    if (currentPreviewStep < steps.length - 1) {
      setCurrentPreviewStep(currentPreviewStep + 1)
      setSelectedOption(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/simulacoes">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-mn-text">
              {isNew ? "Nova Simulação" : "Editar Simulação"}
            </h1>
            <p className="text-mn-muted">
              {isNew ? "Crie um novo caso clínico" : simulation.title}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={startPreview}>
            <Play className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Salvar
          </Button>
          <Button className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface">
            Publicar
          </Button>
        </div>
      </div>

      {/* Case Info */}
      <Card className="bg-mn-surface border-mn-border">
        <CardHeader>
          <CardTitle>Dados do Caso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-mn-text mb-1.5">
              Título
            </label>
            <Input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Ex: Paciente com dor torácica"
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
              placeholder="Ex: Homem, 55 anos, dor torácica há 2h"
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
                  <SelectItem value="Cardiologia">Cardiologia</SelectItem>
                  <SelectItem value="Pediatria">Pediatria</SelectItem>
                  <SelectItem value="Obstetrícia">Obstetrícia</SelectItem>
                  <SelectItem value="Geriatria">Geriatria</SelectItem>
                  <SelectItem value="Emergência">Emergência</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-mn-text mb-1.5">
                Dificuldade
              </label>
              <Select
                value={form.difficulty}
                onValueChange={(v) => setForm({ ...form, difficulty: v })}
              >
                <SelectTrigger className="bg-mn-surface-alt border-mn-border-light">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Iniciante</SelectItem>
                  <SelectItem value="intermediate">Intermediário</SelectItem>
                  <SelectItem value="advanced">Avançado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Steps Builder */}
      <Card className="bg-mn-surface border-mn-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Steps ({steps.length})</CardTitle>
          <Button variant="outline" size="sm" onClick={addStep}>
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Step
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.length === 0 ? (
              <p className="text-center text-mn-muted py-8">
                Nenhum step criado. Clique em "Adicionar Step" para começar.
              </p>
            ) : (
              steps.map((step, index) => (
                <div
                  key={step.id}
                  className="p-4 bg-mn-surface-alt rounded-lg border border-mn-border-light"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <GripVertical className="w-5 h-5 text-mn-muted cursor-grab" />
                    <span className="text-sm font-medium text-mn-text w-8">
                      #{index + 1}
                    </span>
                    <Select
                      value={step.type}
                      onValueChange={(v) => updateStep(step.id, { type: v })}
                    >
                      <SelectTrigger className="w-48 bg-mn-surface border-mn-border-light">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {stepTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex-1" />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeStep(step.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-mn-muted mb-1">
                        Título
                      </label>
                      <Input
                        value={step.title}
                        onChange={(e) =>
                          updateStep(step.id, { title: e.target.value })
                        }
                        placeholder="Título do step"
                        className="bg-mn-surface border-mn-border-light"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-mn-muted mb-1">
                        Conteúdo
                      </label>
                      <Textarea
                        value={step.content}
                        onChange={(e) =>
                          updateStep(step.id, { content: e.target.value })
                        }
                        placeholder="Conteúdo do step..."
                        className="bg-mn-surface border-mn-border-light"
                      />
                    </div>

                    {step.type.includes("QUESTION") && (
                      <>
                        <div>
                          <label className="block text-sm text-mn-muted mb-1">
                            Opções (separadas por linha)
                          </label>
                          <Textarea
                            value={step.options.join("\n")}
                            onChange={(e) =>
                              updateStep(step.id, {
                                options: e.target.value.split("\n"),
                              })
                            }
                            placeholder="Opção 1&#10;Opção 2&#10;Opção 3"
                            className="bg-mn-surface border-mn-border-light"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-mn-muted mb-1">
                            Opção Correta (índice, começando em 0)
                          </label>
                          <Input
                            type="number"
                            min={0}
                            value={step.correctOption ?? ""}
                            onChange={(e) =>
                              updateStep(step.id, {
                                correctOption: parseInt(e.target.value) || 0,
                              })
                            }
                            className="bg-mn-surface border-mn-border-light w-24"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-mn-muted mb-1">
                            Feedback
                          </label>
                          <Input
                            value={step.feedback}
                            onChange={(e) =>
                              updateStep(step.id, { feedback: e.target.value })
                            }
                            placeholder="Feedback após resposta..."
                            className="bg-mn-surface border-mn-border-light"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="bg-mn-green-900 border-none max-w-md">
          <DialogHeader>
            <DialogTitle className="text-mn-surface">Preview do Caso</DialogTitle>
          </DialogHeader>
          {steps.length > 0 && (
            <div className="bg-mn-surface rounded-xl p-6 min-h-[300px]">
              <div className="text-xs text-mn-muted mb-2">
                Step {currentPreviewStep + 1} de {steps.length}
              </div>
              <h3 className="text-lg font-semibold text-mn-text mb-3">
                {steps[currentPreviewStep]?.title}
              </h3>
              <p className="text-mn-muted mb-4">
                {steps[currentPreviewStep]?.content}
              </p>

              {steps[currentPreviewStep]?.type.includes("QUESTION") && (
                <div className="space-y-2 mb-4">
                  {steps[currentPreviewStep]?.options.map((option, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`w-full p-3 text-left rounded-lg border transition-all ${
                        selectedOption === i
                          ? "bg-mn-green-900 text-mn-surface border-mn-green-900"
                          : "bg-mn-surface-alt border-mn-border-light hover:border-mn-green-800"
                      }`}
                      onClick={() => setSelectedOption(i)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {selectedOption !== null &&
                steps[currentPreviewStep]?.type.includes("QUESTION") && (
                  <div
                    className={`p-3 rounded-lg mb-4 ${
                      selectedOption === steps[currentPreviewStep]?.correctOption
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {steps[currentPreviewStep]?.feedback || "Feedback não configurado"}
                  </div>
                )}

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setPreviewOpen(false)}
                >
                  Fechar
                </Button>
                {currentPreviewStep < steps.length - 1 && (
                  <Button
                    onClick={nextPreviewStep}
                    className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
                  >
                    Próximo
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

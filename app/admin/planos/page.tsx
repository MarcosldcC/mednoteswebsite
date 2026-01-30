"use client"

import { useState } from "react"
import { Plus, Trash2, GripVertical, Save } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockPlans } from "@/lib/mocks"

export default function AdminPlanosPage() {
  const [plans, setPlans] = useState(mockPlans)

  const updatePlan = (id: string, updates: Partial<(typeof plans)[0]>) => {
    setPlans(plans.map((p) => (p.id === id ? { ...p, ...updates } : p)))
  }

  const addBenefit = (planId: string) => {
    setPlans(
      plans.map((p) =>
        p.id === planId ? { ...p, benefits: [...p.benefits, "Novo benefício"] } : p
      )
    )
  }

  const removeBenefit = (planId: string, index: number) => {
    setPlans(
      plans.map((p) =>
        p.id === planId
          ? { ...p, benefits: p.benefits.filter((_, i) => i !== index) }
          : p
      )
    )
  }

  const updateBenefit = (planId: string, index: number, value: string) => {
    setPlans(
      plans.map((p) =>
        p.id === planId
          ? {
              ...p,
              benefits: p.benefits.map((b, i) => (i === index ? value : b)),
            }
          : p
      )
    )
  }

  const handleSave = () => {
    // TODO: Implement backend
    alert("Planos salvos! (Implementar backend)")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-mn-text">Planos</h1>
          <p className="text-mn-muted">Configure os planos de assinatura</p>
        </div>
        <Button
          className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
          onClick={handleSave}
        >
          <Save className="w-4 h-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className="bg-mn-surface border-mn-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-mn-muted">Ativo</span>
                  <Switch
                    checked={plan.active}
                    onCheckedChange={(checked) =>
                      updatePlan(plan.id, { active: checked })
                    }
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {!plan.isInstitutional && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-mn-text mb-1.5">
                      Preço Mensal (R$)
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={plan.priceMonthly}
                      onChange={(e) =>
                        updatePlan(plan.id, {
                          priceMonthly: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="bg-mn-surface-alt border-mn-border-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mn-text mb-1.5">
                      Preço Anual (R$)
                    </label>
                    <Input
                      type="number"
                      step="0.01"
                      value={plan.priceYearly}
                      onChange={(e) =>
                        updatePlan(plan.id, {
                          priceYearly: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="bg-mn-surface-alt border-mn-border-light"
                    />
                  </div>
                </div>
              )}

              {plan.isInstitutional && (
                <div className="p-4 bg-mn-surface-alt rounded-lg text-center">
                  <p className="text-sm text-mn-muted">
                    Preço personalizado - Consulta comercial
                  </p>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-mn-text">
                    Benefícios
                  </label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => addBenefit(plan.id)}
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Adicionar
                  </Button>
                </div>
                <div className="space-y-2">
                  {plan.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <GripVertical className="w-4 h-4 text-mn-muted cursor-grab" />
                      <Input
                        value={benefit}
                        onChange={(e) =>
                          updateBenefit(plan.id, index, e.target.value)
                        }
                        className="flex-1 bg-mn-surface-alt border-mn-border-light"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeBenefit(plan.id, index)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-mn-border-light">
                <span className="text-sm text-mn-muted">Destacar plano</span>
                <Switch
                  checked={plan.highlighted}
                  onCheckedChange={(checked) =>
                    updatePlan(plan.id, { highlighted: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

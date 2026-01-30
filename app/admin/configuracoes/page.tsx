"use client"

import { useState } from "react"
import {
  Save,
  Bell,
  Shield,
  Globe,
  Mail,
  CreditCard,
  Database,
  Palette,
  Key,
  Smartphone,
  FileText,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ConfiguracoesPage() {
  const [saved, setSaved] = useState(false)
  
  // Estados para configurações gerais
  const [generalSettings, setGeneralSettings] = useState({
    appName: "MedNotes",
    appDescription: "Plataforma de apoio para profissionais de saúde",
    supportEmail: "suporte@mednotes.com",
    maintenanceMode: false,
    language: "pt-BR",
    timezone: "America/Sao_Paulo",
  })

  // Estados para configurações de notificação
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    weeklyReport: true,
    loginAlerts: true,
  })

  // Estados para configurações de segurança
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",
    maxLoginAttempts: "5",
    ipWhitelist: "",
  })

  // Estados para integrações
  const [integrations, setIntegrations] = useState({
    stripeEnabled: true,
    stripeKey: "sk_live_**********************",
    firebaseEnabled: true,
    firebaseKey: "AIza**********************",
    analyticsEnabled: true,
    analyticsId: "G-XXXXXXXXXX",
  })

  const handleSave = () => {
    // TODO: Implementar salvamento das configurações
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-mn-text">Configurações</h1>
          <p className="text-mn-muted">Gerencie as configurações do sistema</p>
        </div>
        <Button
          onClick={handleSave}
          className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
        >
          {saved ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Salvo!
            </>
          ) : (
            <>
              <Save className="w-4 h-4 mr-2" />
              Salvar Alterações
            </>
          )}
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-mn-surface border border-mn-border-light">
          <TabsTrigger value="general" className="data-[state=active]:bg-mn-green-900 data-[state=active]:text-mn-surface">
            <Globe className="w-4 h-4 mr-2" />
            Geral
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-mn-green-900 data-[state=active]:text-mn-surface">
            <Bell className="w-4 h-4 mr-2" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-mn-green-900 data-[state=active]:text-mn-surface">
            <Shield className="w-4 h-4 mr-2" />
            Segurança
          </TabsTrigger>
          <TabsTrigger value="integrations" className="data-[state=active]:bg-mn-green-900 data-[state=active]:text-mn-surface">
            <Key className="w-4 h-4 mr-2" />
            Integrações
          </TabsTrigger>
        </TabsList>

        {/* Configurações Gerais */}
        <TabsContent value="general" className="space-y-6">
          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Informações do Aplicativo
              </CardTitle>
              <CardDescription>Configure as informações básicas do aplicativo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Nome do Aplicativo</Label>
                  <Input
                    value={generalSettings.appName}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, appName: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email de Suporte</Label>
                  <Input
                    type="email"
                    value={generalSettings.supportEmail}
                    onChange={(e) =>
                      setGeneralSettings({ ...generalSettings, supportEmail: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Descrição</Label>
                <Textarea
                  value={generalSettings.appDescription}
                  onChange={(e) =>
                    setGeneralSettings({ ...generalSettings, appDescription: e.target.value })
                  }
                  rows={3}
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Idioma Padrão</Label>
                  <Select
                    value={generalSettings.language}
                    onValueChange={(value) =>
                      setGeneralSettings({ ...generalSettings, language: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Fuso Horário</Label>
                  <Select
                    value={generalSettings.timezone}
                    onValueChange={(value) =>
                      setGeneralSettings({ ...generalSettings, timezone: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/Sao_Paulo">São Paulo (GMT-3)</SelectItem>
                      <SelectItem value="America/New_York">New York (GMT-5)</SelectItem>
                      <SelectItem value="Europe/London">London (GMT+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light bg-mn-surface-alt">
                <div className="space-y-0.5">
                  <Label className="text-base">Modo de Manutenção</Label>
                  <p className="text-sm text-mn-muted">
                    Ativar para exibir página de manutenção aos usuários
                  </p>
                </div>
                <Switch
                  checked={generalSettings.maintenanceMode}
                  onCheckedChange={(checked) =>
                    setGeneralSettings({ ...generalSettings, maintenanceMode: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Aparência
              </CardTitle>
              <CardDescription>Personalize a aparência do aplicativo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Cor Primária</Label>
                  <div className="flex gap-2">
                    <Input type="color" className="w-12 h-10 p-1" defaultValue="#0E3B34" />
                    <Input defaultValue="#0E3B34" className="flex-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Cor Secundária</Label>
                  <div className="flex gap-2">
                    <Input type="color" className="w-12 h-10 p-1" defaultValue="#FBF8EF" />
                    <Input defaultValue="#FBF8EF" className="flex-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Configurações de Notificações */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Notificações por Email
              </CardTitle>
              <CardDescription>Configure as notificações enviadas por email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Notificações de Email</Label>
                  <p className="text-sm text-mn-muted">Receber notificações importantes por email</p>
                </div>
                <Switch
                  checked={notificationSettings.emailNotifications}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, emailNotifications: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Relatório Semanal</Label>
                  <p className="text-sm text-mn-muted">Receber resumo semanal de atividades</p>
                </div>
                <Switch
                  checked={notificationSettings.weeklyReport}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, weeklyReport: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Emails de Marketing</Label>
                  <p className="text-sm text-mn-muted">Receber novidades e promoções</p>
                </div>
                <Switch
                  checked={notificationSettings.marketingEmails}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, marketingEmails: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Notificações Push
              </CardTitle>
              <CardDescription>Configure as notificações push do aplicativo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Notificações Push</Label>
                  <p className="text-sm text-mn-muted">Ativar notificações push no aplicativo</p>
                </div>
                <Switch
                  checked={notificationSettings.pushNotifications}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, pushNotifications: checked })
                  }
                />
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Alertas de Login</Label>
                  <p className="text-sm text-mn-muted">Notificar sobre novos logins na conta</p>
                </div>
                <Switch
                  checked={notificationSettings.loginAlerts}
                  onCheckedChange={(checked) =>
                    setNotificationSettings({ ...notificationSettings, loginAlerts: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Configurações de Segurança */}
        <TabsContent value="security" className="space-y-6">
          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Autenticação
              </CardTitle>
              <CardDescription>Configure as opções de segurança de autenticação</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Autenticação em Dois Fatores</Label>
                  <p className="text-sm text-mn-muted">Exigir 2FA para todos os administradores</p>
                </div>
                <Switch
                  checked={securitySettings.twoFactorAuth}
                  onCheckedChange={(checked) =>
                    setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })
                  }
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Tempo Limite de Sessão (minutos)</Label>
                  <Select
                    value={securitySettings.sessionTimeout}
                    onValueChange={(value) =>
                      setSecuritySettings({ ...securitySettings, sessionTimeout: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutos</SelectItem>
                      <SelectItem value="30">30 minutos</SelectItem>
                      <SelectItem value="60">1 hora</SelectItem>
                      <SelectItem value="120">2 horas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Expiração de Senha (dias)</Label>
                  <Select
                    value={securitySettings.passwordExpiry}
                    onValueChange={(value) =>
                      setSecuritySettings({ ...securitySettings, passwordExpiry: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 dias</SelectItem>
                      <SelectItem value="60">60 dias</SelectItem>
                      <SelectItem value="90">90 dias</SelectItem>
                      <SelectItem value="never">Nunca</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Máximo de Tentativas de Login</Label>
                <Select
                  value={securitySettings.maxLoginAttempts}
                  onValueChange={(value) =>
                    setSecuritySettings({ ...securitySettings, maxLoginAttempts: value })
                  }
                >
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 tentativas</SelectItem>
                    <SelectItem value="5">5 tentativas</SelectItem>
                    <SelectItem value="10">10 tentativas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Controle de Acesso
              </CardTitle>
              <CardDescription>Configure restrições de acesso ao sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Lista de IPs Permitidos</Label>
                <Textarea
                  placeholder="Digite os IPs permitidos (um por linha)"
                  value={securitySettings.ipWhitelist}
                  onChange={(e) =>
                    setSecuritySettings({ ...securitySettings, ipWhitelist: e.target.value })
                  }
                  rows={4}
                />
                <p className="text-xs text-mn-muted">
                  Deixe em branco para permitir acesso de qualquer IP
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrações */}
        <TabsContent value="integrations" className="space-y-6">
          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Stripe (Pagamentos)
              </CardTitle>
              <CardDescription>Configure a integração com o Stripe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Ativar Stripe</Label>
                  <p className="text-sm text-mn-muted">Habilitar processamento de pagamentos</p>
                </div>
                <Switch
                  checked={integrations.stripeEnabled}
                  onCheckedChange={(checked) =>
                    setIntegrations({ ...integrations, stripeEnabled: checked })
                  }
                />
              </div>
              {integrations.stripeEnabled && (
                <div className="space-y-2">
                  <Label>Chave Secreta do Stripe</Label>
                  <Input
                    type="password"
                    value={integrations.stripeKey}
                    onChange={(e) =>
                      setIntegrations({ ...integrations, stripeKey: e.target.value })
                    }
                    placeholder="sk_live_..."
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Firebase
              </CardTitle>
              <CardDescription>Configure a integração com o Firebase</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Ativar Firebase</Label>
                  <p className="text-sm text-mn-muted">
                    Habilitar notificações push e autenticação
                  </p>
                </div>
                <Switch
                  checked={integrations.firebaseEnabled}
                  onCheckedChange={(checked) =>
                    setIntegrations({ ...integrations, firebaseEnabled: checked })
                  }
                />
              </div>
              {integrations.firebaseEnabled && (
                <div className="space-y-2">
                  <Label>Chave de API do Firebase</Label>
                  <Input
                    type="password"
                    value={integrations.firebaseKey}
                    onChange={(e) =>
                      setIntegrations({ ...integrations, firebaseKey: e.target.value })
                    }
                    placeholder="AIza..."
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-mn-surface border-mn-border-light">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Google Analytics
              </CardTitle>
              <CardDescription>Configure o rastreamento de analytics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-mn-border-light">
                <div className="space-y-0.5">
                  <Label className="text-base">Ativar Analytics</Label>
                  <p className="text-sm text-mn-muted">Habilitar rastreamento de uso</p>
                </div>
                <Switch
                  checked={integrations.analyticsEnabled}
                  onCheckedChange={(checked) =>
                    setIntegrations({ ...integrations, analyticsEnabled: checked })
                  }
                />
              </div>
              {integrations.analyticsEnabled && (
                <div className="space-y-2">
                  <Label>ID de Medição</Label>
                  <Input
                    value={integrations.analyticsId}
                    onChange={(e) =>
                      setIntegrations({ ...integrations, analyticsId: e.target.value })
                    }
                    placeholder="G-XXXXXXXXXX"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

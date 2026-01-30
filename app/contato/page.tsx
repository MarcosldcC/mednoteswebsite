"use client"

import React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"

export default function ContatoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement backend
    alert("Mensagem enviada! (Implementar backend)")
  }

  return (
    <div className="min-h-screen bg-mn-surface">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-mn-green-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-mn-surface mb-4">Contato</h1>
          <p className="text-lg text-mn-surface/80 max-w-2xl mx-auto">
            Fale conosco. Estamos aqui para ajudar!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-mn-text mb-6">Entre em Contato</h2>
              <p className="text-mn-muted mb-8 leading-relaxed">
                Tem alguma dúvida, sugestão ou precisa de suporte? Nossa equipe está pronta 
                para atender você. Responderemos em até 24 horas úteis.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mn-green-900/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-mn-green-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mn-text">Email</h3>
                    <p className="text-mn-muted">contato@mednotes.app</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mn-green-900/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-mn-green-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mn-text">Telefone</h3>
                    <p className="text-mn-muted">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-mn-green-900/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-mn-green-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mn-text">Endereço</h3>
                    <p className="text-mn-muted">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-mn-surface border border-mn-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-mn-text mb-6">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-mn-text mb-1.5">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-mn-surface-alt border-mn-border-light"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mn-text mb-1.5">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-mn-surface-alt border-mn-border-light"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-mn-text mb-1.5">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Qual o assunto?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="bg-mn-surface-alt border-mn-border-light"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-mn-text mb-1.5">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-mn-surface-alt border-mn-border-light resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import { Send, X, Plus, Trash2, GripVertical } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { mockConversations, mockFaqs } from "@/lib/mocks"

type Conversation = (typeof mockConversations)[0]

export default function SuportePage() {
  const [conversations, setConversations] = useState(mockConversations)
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(
    conversations[0]
  )
  const [newMessage, setNewMessage] = useState("")
  const [faqs, setFaqs] = useState(mockFaqs)
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" })

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return

    const updatedConversation = {
      ...selectedConversation,
      messages: [
        ...selectedConversation.messages,
        {
          id: Date.now().toString(),
          sender: "support",
          content: newMessage,
          timestamp: new Date().toLocaleString("pt-BR"),
        },
      ],
      lastMessage: newMessage,
    }

    setConversations(
      conversations.map((c) =>
        c.id === selectedConversation.id ? updatedConversation : c
      )
    )
    setSelectedConversation(updatedConversation)
    setNewMessage("")
  }

  const closeConversation = (id: string) => {
    setConversations(
      conversations.map((c) =>
        c.id === id ? { ...c, status: "closed" } : c
      )
    )
  }

  const addFaq = () => {
    if (!newFaq.question || !newFaq.answer) return
    setFaqs([
      ...faqs,
      {
        id: Date.now().toString(),
        question: newFaq.question,
        answer: newFaq.answer,
        order: faqs.length + 1,
      },
    ])
    setNewFaq({ question: "", answer: "" })
  }

  const removeFaq = (id: string) => {
    setFaqs(faqs.filter((f) => f.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-mn-text">Suporte</h1>
        <p className="text-mn-muted">Gerencie conversas e FAQ</p>
      </div>

      <Tabs defaultValue="conversations" className="space-y-4">
        <TabsList className="bg-mn-surface-alt">
          <TabsTrigger value="conversations">
            Conversas ({conversations.filter((c) => c.status === "open").length})
          </TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        {/* Conversations Tab */}
        <TabsContent value="conversations">
          <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversation List */}
            <Card className="bg-mn-surface border-mn-border lg:col-span-1 overflow-hidden">
              <CardHeader className="border-b border-mn-border-light">
                <CardTitle className="text-base">Inbox</CardTitle>
              </CardHeader>
              <CardContent className="p-0 overflow-y-auto h-[calc(100%-60px)]">
                {conversations.map((conv) => (
                  <button
                    type="button"
                    key={conv.id}
                    className={cn(
                      "w-full p-4 text-left border-b border-mn-border-light hover:bg-mn-surface-alt transition-colors",
                      selectedConversation?.id === conv.id && "bg-mn-surface-alt"
                    )}
                    onClick={() => setSelectedConversation(conv)}
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-medium text-mn-text text-sm">{conv.userName}</p>
                      <Badge
                        className={cn(
                          "text-xs",
                          conv.status === "open"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        )}
                      >
                        {conv.status === "open" ? "Aberto" : "Fechado"}
                      </Badge>
                    </div>
                    <p className="text-xs text-mn-muted mb-1">{conv.subject}</p>
                    <p className="text-xs text-mn-muted line-clamp-1">{conv.lastMessage}</p>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="bg-mn-surface border-mn-border lg:col-span-2 flex flex-col overflow-hidden">
              {selectedConversation ? (
                <>
                  <CardHeader className="border-b border-mn-border-light flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-base">{selectedConversation.userName}</CardTitle>
                      <p className="text-sm text-mn-muted">{selectedConversation.subject}</p>
                    </div>
                    {selectedConversation.status === "open" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => closeConversation(selectedConversation.id)}
                      >
                        <X className="w-4 h-4 mr-1" />
                        Fechar
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
                    {selectedConversation.messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "max-w-[80%] p-3 rounded-lg",
                          message.sender === "user"
                            ? "bg-mn-surface-alt mr-auto"
                            : "bg-mn-green-900 text-mn-surface ml-auto"
                        )}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={cn(
                            "text-xs mt-1",
                            message.sender === "user" ? "text-mn-muted" : "text-mn-surface/70"
                          )}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                  {selectedConversation.status === "open" && (
                    <div className="p-4 border-t border-mn-border-light">
                      <div className="flex gap-2">
                        <Input
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Digite sua mensagem..."
                          className="bg-mn-surface-alt border-mn-border-light"
                          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <Button
                          className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
                          onClick={sendMessage}
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-mn-muted">
                  Selecione uma conversa
                </div>
              )}
            </Card>
          </div>
        </TabsContent>

        {/* FAQ Tab */}
        <TabsContent value="faq">
          <Card className="bg-mn-surface border-mn-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add FAQ Form */}
              <div className="p-4 bg-mn-surface-alt rounded-lg space-y-3">
                <h4 className="font-medium text-mn-text">Adicionar FAQ</h4>
                <Input
                  value={newFaq.question}
                  onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                  placeholder="Pergunta"
                  className="bg-mn-surface border-mn-border-light"
                />
                <Textarea
                  value={newFaq.answer}
                  onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                  placeholder="Resposta"
                  className="bg-mn-surface border-mn-border-light"
                />
                <Button
                  className="bg-mn-green-900 hover:bg-mn-green-800 text-mn-surface"
                  onClick={addFaq}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Adicionar FAQ
                </Button>
              </div>

              {/* FAQ List */}
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="flex items-start gap-3 p-4 bg-mn-surface-alt rounded-lg"
                  >
                    <GripVertical className="w-5 h-5 text-mn-muted cursor-grab mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-mn-text mb-1">{faq.question}</h4>
                      <p className="text-sm text-mn-muted">{faq.answer}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFaq(faq.id)}
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

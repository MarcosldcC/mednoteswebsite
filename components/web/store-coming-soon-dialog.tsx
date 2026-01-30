"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"

interface StoreComingSoonDialogProps {
  children: React.ReactNode
  className?: string
}

export function StoreComingSoonDialog({ children, className }: StoreComingSoonDialogProps) {
  const [message, setMessage] = useState<string | null>(null)

  const handleStoreClick = () => {
    setMessage("Em desenvolvimento. Em breve nesta loja!")
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) setMessage(null)
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center">Em breve nas lojas</DialogTitle>
          <DialogDescription className="text-center">
            O app MedNotes não está disponível no momento pois está em desenvolvimento. Em breve você poderá baixá-lo nas lojas abaixo.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            className="w-full justify-start gap-3 h-12"
            onClick={handleStoreClick}
          >
            <Smartphone className="w-5 h-5" />
            <span>Google Play</span>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full justify-start gap-3 h-12"
            onClick={handleStoreClick}
          >
            <Smartphone className="w-5 h-5" />
            <span>App Store (iOS)</span>
          </Button>
          {message && (
            <p className="text-center text-sm text-mn-muted bg-mn-surface-alt rounded-lg py-3 px-4">
              {message}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

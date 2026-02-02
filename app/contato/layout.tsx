import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a equipe MedNotes. Dúvidas, sugestões ou suporte — respondemos em até 24 horas úteis.',
}

export default function ContatoLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}

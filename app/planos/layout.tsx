import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Planos',
  description: 'Escolha o plano ideal para sua jornada médica. Premium, Institucional e mais. Preços e benefícios do MedNotes.',
}

export default function PlanosLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}

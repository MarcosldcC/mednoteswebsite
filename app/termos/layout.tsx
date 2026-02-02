import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do aplicativo MedNotes. Leia as condições de uso do serviço.',
}

export default function TermosLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a MedNotes: missão, impacto, comunidade e nosso compromisso com a inteligência clínica baseada em evidências.',
}

export default function SobreLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}

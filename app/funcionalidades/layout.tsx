import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Funcionalidades',
  description: 'Conheça as funcionalidades do MedNotes: algoritmos, modo plantão, marketplace, simulações e mais para sua prática clínica.',
}

export default function FuncionalidadesLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}

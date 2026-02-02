import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacidade',
  description: 'Política de privacidade da MedNotes. Como coletamos, usamos e protegemos seus dados.',
}

export default function PrivacidadeLayout({
  children,
}: { children: React.ReactNode }) {
  return children
}

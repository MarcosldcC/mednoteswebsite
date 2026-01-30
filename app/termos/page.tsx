import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-mn-surface">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-mn-green-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-mn-surface mb-4">
            Termos de Uso
          </h1>
          <p className="text-lg text-mn-surface/80 max-w-2xl mx-auto">
            Última atualização: 28 de janeiro de 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-mn-surface border border-mn-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-mn-text mb-4">1. Aceitação dos Termos</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Ao acessar e utilizar o aplicativo MedNotes, você declara que leu, compreendeu e 
                concorda em estar vinculado a estes Termos de Uso. Se você não concordar com 
                qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">2. Descrição do Serviço</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                O MedNotes é uma plataforma educacional destinada a profissionais de saúde, 
                oferecendo acesso a algoritmos clínicos, simulações, flashcards e outros 
                recursos de aprendizado. O conteúdo disponibilizado é de caráter informativo 
                e educacional, não devendo substituir a avaliação clínica profissional ou o 
                julgamento médico.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">3. Conta do Usuário</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Para utilizar determinados recursos do MedNotes, você precisará criar uma conta. 
                Você é responsável por manter a confidencialidade de suas credenciais de acesso 
                e por todas as atividades realizadas em sua conta. Comprometa-se a notificar 
                imediatamente o MedNotes sobre qualquer uso não autorizado de sua conta.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">4. Uso Adequado</h2>
              <p className="text-mn-muted mb-4 leading-relaxed">Ao utilizar o MedNotes, você concorda em:</p>
              <ul className="list-disc pl-6 text-mn-muted mb-6 space-y-2">
                <li>Não utilizar o serviço para fins ilegais ou não autorizados</li>
                <li>Não tentar acessar sistemas ou informações sem autorização</li>
                <li>Não compartilhar sua conta com terceiros</li>
                <li>Não reproduzir ou distribuir o conteúdo sem autorização</li>
                <li>Não utilizar o conteúdo como substituto de aconselhamento médico profissional</li>
              </ul>

              <h2 className="text-2xl font-bold text-mn-text mb-4">5. Propriedade Intelectual</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Todo o conteúdo disponível no MedNotes, incluindo textos, imagens, algoritmos, 
                simulações e demais materiais, é protegido por direitos autorais e outras leis 
                de propriedade intelectual. Você não está autorizado a reproduzir, modificar, 
                distribuir ou criar obras derivadas sem nossa autorização expressa por escrito.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">6. Assinaturas e Pagamentos</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Alguns recursos do MedNotes estão disponíveis mediante assinatura paga. Os 
                preços e condições estão disponíveis na seção de planos. Reservamo-nos o 
                direito de alterar os preços mediante aviso prévio. Cancelamentos e reembolsos 
                seguem nossa política específica de cancelamento.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">7. Limitação de Responsabilidade</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                O MedNotes não se responsabiliza por decisões clínicas tomadas com base no 
                conteúdo da plataforma. O conteúdo é fornecido "como está" e não garantimos 
                que será ininterrupto, livre de erros ou adequado a qualquer finalidade 
                específica. A responsabilidade total do MedNotes está limitada ao valor pago 
                pelo usuário nos últimos 12 meses.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">8. Modificações dos Termos</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                As alterações entram em vigor imediatamente após a publicação. O uso 
                continuado do serviço após as alterações constitui aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">9. Contato</h2>
              <p className="text-mn-muted leading-relaxed">
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco 
                através do email: juridico@mednotes.app
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

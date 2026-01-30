import { Navbar } from "@/components/web/navbar"
import { Footer } from "@/components/web/footer"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-mn-surface">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-mn-green-900">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-mn-surface mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-mn-surface/80 max-w-2xl mx-auto">
            Última atualização: 28 de janeiro de 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="bg-mn-surface border border-mn-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-mn-text mb-4">1. Introdução</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                A MedNotes está comprometida com a proteção da privacidade de seus usuários. 
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e 
                protegemos suas informações pessoais quando você utiliza nosso aplicativo e 
                serviços.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">2. Informações Coletadas</h2>
              <p className="text-mn-muted mb-4 leading-relaxed">Coletamos as seguintes categorias de informações:</p>
              <ul className="list-disc pl-6 text-mn-muted mb-6 space-y-2">
                <li><strong>Dados de cadastro:</strong> nome, email, especialidade médica, CRM (opcional)</li>
                <li><strong>Dados de uso:</strong> algoritmos acessados, simulações completadas, tempo de uso</li>
                <li><strong>Dados de desempenho:</strong> pontuação, ranking, progressos</li>
                <li><strong>Dados técnicos:</strong> dispositivo, sistema operacional, versão do app</li>
                <li><strong>Dados de pagamento:</strong> processados de forma segura por parceiros certificados</li>
              </ul>

              <h2 className="text-2xl font-bold text-mn-text mb-4">3. Uso das Informações</h2>
              <p className="text-mn-muted mb-4 leading-relaxed">Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 text-mn-muted mb-6 space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Personalizar sua experiência de aprendizado</li>
                <li>Processar pagamentos e gerenciar assinaturas</li>
                <li>Enviar comunicações relevantes sobre o serviço</li>
                <li>Gerar estatísticas agregadas e anônimas</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>

              <h2 className="text-2xl font-bold text-mn-text mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-mn-muted mb-4 leading-relaxed">Não vendemos seus dados pessoais. Podemos compartilhar informações com:</p>
              <ul className="list-disc pl-6 text-mn-muted mb-6 space-y-2">
                <li>Processadores de pagamento para realizar transações</li>
                <li>Provedores de infraestrutura para hospedar nossos serviços</li>
                <li>Autoridades legais quando exigido por lei</li>
              </ul>

              <h2 className="text-2xl font-bold text-mn-text mb-4">5. Segurança dos Dados</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais para proteger 
                suas informações contra acesso não autorizado, alteração, divulgação ou 
                destruição. Isso inclui criptografia de dados em trânsito e em repouso, 
                controle de acesso e monitoramento contínuo.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">6. Retenção de Dados</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Mantemos seus dados enquanto sua conta estiver ativa ou conforme necessário 
                para fornecer nossos serviços. Após a exclusão da conta, manteremos certos 
                dados por até 5 anos para cumprir obrigações legais e resolver disputas.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">7. Seus Direitos (LGPD)</h2>
              <p className="text-mn-muted mb-4 leading-relaxed">De acordo com a Lei Geral de Proteção de Dados, você tem direito a:</p>
              <ul className="list-disc pl-6 text-mn-muted mb-6 space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a anonimização ou exclusão de dados</li>
                <li>Revogar consentimentos previamente fornecidos</li>
                <li>Solicitar portabilidade dos dados</li>
                <li>Obter informações sobre compartilhamento de dados</li>
              </ul>

              <h2 className="text-2xl font-bold text-mn-text mb-4">8. Cookies e Tecnologias</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar a experiência do 
                usuário, lembrar preferências e analisar o uso do serviço. Você pode 
                gerenciar suas preferências de cookies nas configurações do navegador.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">9. Alterações na Política</h2>
              <p className="text-mn-muted mb-6 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. 
                Notificaremos sobre alterações significativas por email ou através do 
                aplicativo. O uso continuado após as alterações constitui aceitação da 
                nova política.
              </p>

              <h2 className="text-2xl font-bold text-mn-text mb-4">10. Contato</h2>
              <p className="text-mn-muted leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, 
                entre em contato com nosso Encarregado de Proteção de Dados (DPO) 
                através do email: privacidade@mednotes.app
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

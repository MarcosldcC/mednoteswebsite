// MedNotes Mock Data

export const mockUsers = [
  { id: '1', name: 'Paulo Silva', email: 'paulo@email.com', status: 'active', plan: 'premium', avatar: '', createdAt: '2024-01-15', lastLogin: '2024-01-28' },
  { id: '2', name: 'Ana Costa', email: 'ana@email.com', status: 'active', plan: 'free', avatar: '', createdAt: '2024-01-10', lastLogin: '2024-01-27' },
  { id: '3', name: 'Carlos Mendes', email: 'carlos@email.com', status: 'blocked', plan: 'institucional', avatar: '', createdAt: '2023-12-20', lastLogin: '2024-01-20' },
  { id: '4', name: 'Maria Santos', email: 'maria@email.com', status: 'active', plan: 'premium', avatar: '', createdAt: '2024-01-05', lastLogin: '2024-01-28' },
  { id: '5', name: 'João Oliveira', email: 'joao@email.com', status: 'active', plan: 'free', avatar: '', createdAt: '2024-01-20', lastLogin: '2024-01-26' },
]

export const mockAlgorithms = [
  { id: '1', title: 'Insuficiência Cardíaca Aguda', subtitle: 'Manejo inicial no PS', category: 'Cardiologia', status: 'published', updatedAt: '2024-01-25' },
  { id: '2', title: 'Sepse e Choque Séptico', subtitle: 'Protocolo de atendimento', category: 'Emergência', status: 'published', updatedAt: '2024-01-24' },
  { id: '3', title: 'Cetoacidose Diabética', subtitle: 'Diagnóstico e tratamento', category: 'Endocrinologia', status: 'draft', updatedAt: '2024-01-23' },
  { id: '4', title: 'AVC Isquêmico', subtitle: 'Abordagem na emergência', category: 'Neurologia', status: 'published', updatedAt: '2024-01-22' },
  { id: '5', title: 'Pneumonia Adquirida', subtitle: 'Critérios de internação', category: 'Pneumologia', status: 'review', updatedAt: '2024-01-21' },
]

export const mockFlashcards = [
  { id: '1', algorithmId: '1', question: 'Quais os critérios diagnósticos de IC aguda?', answer: 'Dispneia, ortopneia, edema periférico, estertores pulmonares, BNP elevado', order: 1 },
  { id: '2', algorithmId: '1', question: 'Qual a dose inicial de furosemida IV?', answer: '40-80mg IV em bolus', order: 2 },
  { id: '3', algorithmId: '1', question: 'Quando usar VNI na IC?', answer: 'Desconforto respiratório, SatO2 < 90%, frequência respiratória > 25', order: 3 },
]

export const mockSimulations = [
  { id: '1', title: 'Paciente com dor torácica', description: 'Homem, 55 anos, dor torácica há 2h', difficulty: 'intermediate', category: 'Cardiologia', stepsCount: 8 },
  { id: '2', title: 'Criança com febre', description: 'Criança, 3 anos, febre há 3 dias', difficulty: 'beginner', category: 'Pediatria', stepsCount: 6 },
  { id: '3', title: 'Gestante com sangramento', description: 'Mulher, 28 anos, 32 semanas, sangramento vaginal', difficulty: 'advanced', category: 'Obstetrícia', stepsCount: 10 },
  { id: '4', title: 'Idoso confuso', description: 'Homem, 78 anos, confusão mental há 24h', difficulty: 'intermediate', category: 'Geriatria', stepsCount: 7 },
]

export const mockSimulationSteps = [
  { id: '1', simulationId: '1', type: 'INFO', title: 'Apresentação do caso', content: 'Paciente masculino, 55 anos, chegou ao PS com queixa de dor torácica iniciada há 2 horas.', order: 1, options: [], correctOption: null, feedback: '', nextStep: '2' },
  { id: '2', simulationId: '1', type: 'QUESTION_SINGLE', title: 'Primeira conduta', content: 'Qual sua primeira conduta?', order: 2, options: ['Solicitar ECG', 'Administrar morfina', 'Solicitar enzimas cardíacas', 'Realizar RX de tórax'], correctOption: 0, feedback: 'Correto! O ECG é fundamental para avaliação inicial.', nextStep: '3' },
  { id: '3', simulationId: '1', type: 'INFO', title: 'Resultado do ECG', content: 'ECG mostra supradesnivelamento de ST em V1-V4.', order: 3, options: [], correctOption: null, feedback: '', nextStep: '4' },
  { id: '4', simulationId: '1', type: 'RESULT_SUCCESS', title: 'Caso concluído', content: 'Você identificou corretamente o IAM com supra e iniciou o protocolo adequado.', order: 4, options: [], correctOption: null, feedback: '', nextStep: null },
]

export const mockProducts = [
  { id: '1', title: 'Estetoscópio Littmann', description: 'Estetoscópio profissional de alta qualidade', price: 899.90, category: 'Equipamentos', image: '/placeholder.jpg', active: true },
  { id: '2', title: 'Curso de ECG Avançado', description: 'Domine a interpretação de ECG', price: 297.00, category: 'Cursos', image: '/placeholder.jpg', active: true },
  { id: '3', title: 'Kit Diagnóstico', description: 'Kit completo para diagnóstico clínico', price: 450.00, category: 'Equipamentos', image: '/placeholder.jpg', active: true },
  { id: '4', title: 'Livro Medicina de Emergência', description: 'Referência completa em emergências', price: 189.90, category: 'Livros', image: '/placeholder.jpg', active: false },
]

export const mockCategories = [
  { id: '1', name: 'Equipamentos' },
  { id: '2', name: 'Cursos' },
  { id: '3', name: 'Livros' },
  { id: '4', name: 'Software' },
]

export const mockPlans = [
  {
    id: '1',
    name: 'Premium',
    priceMonthly: 39.90,
    priceYearly: 399.90,
    benefits: ['Acesso a todos os algoritmos', 'Modo Plantão ilimitado', 'Simulações exclusivas', 'Suporte prioritário', 'Sem anúncios'],
    active: true,
    highlighted: true
  },
  {
    id: '2',
    name: 'Institucional',
    priceMonthly: 0,
    priceYearly: 0,
    benefits: ['Licença para equipes', 'Dashboard de gestão', 'Relatórios de uso', 'Suporte dedicado', 'Customização'],
    active: true,
    highlighted: false,
    isInstitutional: true
  },
]

export const mockNotifications = [
  { id: '1', title: 'Nova funcionalidade', message: 'O Modo Eco está disponível! Economize bateria enquanto estuda.', target: 'all', sentAt: '2024-01-28', readCount: 1250 },
  { id: '2', title: 'Atualização de algoritmo', message: 'O algoritmo de Sepse foi atualizado com as novas diretrizes.', target: 'premium', sentAt: '2024-01-27', readCount: 450 },
  { id: '3', title: 'Desconto especial', message: 'Ganhe 20% de desconto no plano anual. Válido até o fim do mês!', target: 'free', sentAt: '2024-01-25', readCount: 890 },
]

export const mockConversations = [
  { id: '1', userName: 'Paulo Silva', userEmail: 'paulo@email.com', subject: 'Problema no login', status: 'open', lastMessage: 'Não consigo acessar minha conta', createdAt: '2024-01-28', messages: [
    { id: '1', sender: 'user', content: 'Não consigo acessar minha conta', timestamp: '2024-01-28 10:30' },
    { id: '2', sender: 'support', content: 'Olá Paulo! Vou verificar sua conta. Pode me informar o email cadastrado?', timestamp: '2024-01-28 10:35' },
  ]},
  { id: '2', userName: 'Ana Costa', userEmail: 'ana@email.com', subject: 'Dúvida sobre planos', status: 'open', lastMessage: 'Qual a diferença entre Premium e Institucional?', createdAt: '2024-01-27', messages: [
    { id: '1', sender: 'user', content: 'Qual a diferença entre Premium e Institucional?', timestamp: '2024-01-27 15:00' },
  ]},
  { id: '3', userName: 'Carlos Mendes', userEmail: 'carlos@email.com', subject: 'Erro no app', status: 'closed', lastMessage: 'Problema resolvido, obrigado!', createdAt: '2024-01-25', messages: [
    { id: '1', sender: 'user', content: 'O app está travando na tela de simulações', timestamp: '2024-01-25 09:00' },
    { id: '2', sender: 'support', content: 'Pode tentar limpar o cache do app?', timestamp: '2024-01-25 09:15' },
    { id: '3', sender: 'user', content: 'Problema resolvido, obrigado!', timestamp: '2024-01-25 09:30' },
  ]},
]

export const mockFaqs = [
  { id: '1', question: 'Como faço para cancelar minha assinatura?', answer: 'Você pode cancelar a assinatura a qualquer momento nas configurações do app, na seção "Minha Assinatura".', order: 1 },
  { id: '2', question: 'O conteúdo é atualizado com frequência?', answer: 'Sim! Nossa equipe médica atualiza os algoritmos e protocolos constantemente, seguindo as diretrizes mais recentes.', order: 2 },
  { id: '3', question: 'Posso usar offline?', answer: 'Sim, você pode baixar os algoritmos para acesso offline no plano Premium.', order: 3 },
]

export const mockTerms = `
# Termos de Uso

Última atualização: 28 de janeiro de 2024

## 1. Aceitação dos Termos

Ao utilizar o MedNotes, você concorda com estes termos de uso.

## 2. Uso do Serviço

O MedNotes é uma plataforma educacional para profissionais de saúde. O conteúdo não substitui a avaliação clínica profissional.

## 3. Conta do Usuário

Você é responsável por manter a confidencialidade de sua conta e senha.

## 4. Propriedade Intelectual

Todo o conteúdo do MedNotes é protegido por direitos autorais.

## 5. Limitação de Responsabilidade

O MedNotes não se responsabiliza por decisões clínicas tomadas com base no conteúdo da plataforma.
`

export const mockPrivacy = `
# Política de Privacidade

Última atualização: 28 de janeiro de 2024

## 1. Coleta de Dados

Coletamos dados necessários para o funcionamento do serviço, incluindo nome, email e dados de uso.

## 2. Uso dos Dados

Utilizamos seus dados para personalizar a experiência, melhorar o serviço e enviar comunicações relevantes.

## 3. Compartilhamento

Não vendemos seus dados pessoais a terceiros.

## 4. Segurança

Implementamos medidas de segurança para proteger seus dados.

## 5. Seus Direitos

Você pode solicitar acesso, correção ou exclusão de seus dados a qualquer momento.
`

export const mockNews = [
  { id: '1', title: 'Nova atualização do Modo Plantão', content: 'Lançamos melhorias no Modo Plantão com decisões ainda mais rápidas.', published: true, publishedAt: '2024-01-28' },
  { id: '2', title: 'Parceria com hospitais universitários', content: 'MedNotes fecha parceria com principais hospitais universitários do país.', published: true, publishedAt: '2024-01-25' },
  { id: '3', title: 'Novo módulo de Pediatria', content: 'Conteúdo completo de Pediatria agora disponível.', published: false, publishedAt: null },
]

export const mockAuditLogs = [
  { id: '1', action: 'Usuário bloqueado', admin: 'Admin Sistema', userId: '3', details: 'Motivo: violação de termos', timestamp: '2024-01-28 14:30' },
  { id: '2', action: 'Algoritmo publicado', admin: 'Dr. João', userId: null, details: 'Algoritmo: Insuficiência Cardíaca Aguda', timestamp: '2024-01-28 10:15' },
  { id: '3', action: 'Plano alterado', admin: 'Admin Sistema', userId: '4', details: 'De Free para Premium', timestamp: '2024-01-27 16:45' },
  { id: '4', action: 'Notificação enviada', admin: 'Marketing', userId: null, details: 'Para: todos os usuários', timestamp: '2024-01-27 09:00' },
  { id: '5', action: 'Produto criado', admin: 'Admin Sistema', userId: null, details: 'Estetoscópio Littmann', timestamp: '2024-01-26 11:20' },
]

export const mockFeatureFlags = {
  marketplace: true,
  chat: true,
  realTimeHealth: true,
  ecoMode: true,
}

export const mockDashboardMetrics = {
  activeUsers: 12458,
  activeUsersChange: 12.5,
  simulationsCompleted: 45892,
  simulationsChange: 8.3,
  notificationsSent: 156,
  notificationsChange: -2.1,
  openConversations: 23,
  conversationsChange: 15.0,
}

export const mockPillars = [
  {
    title: 'Casos Clínicos',
    description: 'Aprenda com casos reais e teste seus conhecimentos em cenários clínicos simulados.',
    icon: 'book'
  },
  {
    title: 'Modo Plantão',
    description: 'Decisões rápidas baseadas em evidências para o dia a dia na emergência.',
    icon: 'zap'
  },
  {
    title: 'Marketplace MedNotes',
    description: 'Encontre equipamentos, cursos e recursos selecionados para sua carreira.',
    icon: 'shopping-bag'
  },
  {
    title: 'Saúde em Tempo Real',
    description: 'Dados epidemiológicos atualizados para decisões informadas.',
    icon: 'activity'
  },
]

export const mockTestimonials = [
  {
    name: 'Dr. Rafael Martins',
    role: 'Médico Emergencista',
    content: 'O MedNotes revolucionou minha prática no PS. Tenho acesso rápido a protocolos atualizados sempre que preciso.',
    avatar: ''
  },
  {
    name: 'Dra. Camila Souza',
    role: 'Residente de Clínica Médica',
    content: 'As simulações são incríveis! Me ajudaram muito na preparação para os plantões.',
    avatar: ''
  },
  {
    name: 'Dr. Bruno Almeida',
    role: 'Cardiologista',
    content: 'Recomendo para todos os colegas. O conteúdo é de alta qualidade e sempre atualizado.',
    avatar: ''
  },
]

export const mockSteps = [
  { number: 1, title: 'Baixe o App', description: 'Disponível para iOS e Android gratuitamente.' },
  { number: 2, title: 'Crie sua Conta', description: 'Cadastre-se em segundos com seu email.' },
  { number: 3, title: 'Explore o Conteúdo', description: 'Acesse algoritmos, simulações e muito mais.' },
  { number: 4, title: 'Evolua na Carreira', description: 'Acompanhe seu progresso e conquiste rankings.' },
]

const questions = [
    {
        question: "Qual é a missão da Okta?",
        options: ["Proteger redes", "Conectar pessoas e tecnologias de forma segura", "Vender licenças de software", "Substituir antivírus"],
        correct: 1
    },
    {
        question: "O que significa IAM?",
        options: ["Identity and Access Management", "Internal App Management", "Intelligent Account Module", "Identity Automatic Mode"],
        correct: 0
    },
    {
        question: "Qual é a principal função do IGA?",
        options: ["Criar logins sociais", "Gerenciar auditoria e compliance de acessos", "Aumentar performance de apps", "Substituir antivírus"],
        correct: 1
    },
    {
        question: "O que é CIAM?",
        options: ["Gestão de identidade de clientes", "Login único corporativo", "Proteção de servidores", "Automação de redes"],
        correct: 0
    },
    {
        question: "Qual recurso NÃO pertence ao IAM?",
        options: ["SSO", "MFA", "Provisionamento", "Backup de servidores"],
        correct: 3
    },
    {
        question: "Quem é um dos principais concorrentes da Okta?",
        options: ["Google Maps", "Ping Identity", "Spotify", "Netflix"],
        correct: 1
    },
    {
        question: "Qual é a disponibilidade da plataforma Okta?",
        options: ["95%", "97,5%", "99,99%", "100%"],
        correct: 2
    },
    {
        question: "Em qual ano a Okta foi fundada?",
        options: ["2000", "2005", "2009", "2012"],
        correct: 2
    },
    {
        question: "Qual solução Okta apoia a governança de identidades?",
        options: ["Okta Verify", "Okta PAM", "Okta Identity Governance", "Okta Advanced Server Access"],
        correct: 2
    },
    {
        question: "O que significa MFA?",
        options: ["Multi-Factor Authentication", "Manual Federation Access", "Multi-Files Authentication", "Main Frame Authorization"],
        correct: 0
    },
    {
        question: "Qual produto da Okta permite o login único (SSO) para múltiplas aplicações?",
        options: ["Okta Identity Governance", "Okta Workforce Identity Cloud", "Okta Verify", "Okta FastPass"],
        correct: 1
    },
    {
        question: "Qual é o principal benefício do Okta FastPass?",
        options: ["Login sem senha", "Gerenciar governança", "Provisionamento automático", "Bloquear acessos externos"],
        correct: 0
    },
    {
        question: "Qual produto da Okta ajuda clientes a gerenciar identidades de consumidores finais?",
        options: ["Okta Workforce Identity", "Okta Advanced Server Access", "Okta Customer Identity Cloud", "Okta FastPass"],
        correct: 2
    },
    {
        question: "Qual das opções abaixo NÃO é um recurso da Okta?",
        options: ["SSO", "Provisionamento Automático", "Governança de Identidade", "Firewall de Rede"],
        correct: 3
    },
    {
        question: "Qual é a vantagem do Okta Identity Governance para grandes empresas?",
        options: ["Melhorar a conectividade da rede", "Gerenciar e auditar acessos de forma centralizada", "Substituir antivírus", "Criar backups automáticos"],
        correct: 1
    },
    {
        question: "Qual dos concorrentes abaixo foca mais em PAM (Privileged Access Management)?",
        options: ["CyberArk", "Auth0", "Okta Verify", "Ping Identity"],
        correct: 0
    },
    {
        question: "O que diferencia a Okta no mercado de identidade?",
        options: ["Integrações amplas e independência de fornecedores", "Venda exclusiva de antivírus", "Foco apenas em pequenas empresas", "Oferecer apenas login social"],
        correct: 0
    },
    {
        question: "Qual solução da Okta protege APIs e microsserviços?",
        options: ["Okta API Access Management", "Okta Identity Governance", "Okta Verify", "Okta PAM"],
        correct: 0
    },
    {
        question: "Qual é o objetivo principal do Okta Adaptive MFA?",
        options: ["Gerenciar grupos de usuários", "Aplicar autenticação baseada em risco e contexto", "Proteger APIs", "Criar fluxos automatizados"],
        correct: 1
    },
    {
        question: "Qual benefício o Okta FastPass oferece aos usuários finais?",
        options: ["Autenticação passwordless", "Provisionamento de grupos", "Gestão de logs", "Bloqueio de tráfego malicioso"],
        correct: 0
    },
    {
        question: "O que o Okta Device Access protege?",
        options: ["Acesso físico aos escritórios", "Acesso a dispositivos corporativos e pessoais", "Configuração de firewalls", "Gerenciamento de senhas"],
        correct: 1
    },
    {
        question: "Qual funcionalidade ajuda parceiros a acessar aplicações internas de forma segura?",
        options: ["Okta Secure Partner Access", "Okta PAM", "Okta Universal Directory", "Okta Verify"],
        correct: 0
    },
    {
        question: "Para proteger aplicações legadas on-premises, qual recurso da Okta é recomendado?",
        options: ["Okta Access Gateway", "Okta Verify", "Okta FastPass", "Okta Workflows"],
        correct: 0
    },
    {
        question: "Qual produto da Okta ajuda a detectar ameaças de identidade em tempo real?",
        options: ["Okta Identity Threat Protection", "Okta Lifecycle Management", "Okta Verify", "Okta FastPass"],
        correct: 0
    },
    {
        question: "O que o Okta Identity Security Posture Management (ISPM) faz?",
        options: ["Gerencia patches de servidores", "Analisa riscos e postura de segurança das identidades", "Provisiona credenciais locais", "Cria fluxos automatizados"],
        correct: 1
    },
    {
        question: "Qual recurso da Okta centraliza e organiza todos os atributos de identidades em um único repositório?",
        options: ["Okta Lifecycle Management", "Okta Universal Directory", "Okta PAM", "Okta Access Gateway"],
        correct: 1
    },
    {
        question: "Qual solução automatiza o provisionamento e desprovisionamento de usuários?",
        options: ["Okta Workflows", "Okta Universal Directory", "Okta Lifecycle Management", "Okta Verify"],
        correct: 2
    },
    {
        question: "Qual produto da Okta permite revisar e certificar acessos de forma contínua para compliance?",
        options: ["Okta Verify", "Okta PAM", "Okta Identity Governance", "Okta API Access Management"],
        correct: 2
    },
    {
        question: "Qual recurso fornece acesso seguro a contas privilegiadas?",
        options: ["Okta PAM (Privileged Access Management)", "Okta FastPass", "Okta Workflows", "Adaptive MFA"],
        correct: 0
    },
    {
        question: "Para criar automações sem código para fluxos de identidade, qual recurso deve ser usado?",
        options: ["Okta Access Gateway", "Okta Workflows", "Okta Verify", "Okta FastPass"],
        correct: 1
    },
    {
        question: "Qual combinação de produtos melhora a postura geral de segurança de identidades?",
        options: ["Universal Directory + SSO + Adaptive MFA + Threat Protection", "FastPass + Verify + Access Gateway", "Okta Verify + Okta Workflows", "Okta PAM + Okta API Management"],
        correct: 0
    }
];

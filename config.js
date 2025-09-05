// Configurações do Portfólio - Eduardo
// Este arquivo centraliza todas as configurações personalizáveis

const portfolioConfig = {
    // Informações Pessoais
    personal: {
        name: "Eduardo",
        age: 16,
        experience: "5 anos",
        role: "Software Developer",
        location: "São Paulo, Brasil",
        email: "eduardo.dev@email.com",
        phone: "+55 (11) 99999-9999",
        bio: `Meu nome é Eduardo, tenho 16 anos e sou um Software Developer com 5 anos de experiência 
              em programação. Comecei minha jornada no desenvolvimento aos 11 anos e desde então 
              tenho me dedicado a aprender e dominar diferentes tecnologias.`
    },

    // Links Sociais
    social: {
        github: "https://github.com/eduardo",
        linkedin: "https://linkedin.com/in/eduardo",
        twitter: "https://twitter.com/eduardo",
        instagram: "https://instagram.com/eduardo"
    },

    // Skills por Categoria
    skills: {
        frontend: [
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "JavaScript", level: 88 },
            { name: "React", level: 85 }
        ],
        backend: [
            { name: "Python", level: 92 },
            { name: "Node.js", level: 80 },
            { name: "SQL", level: 85 },
            { name: "APIs RESTful", level: 87 }
        ],
        tools: [
            { name: "Git/GitHub", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "Docker", level: 75 },
            { name: "Linux", level: 80 }
        ]
    },

    // Projetos
    projects: [
        {
            title: "E-commerce Platform",
            description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
            technologies: ["React", "Node.js", "MongoDB"],
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Task Management App",
            description: "Aplicativo de gerenciamento de tarefas com drag & drop, categorias e notificações.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
            technologies: ["Vue.js", "Express", "Socket.io"],
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Analytics Dashboard",
            description: "Dashboard interativo para visualização de dados com gráficos e métricas em tempo real.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
            technologies: ["Python", "Django", "Chart.js"],
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Mobile Fitness App",
            description: "Aplicativo móvel para acompanhamento de exercícios com integração a wearables.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
            technologies: ["React Native", "Firebase", "API REST"],
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Real-time Chat",
            description: "Aplicação de chat em tempo real com salas, emojis e compartilhamento de arquivos.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
            technologies: ["Socket.io", "Node.js", "JavaScript"],
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            title: "AI Assistant Bot",
            description: "Bot inteligente com processamento de linguagem natural e integração com APIs.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
            technologies: ["Python", "TensorFlow", "NLP"],
            demoUrl: "#",
            githubUrl: "#"
        }
    ],

    // Configurações de Tema
    theme: {
        colors: {
            primary: "#00d4ff",
            secondary: "#ff6b6b",
            accent: "#ffd93d",
            background: "#0a0a0a",
            surface: "#1a1a1a",
            card: "#2a2a2a"
        },
        fonts: {
            primary: "'Inter', sans-serif",
            code: "'Fira Code', monospace"
        }
    },

    // Configurações de Animação
    animations: {
        typingSpeed: 50,
        fadeInDuration: 600,
        staggerDelay: 200,
        particleCount: 50
    },

    // Mensagens do Sistema
    messages: {
        loading: "Carregando portfólio...",
        contactSuccess: "Mensagem enviada com sucesso!",
        contactError: "Erro ao enviar mensagem. Tente novamente."
    }
};

// Exportar configurações (se usando modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}

// Disponibilizar globalmente
window.portfolioConfig = portfolioConfig;
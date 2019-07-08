const site = {

    title: 'DevOps Conference',
    logo: '/static/img/logos/e.png',
    dateEventDetail: '17 de Agosto!',
    dateEventStart: '08/17/2019 08:00:00',
    dateEventFinish: '08/17/2019 18:30:00',
    dateRegistrationStart: '06/17/2019',
    dateRegistrationFinish: '08/17/2019',
    menu: {
        logos: {
            initial: '/static/img/logos/e.png',
            scrolling: '/static/img/logos/e.png',
        }
    },
    about: {
        title: 'Sobre o DevOps Conference',
    },
    hashTag: 'devopscf',
    footer: {
        socialsNetwork: [
            { name: 'github', icon: '/static/img/icons/github_white.png', url: 'https://github.com/devops-conference' },
        ],
        copyrigth: '© Todos os direitos reservados, 2019.',
    },
    programacao: [
        {
            horario: '09:00 até 09:50',
            nome: 'A Cultura DevOps e sua importância - Kevin Medeiros'
        },
        {
            horario: '09:50 até 10:40',
            nome: 'IaaC Infraestructure as a Code - Luiz Thiago'
        },
        {
            horario: '10:40 até 11:30',
            nome: 'Kubernetes e Istio para acelerar suas entregas'
        },
        {
            horario: '11:30 até 12:20',
            nome: 'Trilha para Implementação de Tecnologia Cloud Native - Osmar Leão'
        },
        {
            horario: '12:20 até 13:30',
            nome: 'Pausa para Almoço'
        },{
            horario: '13:30 até 14:20',
            nome: 'Apache Kafka: não é Netflix, mas também tem streaming - Ramon Pereira'
        },{
            horario: '14:20 até 15:30',
            nome: 'Integração e Entrega Contínua com Jenkins, Git, Docker e Terraform - Aécio'
        },{
            horario: '15:30 até 16:00',
            nome: 'Networking'
        },{
            horario: '17:00 até 18:00',
            nome: 'Mesa Redonda'
        }
    ],
    palestrantes: [
        {
            img: '/static/img/kevin-medeiros.png',
            name: 'Kevin Medeiros',
            profession: 'DevOps Engineer na Anchor'
        },
        {
            img: '/static/img/luiz-thiago.png',
            name: 'Luiz Thiago',
            profession: 'DevOps Engineer na Reliant Solutions'
        },
        {
            img: '/static/img/ramon-souza.png',
            name: 'Ramon Souza',
            profession: 'Especialista de TI na Conductor'
        },
        {
            img: '/static/img/aecio-pires.png',
            name: 'Aecio Pires',
            profession: 'Analista de Suporte na Unirede'
        },
        {
            img: '/static/img/gregorio-melo.png',
            name: 'Gregório Melo',
            profession: 'Desenvolvedor na ThoughWorks'
        },
        {
            img: '/static/img/osmar-leao.png',
            name: 'Osmar Leão',
            profession: 'Consultor de produtos da Oracle Brasil'
        },
    ],
    patrocinadores: [
        {
            img: '/static/img/logo1.png',
            name: 'Tribunal de Contas do Estado da Paraíba',
        },
        {
            img: '/static/img/logo2.png',
            name: 'VAT60 - O podcast de tecnologia que nunca fica obsoleto!',
        },
        {
            img: '/static/img/conductor.png',
            name: 'Conductor Tecnologia',
        },
        {
            img: '/static/img/logovsoft.png',
            name: 'VSOFT Tecnologia',
        },
        {
            img: '/static/img/iesp.png',
            name: 'IESP Faculdades',
        },
    ],
    organizadores: [
        {
            img: '/static/img/magno.png',
            name: 'Magno Oliveira',
            profession: 'DevOps Engineer na Conductor Tecnologia',
        },
        {
            img: '/static/img/roberto.png',
            name: 'Roberto Carneiro',
            profession: 'Gerente de Infraestrutura na Conductor Tecnologia',
        },
        {
            img: '/static/img/rodrigo.png',
            name: 'Rodrigo Lira',
            profession: 'Analista de Sistemas Senior na PBSoft/TCE'
        },
        {
            img: '/static/img/jesse.png',
            name: 'Jessé Neto',
            profession: 'Analista de suporte de redes Senior na Indra'
        },
    ],
    apoiadores: [
        {
            img: '/static/img/alura.png',
            name: 'Alura Cursos online de tecnologia',
        },
        {
            img: '/static/img/jampasec.png',
            name: 'JampaSec Conferência de Segurança da Informação',
        },
        // {
        //     img: '/static/img/rodrigo.png',
        //     name: 'Rodrigo Lira',
        // },
        // {
        //     img: '/static/img/jesse.png',
        //     name: 'Jessé Neto',
        // },
    ]
}

export default site

export const USER_NOT_FOUND = "user-not-found";
export const USER_ALREADY_REGISTERED = "user-already-registered";

export const category = [
    "Corte",
    "Hotel",
    "Maquiagem",
    "Pintura",
    "Medicina",
    "Pet-Shop",
    "Outros",
];

export const weekDays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
];

export const dummyStores = [
    {
        image: "/cabeleleila_leila.png",
        name: "Cabeleleila Leila",
        category: ["Corte", "Pintura", "Maquiagem"],
        description:
            "Venha se renovar conosco! Valores competitivos e resultados indiscutíveis!",
        workDays: [
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado",
        ],
        startTime: "08:00",
        endTime: "17:00",
        street: 'Rua da Imprensa',
        homeNumber: '137',
        neighborhood: 'Monte Castelo',
        state: 'MG',
        city: "Belo Horizonte",
    },
    {
        image: "/cabeleleila_leila.png",
        name: "Cabeleleila Leila",
        category: ["Corte", "Pintura", "Maquiagem"],
        description:
            "Venha se renovar conosco! Valores competitivos e resultados indiscutíveis!",
        workDays: [
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado",
        ],
        startTime: "08:00",
        endTime: "17:00",
        street: 'Rua da Imprensa',
        homeNumber: '137',
        neighborhood: 'Monte Castelo',
        state: 'MG',
        city: "Belo Horizonte",
    },
    {
        image: "/cabeleleila_leila.png",
        name: "Cabeleleila Leila",
        category: ["Corte", "Pintura", "Maquiagem"],
        description:
            "Venha se renovar conosco! Valores competitivos e resultados indiscutíveis!",
        workDays: [
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado",
        ],
        startTime: "08:00",
        endTime: "17:00",
        street: 'Rua da Imprensa',
        homeNumber: '137',
        neighborhood: 'Monte Castelo',
        state: 'MG',
        city: "Belo Horizonte",
    },
    {
        image: "/cabeleleila_leila.png",
        name: "Cabeleleila Leila",
        category: ["Corte", "Pintura", "Maquiagem"],
        description:
            "Venha se renovar conosco! Valores competitivos e resultados indiscutíveis!",
        workDays: [
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado",
        ],
        startTime: "08:00",
        endTime: "17:00",
        street: 'Rua da Imprensa',
        homeNumber: '137',
        neighborhood: 'Monte Castelo',
        state: 'MG',
        city: "Belo Horizonte",
    },
    {
        image: "/cabeleleila_leila.png",
        name: "Cabeleleila Leila",
        category: ["Corte", "Pintura", "Maquiagem"],
        description:
            "Venha se renovar conosco! Valores competitivos e resultados indiscutíveis!",
        workDays: [
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado",
        ],
        startTime: "08:00",
        endTime: "17:00",
        street: 'Rua da Imprensa',
        homeNumber: '137',
        neighborhood: 'Monte Castelo',
        state: 'MG',
        city: "Belo Horizonte",
    },
    {
        image: "/cabeleleila_leila.png",
        name: "Cabeleleila Leila",
        category: ["Corte", "Pintura", "Maquiagem"],
        description:
            "Venha se renovar conosco! Valores competitivos e resultados indiscutíveis!",
        workDays: [
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado",
        ],
        startTime: "08:00",
        endTime: "17:00",
        street: 'Rua da Imprensa',
        homeNumber: '137',
        neighborhood: 'Monte Castelo',
        state: 'MG',
        city: "Belo Horizonte",
    },
];

export const dummyServices = [
    {
        name: 'Corte Básico (M)',
        cost: 30,
        duration: 30,
        description: 'Corte básico masculino'
    },
    {
        name: 'Corte Básico (M)',
        cost: 30,
        duration: 30,
        description: 'Corte básico masculino'
    },
    {
        name: 'Corte Básico (M)',
        cost: 30,
        duration: 30,
        description: 'Corte básico masculino'
    },
    {
        name: 'Corte Básico (M)',
        cost: 30,
        duration: 30,
        description: 'Corte básico masculino'
    },
    {
        name: 'Corte Básico (M)',
        cost: 30,
        duration: 30,
        description: 'Corte básico masculino'
    },
];

export const dummySchedules = dummyServices.map(service => ({
    ...service,
    date: '19/10/2023',
    time: '08:00'
})) 

export const dummyDates = [
    "19/10/2023",
    "19/10/2023",
    "19/10/2023",
    "19/10/2023",
];

export const dummyTimes = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
]
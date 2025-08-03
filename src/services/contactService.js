const contacts = [
    {
        id: 1,
        name: 'Rihanna',
        description: 'Diamons',
        img: '.././public/images/rihanna-contact.webp',
        lastConnection: '23:12 p. m.',
        lastMessage: 'Chau Cariño',
        connectionStatus: 'en línea',
        messages: [
            {
                emisor: 'YO',
                hora: '23:05',
                id: 1,
                texto: 'Hola Rihanna, ¿Cómo estás?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:06',
                id: 2,
                texto: 'Hola cariño! Muy bien, ¿y tú?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:08',
                id: 3,
                texto: 'Bien por suerte. ¿Qué haces?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:10',
                id: 4,
                texto: 'Ay, grabando todo el dia! Se vienen nuevas canciones!',
                status: 'visto'
            },            
            {
                emisor: 'YO',
                hora: '23:11',
                id: 5,
                texto: 'Qué emoción! Te dejo. Chau Rihanna!',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:12',
                id: 6,
                texto: 'Chau cariño',
                status: 'visto'
            }
        ]
    },
    {
        id: 2,
        name: 'Britney Spears',
        description: 'Upss, I did it again',
        img: '.././public/images/britney-contact.webp',
        lastConnection: '23:12 p. m.',
        lastMessage: 'Chau mi amor!',
        connectionStatus: 'en línea',
        unviewedMessages: 1,
        isPremium: true,
        messages: [
            {
                emisor: 'YO',
                hora: '23:05',
                id: 1,
                texto: 'Hola Britney, ¿Cómo estás?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:06',
                id: 2,
                texto: 'Hola, muy bien ¿vos?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:08',
                id: 3,
                texto: 'Bien por suerte. ¿Qué haces?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:10',
                id: 4,
                texto: 'Ay, bailando todo el dia!',
                status: 'visto'
            },            
            {
                emisor: 'YO',
                hora: '23:11',
                id: 5,
                texto: 'Bueno, te dejo. Un beso enorme Britney!',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:12',
                id: 6,
                texto: 'Chau mi amor!',
                status: 'visto'
            }
        ]
    },
        {
        id: 3,
        name: 'Lionel Messi',
        description: 'Argentina Capeón',
        img: '/images/messi-img.jpeg',
        lastConnection: '23:13 p. m.',
        lastMessage: 'Gracias! Abrazo grande.',
        connectionStatus: 'Ultima vez 23:13 p. m.',
        messages: [
                {
                emisor: 'YO',
                hora: '23:05',
                id: 1,
                texto: 'Hola Leo, ¿Cómo estás?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:06',
                id: 2,
                texto: 'Hola, todo bien, ¿y vos?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:08',
                id: 3,
                texto: 'Bien por suerte. ¿Qué haces?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:10',
                id: 4,
                texto: 'Muy bien, me estoy preparando para la copa mundial',
                status: 'visto'
            },            
            {
                emisor: 'YO',
                hora: '23:11',
                id: 5,
                texto: 'Seguro la vas a romper. Chau capitán!',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:12',
                id: 6,
                texto: 'Gracias! Abrazo grande.',
                status: 'visto'
            }
        ]
    },
    {
        id: 4,
        name: 'Moria Casán',
        description: 'Quienes Son?',
        img: '.././public/images/moria-contact.jpeg',
        lastConnection: '23:14 p. m.',
        lastMessage: 'Chau mi amor!',
        connectionStatus: 'Ultima vez 23:14 p. m.',
        messages: [
            {
                emisor: 'YO',
                hora: '23:05',
                id: 1,
                texto: 'Hola Moria, ¿Cómo estás?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:06',
                id: 2,
                texto: 'Hola mi amor! Siempre espléndida, ¿vos?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:08',
                id: 3,
                texto: 'Bien por suerte. ¿Qué haces?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:10',
                id: 4,
                texto: 'Ay, grabando todo el dia!',
                status: 'visto'
            },            
            {
                emisor: 'YO',
                hora: '23:11',
                id: 5,
                texto: 'Bueno, te dejo. Chau Moria!',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:12',
                id: 6,
                texto: 'Chau mi amor!',
                status: 'visto'
            }
        ]
    },
    {
        id: 5,
        name: 'Susana Gimenéz',
        description: 'Ocupada',
        img: '/images/susana-img.jpeg',
        lastConnection: '23:12 p. m.',
        lastMessage: 'Chau!',
        connectionStatus: 'en línea',
        messages: [
            {
                emisor: 'YO',
                hora: '23:05',
                id: 1,
                texto: 'Hola Susana, ¿Cómo estás?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:06',
                id: 2,
                texto: 'Hola mi amor! Muy bien, ¿vos?',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:08',
                id: 3,
                texto: 'Bien por suerte. ¿Qué haces?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:10',
                id: 4,
                texto: 'Tomando un cafecito!',
                status: 'visto'
            },            
            {
                emisor: 'YO',
                hora: '23:11',
                id: 5,
                texto: 'Bueno, te dejo. Chau Susana!',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:12',
                id: 6,
                texto: 'Chau!',
                status: 'visto'
            }
        ]
    }
];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}


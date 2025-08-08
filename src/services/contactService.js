
const contacts = [
        {
        id: 1,
        name: 'Messi',
        description: 'Argentina Capeón',
        img: '.././src/images/messi-img.jpeg',
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
        id: 2,
        name: 'Moria',
        description: 'Quienes Son?',
        img: '.././src/images/moria-contact.jpeg',
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
        id: 3,
        name: 'La Su ',
        description: 'Ocupada',
        img: '.././src/images/susana-img.jpeg',
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


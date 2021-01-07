const model = {

    drawnPage: '',

    inputs: {
        question: '',
        alternatives: [],
        deadline: '',
        inputUsername: 'Lars',
        inputPassword: '123',
    },

    app: {
        currentPage: 'logIn',
        currentUser: ''
    },

    users: [
        {
            username: 'Lars',
            password: '123',
        },
        {
            username: 'Admin',
            password: '123',
        },
    ],

    polls: [
        {
            pollId: 0,
            question: 'Hva er meningen med livet?',
            alternatives: [
                {
                    answer: '42',
                    votes: 4,
                },
                {
                    answer: 'Sex',
                    votes: 0,
                }
            ],
            deadline: '08.01.2021',
        },
        {
            pollId: 1,
            question: 'Stav 2',
            alternatives: [
                {
                    answer: 'To',
                    votes: 3,
                },
                {
                    answer: 'Tre',
                    votes: 1,
                }
            ],
            deadline: '09.01.2021',
        }
    ],



}
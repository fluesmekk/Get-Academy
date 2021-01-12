const model = {


    numbers: 1,
    drawnPage: '',
    alternatives: '',

    inputs: {
        inputCount: 1,
        question: '',
        tempAlternatives: [],
        alternatives: [
            '',
        ],
        deadline: '',
        inputUsername: '',
        inputPassword: '',
    },

    app: {
        currentPage: 'log in',
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
            open: true,
            userHasVoted: 
            [
                'Per',
            ],
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
            deadline: '08-01-2021',
        },
        {
            pollId: 1,
            question: 'Stav 2',
            open: false,
            userHasVoted: 
            [
                'Per',
            ],
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
            deadline: '09-01-2021',
        },
        {
            pollId: 2,
            question: 'Stav 2',
            open: true,
            userHasVoted: 
            [
                'Per',
            ],
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
            deadline: '09-02-2021',
        }
    ],



}
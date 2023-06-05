type projects = {
    name: string,
    description: string,
    tecnologies: Array<string>,
    repository: string,
}

const listOfProjects: projects[] = [
    {
        name: 'Pong Game',
        description: 'Pong game is based on pong developed by Atari in 1972. But different from original, I decided that both players (or just you), will work together to reach level 10, while the game speed increases constantly each level.',
        tecnologies: [
        'Python',
        'Pygame',
        ],
        repository: 'https://github.com/RicardoSouza03/Pong-Game',
    },
    {
        name: 'carShop',
        description: 'This is one of the projects that I developed in Trybe. In this project I created an API to manage a car concessionaire.',
        tecnologies: [
        'Typescript',
        'MongoDB',
        'Mongoose',
        'Express',
        'Chai',
        'Sinon',
        'Mocha',
        ],
        repository: 'https://github.com/RicardoSouza03/carShop',
    },
    {
        name: 'WalletExpenses',
        description: 'This is one of the projects that I developed in Trybe. In this project I created an wallet app to manage my expensses.',
        tecnologies: [
        'Javascript',
        'React',
        'Redux',
        'Jest',
        'Material-IU',
        'HTML',
        'CSS',
        ],
        repository: 'https://github.com/RicardoSouza03/WalletExpenses',
    },
];

export default listOfProjects;
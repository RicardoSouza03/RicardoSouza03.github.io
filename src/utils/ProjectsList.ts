type projects = {
    name: string,
    description: string,
    tecnologies: Array<string>,
    repository: string,
}

const listOfProjects: projects[] = [
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
const contacts = [
    {
        name: 'Email:',
        info: 'rl03souza@gmail.com',
    },
]

export default function Contact() {
    return (
        <footer id="Contato" className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex justify-evenly p-5">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div className="grid-col-span-2">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contato</h2>
                        <ul role="list" className="divide-gray-100">
                        {contacts.map((contact) => (
                            <li key={contact.info} className="">
                                <div className="flex gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-white">{contact.name}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-sm leading-6 text-white">{contact.info}</p>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Me siga no:</h2>
                        <ul className="text-gray-600 dark:text-gray-200 font-medium">
                            <li className="mb-4">
                                <a href="www.linkedin.com/in/ricardolinosouza/" className="hover:underline ">Linkedin</a>
                            </li>
                            <li>
                                <a href="github.com/RicardoSouza03" className="hover:underline">GitHub</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}





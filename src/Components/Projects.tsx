import projectList from '../utils/ProjectsList';

export default function Projects() {
  return (
    <div className="bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Here are some projects I've made during my time studing development.
          </p>
        </div>
        <div className="mx-auto mt-16 p-4 overflow-y-auto overflow-hidden max-h-132 scroll-smooth no-scrollbar max-w-4xl gap-4 grid grid-cols-4 phone:grid-cols-1 2xl:grid-cols-6">
            {projectList.map((project) => (
                <div className="p-8 rounded-2xl ring-indigo-700 ring-1 col-span-2 2xl:col-span-3">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-100">{project.name}</h3>
                    <p className="mt-6 text-base leading-7 text-gray-200">
                        {project.description}
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-400">Used tecnologies</h4>
                        <div className="h-px flex-auto bg-gray-300" />
                    </div>
                    <ul
                    role="list"
                    className="mt-8 grid list-inside grid-cols-3 gap-3 text-sm leading-6 text-gray-200 phone:grid-cols-2 phone:gap-6 sm:grid-cols-2 sm:gap-6"
                    >
                    {project.tecnologies.map((tecnologie) => (
                        <li key={tecnologie} className="list-disc">
                            {tecnologie}
                        </li>
                    ))}
                    </ul>
                    <div className="block pt-6 flex justify-center">
                        <a className="text-gray-200 border p-2 rounded-2xl bg-zinc-900 text-lg" target="_blank" rel="stylesheet" href={project.repository}>Check repo here</a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

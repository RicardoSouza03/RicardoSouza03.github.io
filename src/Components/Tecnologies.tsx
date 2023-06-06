import tecList from '../utils/SkillsList';

export default function Tecnologies() {
    return (
      <div id="Skills" className="bg-white py-8 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-semibold leading-8 text-gray-800">
            Tecnologies learned
          </h2>
          <div className="mx-auto mt-10 grid max-w-3xl border-4 px-6 py-4 grid-cols-6 items-center gap-x-8 gap-y-10 phone:grid-cols-3 sm:max-w-xl sm:gap-x-10">
            {tecList.map((skill: {name: string, src: string}) => (
                <div key={skill.name} className="flex hover:scale-150 transition ease-in delay-150 flex-col items-center">
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={skill.src}
                    alt={skill.name}
                    width={158}
                    height={48}
                    />
                    <span className="font-mono text-gray-800">{skill.name}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
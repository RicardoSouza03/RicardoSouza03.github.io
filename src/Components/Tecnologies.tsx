import tecList from '../utils/SkillsList';

export default function Tecnologies() {
    return (
      <div className="bg-gray-800 py-8 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-semibold leading-8 text-white">
            Tecnologies learned
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-6 items-center gap-x-8 gap-y-10 phone:grid-cols-3 sm:max-w-xl sm:gap-x-10">
            {tecList.map((skill: {name: string, src: string}) => (
                <div className="flex flex-col items-center">
                    <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src={skill.src}
                    alt={skill.name}
                    width={158}
                    height={48}
                    />
                    <span className="font-mono text-white">{skill.name}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
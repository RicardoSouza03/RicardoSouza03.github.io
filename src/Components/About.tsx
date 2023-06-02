export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">About me</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ricardo Souza</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Introducing a Passionate and Determined Software Developer
              </p>
            </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Hello, my name is Ricardo, and I am a passionate and dedicated software developer, with my focus on backend development. Technology has been a part of my life since I was young, sparking my curiosity and guiding me towards a career in programming. Although I don't have formal professional experience yet, my learning mindset and determination have allowed me to gain proficiency in programming languages and related tools.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Some tecnologies</strong> I have knowledge is Node.js, TypeScript, SQL, Python, Docker, etc.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">My focus:</strong> Creating scalable solutions. I thoroughly enjoy solving complex problems, optimizing code for better performance, and creating things I have never done before.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                I am constantly engaged in continuous learning, staying updated on trends and emerging technologies. I am excited to contribute my skills and knowledge to a dynamic team, where I can further develop my abilities and make a significant impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div id="About" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10">
          <div>
            <div>
              <p className="text-base font-semibold leading-7 text-indigo-600">About me</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ricardo Lino de Souza</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Introducing a Passionate and Determined Developer
              </p>
            </div>
        </div>
        <div>
          <div>
            <div className="max-w-xl text-base leading-7 text-gray-700">
              <p>
                Hello, my name is Ricardo, I am a Web Developer, with my focus on backend development. Technology has been a part of my life since I was young, sparking my curiosity and guiding me towards a career in programming. Although I don't have formal professional experience yet, my learning mindset and determination have allowed me to gain proficiency in programming languages and related tools.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Some tecnologies</strong> I have knowledge is Node.js, TypeScript, SQL, Python, Docker, etc.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">My focus:</strong> Creating scalable solutions. I thoroughly enjoy solving complex problems, optimizing code for better performance and creating things I have never done before.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                I am constantly engaged in continuous learning, staying updated on trends and emerging technologies. I am excited and seeking to contribute my skills and knowledge to a dynamic team, where I can further develop my abilities and make a significant impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

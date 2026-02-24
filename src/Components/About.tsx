export default function About() {
  return (
    <div id="About" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6">
          <div>
            <div>
              <p className="text-base font-semibold leading-7 text-indigo-600">About me</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ricardo Lino de Souza</h1>
              <p className="mt-4 text-xl leading-8 text-gray-700">
                Introducing a Passionate and Determined Developer
              </p>
            </div>
        </div>
        <div>
          <div>
            <div className="max-w-xl text-base leading-7 text-gray-700">
              <p>
              I am a Software Developer with nearly 3 years of experience in the tech industry, built entirely within IBM. My journey is defined by a solid foundation in backend development and a growing expertise in cloud-native solutions.

              Currently, I specialize in building scalable systems using Java with Quarkus and/or Spring Batch, complemented by dynamic front-end development with Angular and TypeScript. My daily workflow is deeply integrated with modern DevOps practices, utilizing tools like OpenShift, ArgoCD, GitHub Actions, Jenkins, SonarQube, etc, to ensure high-quality delivery.
              </p>
              <ul role="list" className="mt-8 space-y-6 text-gray-600">
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900 text-xl underline">Core Highlights</strong>
                  </span>
                </li>
                <li >
                  <span>
                    <strong className="font-semibold text-gray-900">Cloud Certified:</strong> AWS Certified Cloud Practitioner (actively pursuing further certifications).
                  </span>
                </li>
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900">Education:</strong> Currently pursuing a B.S. in Computer Science at Estácio.
                  </span>
                </li>
                <li>
                  <span>
                    <strong className="font-semibold text-gray-900">Tech Stack:</strong> Java (Quarkus/Spring), Angular, TypeScript, and CI/CD pipelines.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                I am driven by a continuous learning mindset, always looking to bridge the gap between complex business requirements and efficient with an elegant code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

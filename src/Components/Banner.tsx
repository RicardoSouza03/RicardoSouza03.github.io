import RicardoSouza from '../images/RicardoSouza.png';

export default function Banner() {
  return (
    <div className="bg-gray-800">
        <div className="flex flex-row sm:flex-col phone:flex-col phone:items-center sm:items-center gap-10 content-center mx-auto max-w-3xl py-28">
            <div className="w-2/4 sm:w-2/4">
                <img className="w-full rounded-full" src={RicardoSouza} alt="Ricardo Souza" />
            </div>
          <div className="text-left py-12 px-6">
            <h1 className="text-2xl bg-indigo-600 rounded font-bold tracking-tight w-fit p-1 text-gray-200">
              Back-end Developer
            </h1>
            <p className="mt-6 text-2xl leading-9 text-gray-200">
                What you don't conquer with our own hands, you won't be capable to hold it.
            </p>
          </div>
        </div>
      </div>
  )
}

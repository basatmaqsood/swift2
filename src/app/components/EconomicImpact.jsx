import { Briefcase, Globe } from 'lucide-react'

export default function EconomicImpact() {
  return (
    <section className="bg-[#0F1629] py-12" id="economic-impact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Economic Impact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At Swift, we are committed to driving positive economic impact through job creation and a strong focus on the South African economy.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-[#1A1F35] p-6 text-center">
            <div className="mb-4 mx-auto h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Briefcase className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Job Creation</h3>
            <p className="text-gray-400">
              Supporting local communities by creating employment opportunities and empowering individuals.
            </p>
            <button className="mt-4 px-2 py-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded">
              Learn More
            </button>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6 text-center">
            <div className="mb-4 mx-auto h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Globe className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">South African Economic Focus</h3>
            <p className="text-gray-400">
              Reinforcing South Africa&apos;s economy by prioritizing local investments and partnerships.
            </p>
            <button className="mt-4 px-2 py-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

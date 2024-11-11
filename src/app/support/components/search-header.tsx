import { Search } from 'lucide-react'

export default function SearchHeader() {
  return (
    <div className="bg-gradient-to-b from-[#0F1629] to-black px-4 py-16 text-center">
      <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">
        How can we help you?
      </h1>
      <div className="mx-auto max-w-2xl relative">
        <input
          type="text"
          placeholder="Search for help..."
          className="w-full rounded-full px-6 py-3 pr-12 text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  )
}
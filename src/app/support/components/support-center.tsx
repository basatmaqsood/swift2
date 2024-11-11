'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const categories = [
  'Frequently Asked',
  'Account & App',
  'Rides & Services',
  'Safety & Security',
  'Payments',
]

export default function SupportCenter() {
  const [activeCategory, setActiveCategory] = useState('Frequently Asked')
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-2xl font-bold text-white">Support Center</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors
              ${activeCategory === category
                ? 'bg-yellow-400 text-black'
                : 'bg-[#232838] text-white hover:bg-[#2A303F]'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="rounded-lg bg-[#1A1F35] overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between p-4 text-left text-white hover:bg-[#232838]"
        >
          <span className="font-medium">How do I report a safety incident?</span>
          <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        
        {isExpanded && (
          <div className="p-4 text-gray-300">
            <p className="mb-4">To report a safety incident:</p>
            <ol className="list-decimal space-y-2 pl-4">
              <li>Open your Swift! app</li>
              <li>Go to Trip History</li>
              <li>Select the relevant trip</li>
              <li>Click &quot;Report an Issue&quot;</li>
              <li>Select &quot;Safety Incident&quot;</li>
            </ol>
            <p className="mt-4">
              For immediate assistance, use the emergency button in the app or call our 24/7 safety line: 0800 SWIFT SA
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
import { CalendarDays, DollarSign, Wallet } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Drive and earn when you like',
    description: 'Set your own schedule and drive whenever you want. The more you drive, the more you can earn.'
  },
  {
    icon: CalendarDays,
    title: 'A reliable source of income',
    description: 'Thousands of people request rides daily. That means a steady stream of earning opportunities.'
  },
  {
    icon: Wallet,
    title: 'Weekly payouts',
    description: 'Get your earnings at the end of each week. There is no need to chase payments when you drive with Swift.'
  }
]

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why become a Swift driver?
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Whether you want to drive full-time or earn occasionally, Swift lets you be your own boss.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
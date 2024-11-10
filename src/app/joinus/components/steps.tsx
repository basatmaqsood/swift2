import { ClipboardList, Car, Smartphone } from 'lucide-react'

const steps = [
  {
    icon: Smartphone,
    title: '1. Register online',
    description: 'Tell us which city you would like to drive in and the type of driving you want. We will send you all the details.'
  },
  {
    icon: ClipboardList,
    title: '2. Upload your documents',
    description: 'The documents needed to drive on the Swift platform vary depending on your city.'
  },
  {
    icon: Car,
    title: '3. Start earning',
    description: 'If you do not have access to a car, we can connect you with a fleet partner who can offer you a vehicle.'
  }
]

export function Steps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Get started</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                <step.icon className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
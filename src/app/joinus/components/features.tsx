import { Check } from 'lucide-react'
import Image from 'next/image'
import image from '../images/2.png'

const features = [
  {
    title: 'Accept a ride request',
    description: 'The Swift Driver app automatically finds passengers near you. Just tap to accept.'
  },
  {
    title: 'Pick up your passenger',
    description: 'The app will guide you to the passenger location. Once there, pick them up.'
  },
  {
    title: 'Drive to their destination',
    description: 'Follow the directions to their destination and safely get them to where they need to be.'
  },
  {
    title: 'Repeat to earn more money',
    description: 'Keep driving and earning all day – you are always in charge of how much you earn.'
  }
]

export function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
            src={image}
              alt="Swift Driver app interface"
              className="mx-auto"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">
              How the Swift Driver app works
            </h2>
            <p className="text-gray-600 mb-8">
              Reliable and easy to use, with everything you need to drive and earn when you want.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
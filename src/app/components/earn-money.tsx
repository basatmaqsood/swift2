import { Button } from "@/components/ui/button"
import driver from '../images/driver.png'
import Image from "next/image"

export default function swiftEarnings() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-slate-900 mb-16">
        Earn money with Swift
      </h1>
      
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className=" w-full overflow-hidden rounded-xl">
          <Image
            alt="Professional driver in car"
            className="object-cover"
            src={driver}
          />
        </div>
        
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Drive and earn extra money
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                1
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Drive more, earn more</h3>
                <p className="text-slate-600">
                  Our 200+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                2
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Set your schedule</h3>
                <p className="text-slate-600">
                  Drive for as long and as often as you like. Weekdays; weekends; evenings – fit driving around your lifestyle.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                3
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Get paid each week</h3>
                <p className="text-slate-600">
                  You&apos;ll receive your earnings at the end of each week – no need to wait around for payday.
                </p>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="bg-yellow-400 text-black bold font-bold text-lg hover:bg-yellow-500">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}
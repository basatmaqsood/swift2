import { Button } from "@/components/ui/button"
import Image from "next/image"
import FeatureCar from "../images/feature-car.webp"
import { imageLoader } from "@/lib/imageLoader"

export default function EarnMoney() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Earn money with Bolt</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4">Drive and earn money</h3>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#32BB78] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Drive when you want, earn more
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#32BB78] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Set your own schedule
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-[#32BB78] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Get paid each week
                  </li>
                </ul>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  // loader={imageLoader}
                  src={FeatureCar}
                  // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bolt-eu-en-za-2024-11-09-20_08_53-ffp57gva12GRWMrGMCv4y7K1mLjSav.png"
                  alt="Bolt driver"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
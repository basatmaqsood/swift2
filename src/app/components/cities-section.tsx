import { Button } from "@/components/ui/button"
import Image from "next/image"
import FeatureCities from "../images/feature-cities-for-people.webp"

export default function CitiesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Making cities for people, not cars</h2>
          <p className="text-gray-600 mb-6">
            By offering our technology and data to cities, we're helping to reduce congestion, pollution and the need for parking spaces.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#32BB78] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Sharing travel patterns
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#32BB78] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              One app, many ways to move
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-[#32BB78] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Less is more
            </li>
          </ul>
          <Button className="bg-black text-white hover:bg-gray-800">
            Learn more
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            // loader={imageLoader}
            src={FeatureCities}
            // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bolt-eu-en-za-2024-11-09-20_08_53-ffp57gva12GRWMrGMCv4y7K1mLjSav.png"
            alt="City landscape"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
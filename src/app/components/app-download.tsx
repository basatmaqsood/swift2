import { Button } from "@/components/ui/button"
import Image from "next/image"
import desktop from "../images/desktop.webp"

export default function AppDownload() {
  return (
    <section className="py-8 md:py-16 bg-yellow-400 text-black mx-2 md:mx-auto px-4 rounded-lg mb-4">
      <div className="container mx-auto px-2 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Request in seconds, ride in minutes.
          </h2>
          <p className="mb-6 font-bold">
            Available for iOS and Android devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 font-bold">
              Download for iOS
            </Button>
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 font-bold">
              Download for Android
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block ">
          <Image
            src={desktop}
            alt="Bolt app interface"
            width={300}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
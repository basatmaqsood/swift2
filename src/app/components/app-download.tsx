import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AppDownload() {
  return (
    <section className="py-16 md:py-24 bg-[#32BB78] text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Request in seconds, ride in minutes.
          </h2>
          <p className="mb-6">
            Available for iOS and Android devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Download for iOS
            </Button>
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
              Download for Android
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            // loader={imageLoader}
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bolt-eu-en-za-2024-11-09-20_08_53-ffp57gva12GRWMrGMCv4y7K1mLjSav.png"
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
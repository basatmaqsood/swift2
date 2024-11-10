import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function NewsUpdates() {
  const newsItems = [
    {
      title: "Bolt Balance — a faster, safer, and more convenient way to pay",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bolt-eu-en-za-2024-11-09-20_08_53-ffp57gva12GRWMrGMCv4y7K1mLjSav.png",
      date: "November 9, 2024",
    },
    {
      title: "Take our Women in Mobility quiz and win €4,000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bolt-eu-en-za-2024-11-09-20_08_53-ffp57gva12GRWMrGMCv4y7K1mLjSav.png",
      date: "November 8, 2024",
    },
    {
      title: "A safer for safety: Bolt's new Rider Verification feature",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bolt-eu-en-za-2024-11-09-20_08_53-ffp57gva12GRWMrGMCv4y7K1mLjSav.png",
      date: "November 7, 2024",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">News and updates</h2>
          <Link href="#" className="text-[#32BB78] hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Image
                // loader={imageLoader}
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.date}</p>
                <Button variant="outline" className="w-full">
                  Read more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import Image from "next/image";
import image from '../images/1.png'
export default function Component() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <Image
        src={image}
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[600px] flex-col justify-center py-20">
          <div className="max-w-xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Make money driving with Swift
            </h1>
            <p className="mt-4 text-xl text-white/90">
            Be part of Africa&apos;s most secure e-hailing ecosystem.

</p>
          </div>
        </div>
      </div>
    </section>
  )
}
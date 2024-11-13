import Image from 'next/image'
import Link from 'next/link'
import image from '../images/2.png'
import googlePlay from "../images/googleplay.png"
import appstore from '../images/appstore.jpg'

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Layout effect overlay */}
      <div className="container relative mx-auto grid gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6 text-white z-10">
          <h1 className="text-5xl font-bold leading-tight">
            Proudly <span className="text-green-400">South</span>
            <br />
            <span className="text-yellow-300">African</span>
            <br />
            Ride-Sharing
            <br />
            Platform
          </h1>
          <p className="text-lg text-gray-200">
            Experience safer, smarter transportation with South Africa&apos;s most innovative e-hailing service.
          </p>
          <div className="flex space-x-4">
            <Link href="#">
              <Image
                src={appstore}
                alt="Download on the App Store"
                width={135}
                height={40}
                className="h-10"
              />
            </Link>
            <Link href="#">
              <Image
                src={googlePlay}
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import image from '../images/2.png'
import googlePlay from "../images/googleplay.png"
import appstore from '../images/appstore.jpg'

export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Proudly <span className="text-green-600">South</span>
            <br />
            <span className="text-yellow-500">African</span>
            <br />
            Ride-Sharing
            <br />
            Platform
          </h1>
          <p className="text-lg text-gray-600">
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
        <div className="relative">
          <Image
              src={image}
              alt="Swift App Preview"
            width={500}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
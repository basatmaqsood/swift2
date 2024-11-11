import Image from "next/image";
import Link from "next/link";
import image from "../images/1.png";
import googlePlay from "../images/googleplay.png";
import appstore from "../images/appstore.jpg";

export default function AppDownload() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Experience Swift! on Your Phone
            </h2>
            <p className="text-gray-400 mb-8">
              Download our app and enjoy seamless rides with enhanced safety
              features.
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
              alt="App Preview"
              width={400}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

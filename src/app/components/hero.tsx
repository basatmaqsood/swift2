

export default function Hero() {
  return (
    <section className="bg-[#F3F3F3] py-16 md:py-24 gradient-dark md:py-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Join the Future of <span className="text-yellow-400">Mobility</span>
          </h1>
          <p className="text-xl text-white mb-6 ">
            Experience our comprehensive ecosystem designed for driver success.
            Premium support, better earnings, and exclusive benefits.
          </p>
          {/* <Link href="#" className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg rounded-full">
            Start Driving
          </Link> */}
          <div className="flex space-x-4 justify-start items-center">
            <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-200 ease-in-out">
              Start Driving
            </button>
            <button className="border-2 border-yellow-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-200 ease-in-out">
              Learn More
            </button>
          </div>
        </div>
        {/* <div className="md:w-1/2">
          <Image
            // loader={imageLoader}
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bolt-eu-en-za-2024-11-09-20_08_53-ffp57gva12GRWMrGMCv4y7K1mLjSav.png"
            alt="Person using Bolt app"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div> */}
      </div>
    </section>
  );
}

export default function AboutUs() {
  const stats = [
    { value: "500+", label: "Cities" },
    { value: "45+", label: "Countries" },
    { value: "100M+", label: "Customers" },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">About us</h2>
            <p className="text-gray-600">
              Bolt is the first European mobility super-app. We're making cities for people, offering better alternatives for every purpose a private car serves — including ride-hailing, shared cars, scooters, and food and grocery delivery.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
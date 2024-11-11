import { Mail, Phone, MapPin } from 'lucide-react'

export default function SupportSidebar() {
  return (
    <div className="space-y-6">
      {/* Live Chat Support */}
      <div className="rounded-lg bg-[#1A1F35] p-6">
        <h3 className="mb-4 text-xl font-bold text-white">Live Chat Support</h3>
        <p className="mb-4 text-gray-300">
          Chat with our support team for immediate assistance.
        </p>
        <button className="w-full rounded bg-yellow-400 px-4 py-2 font-medium text-black hover:bg-yellow-500">
          Start Chat
        </button>
      </div>

      {/* Emergency Support */}
      <div className="rounded-lg bg-[#1A1F35] p-6">
        <h3 className="mb-4 text-xl font-bold text-red-500">Emergency Support</h3>
        <p className="mb-4 text-gray-300">
          24/7 emergency assistance and armed response.
        </p>
        <button className="w-full rounded bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600">
          Call Emergency Line
        </button>
      </div>

      {/* Contact Information */}
      <div className="rounded-lg bg-[#1A1F35] p-6">
        <h3 className="mb-4 text-xl font-bold text-white">Other Ways to Contact Us</h3>
        <div className="space-y-4">
          <div className="flex items-center text-gray-300">
            <Mail className="mr-3 h-5 w-5" />
            support@swift.co.za
          </div>
          <div className="flex items-center text-gray-300">
            <Phone className="mr-3 h-5 w-5" />
            0800 SWIFT SA
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="mr-3 h-5 w-5" />
            Visit Support Hub
          </div>
        </div>
      </div>

      {/* Support Hours */}
      <div className="rounded-lg bg-[#1A1F35] p-6">
        <h3 className="mb-4 text-xl font-bold text-white">Support Hours</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-gray-300">
            <span>General Support:</span>
            <span>24/7</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Driver Support Hub:</span>
            <span>06:00 - 22:00</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>Emergency Line:</span>
            <span>24/7</span>
          </div>
        </div>
      </div>
    </div>
  )
}
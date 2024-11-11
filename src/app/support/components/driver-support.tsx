import { Building2, FileText, GraduationCap } from 'lucide-react'

export default function DriverSupport() {
  return (
    <div className="bg-[#0F1629] py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold text-white">Driver Support</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-[#1A1F35] p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-yellow-400 p-3">
              <Building2 className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Driver Support Hub</h3>
            <p className="mb-4 text-gray-300">
              Visit our physical support centers for face-to-face assistance.
            </p>
            <button className="text-yellow-400 hover:text-yellow-500">
              Find nearest hub
            </button>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-yellow-400 p-3">
              <FileText className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Document Support</h3>
            <p className="mb-4 text-gray-300">
              Get help with license renewals and documentation.
            </p>
            <button className="text-yellow-400 hover:text-yellow-500">
              View requirements
            </button>
          </div>

          <div className="rounded-lg bg-[#1A1F35] p-6">
            <div className="mb-4 h-12 w-12 rounded-full bg-yellow-400 p-3">
              <GraduationCap className="h-6 w-6 text-black" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Training Resources</h3>
            <p className="mb-4 text-gray-300">
              Access training materials and improve your skills.
            </p>
            <button className="text-yellow-400 hover:text-yellow-500">
              Start learning
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react'

type FormData = {
  // Personal Information
  fullName: string
  idNumber: string
  dateOfBirth: string
  email: string
  phone: string
  address: string

  // Driver Documentation
  driversLicense: File | null
  prDP: File | null
  policeClearance: File | null
  proofOfAddress: File | null

  // Vehicle Information
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  vehicleRegistration: string
  vehicleColor: string
  vehicleInsurance: string
  registrationPapers: File | null
  insuranceCertificate: File | null
  roadworthyCertificate: File | null

  // Background Check
  criminalRecordCheck: boolean
  drivingRecordCheck: boolean
  employmentVerification: boolean
  termsAcceptance: boolean
  dataProcessingConsent: boolean
}

const steps = [
  'Personal Information',
  'Driver Documentation',
  'Vehicle Information',
  'Background Check',
]

export default function DriverApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    alert('Application submitted successfully!')
    reset()
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                {...register('fullName', { required: 'Full name is required' })}
                id="fullName"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID/Passport Number</label>
              <input
                {...register('idNumber', { required: 'ID/Passport number is required' })}
                id="idNumber"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.idNumber && <p className="mt-1 text-sm text-red-600">{errors.idNumber.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                {...register('dateOfBirth', { required: 'Date of birth is required' })}
                id="dateOfBirth"
                type="date"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                {...register('email', { required: 'Email is required' })}
                id="email"
                type="email"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                {...register('phone', { required: 'Phone number is required' })}
                id="phone"
                type="tel"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                {...register('address', { required: 'Address is required' })}
                id="address"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
            </div>
          </>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div className="mb-4">
              <label htmlFor="driversLicense" className="block text-sm font-medium text-gray-700">Driver's License</label>
              <input
                {...register('driversLicense', { required: 'Driver\'s license is required' })}
                id="driversLicense"
                type="file"
                className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
              />
              {errors.driversLicense && <p className="mt-1 text-sm text-red-600">{errors.driversLicense.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="prDP" className="block text-sm font-medium text-gray-700">PrDP</label>
              <input
                {...register('prDP', { required: 'PrDP is required' })}
                id="prDP"
                type="file"
                className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
              />
              {errors.prDP && <p className="mt-1 text-sm text-red-600">{errors.prDP.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="policeClearance" className="block text-sm font-medium text-gray-700">Police Clearance</label>
              <input
                {...register('policeClearance', { required: 'Police clearance is required' })}
                id="policeClearance"
                type="file"
                className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
              />
              {errors.policeClearance && <p className="mt-1 text-sm text-red-600">{errors.policeClearance.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="proofOfAddress" className="block text-sm font-medium text-gray-700">Proof of Address</label>
              <input
                {...register('proofOfAddress', { required: 'Proof of address is required' })}
                id="proofOfAddress"
                type="file"
                className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
              />
              {errors.proofOfAddress && <p className="mt-1 text-sm text-red-600">{errors.proofOfAddress.message}</p>}
            </div>
            
          </div>
        )
      case 2:
        return (
          <>
            <div className="mb-4">
              <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700">Vehicle Make</label>
              <input
                {...register('vehicleMake', { required: 'Vehicle make is required' })}
                id="vehicleMake"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.vehicleMake && <p className="mt-1 text-sm text-red-600">{errors.vehicleMake.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">Vehicle Model</label>
              <input
                {...register('vehicleModel', { required: 'Vehicle model is required' })}
                id="vehicleModel"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.vehicleModel && <p className="mt-1 text-sm text-red-600">{errors.vehicleModel.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700">Vehicle Year</label>
              <input
                {...register('vehicleYear', { required: 'Vehicle year is required' })}
                id="vehicleYear"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.vehicleYear && <p className="mt-1 text-sm text-red-600">{errors.vehicleYear.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleRegistration" className="block text-sm font-medium text-gray-700">Vehicle Registration</label>
              <input
                {...register('vehicleRegistration', { required: 'Vehicle registration is required' })}
                id="vehicleRegistration"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.vehicleRegistration && <p className="mt-1 text-sm text-red-600">{errors.vehicleRegistration.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleColor" className="block text-sm font-medium text-gray-700">Vehicle Color</label>
              <input
                {...register('vehicleColor', { required: 'Vehicle color is required' })}
                id="vehicleColor"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.vehicleColor && <p className="mt-1 text-sm text-red-600">{errors.vehicleColor.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="vehicleInsurance" className="block text-sm font-medium text-gray-700">Insurance Details</label>
              <input
                {...register('vehicleInsurance', { required: 'Insurance details are required' })}
                id="vehicleInsurance"
                type="text"
                className="mt-1 block w-full rounded-lg shadow-sm bg-gray-100 focus:bg-white border-none focus:outline-none h-12"
              />
              {errors.vehicleInsurance && <p className="mt-1 text-sm text-red-600">{errors.vehicleInsurance.message}</p>}
            </div>
            <div className="space-y-4 mt-6">
              <div className="mb-4">
                <label htmlFor="registrationPapers" className="block text-sm font-medium text-gray-700">Registration Papers</label>
                <input
                  {...register('registrationPapers', { required: 'Registration papers are required' })}
                  id="registrationPapers"
                  type="file"
                  className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
                />
                {errors.registrationPapers && <p className="mt-1 text-sm text-red-600">{errors.registrationPapers.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="insuranceCertificate" className="block text-sm font-medium text-gray-700">Insurance Certificate</label>
                <input
                  {...register('insuranceCertificate', { required: 'Insurance certificate is required' })}
                  id="insuranceCertificate"
                  type="file"
                  className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
                />
                {errors.insuranceCertificate && <p className="mt-1 text-sm text-red-600">{errors.insuranceCertificate.message}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="roadworthyCertificate" className="block text-sm font-medium text-gray-700">Roadworthy Certificate</label>
                <input
                  {...register('roadworthyCertificate', { required: 'Roadworthy certificate is required' })}
                  id="roadworthyCertificate"
                  type="file"
                  className="mt-1 block w-full p-2 rounded-lg bg-gray-100 focus:bg-white border-none shadow-inner"
                />
                {errors.roadworthyCertificate && <p className="mt-1 text-sm text-red-600">{errors.roadworthyCertificate.message}</p>}
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  {...register('criminalRecordCheck', { required: 'Criminal record check consent is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I consent to a criminal record check</span>
              </label>
              {errors.criminalRecordCheck && <p className="mt-1 text-sm text-red-600">{errors.criminalRecordCheck.message}</p>}
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  {...register('drivingRecordCheck', { required: 'Driving record check consent is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I consent to a driving record check</span>
              </label>
              {errors.drivingRecordCheck && <p className="mt-1 text-sm text-red-600">{errors.drivingRecordCheck.message}</p>}
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  {...register('employmentVerification', { required: 'Employment verification consent is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I consent to employment verification</span>
              </label>
              {errors.employmentVerification && <p className="mt-1 text-sm text-red-600">{errors.employmentVerification.message}</p>}
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  {...register('termsAcceptance', { required: 'Terms acceptance is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I accept the terms and conditions</span>
              </label>
              {errors.termsAcceptance && <p className="mt-1 text-sm text-red-600">{errors.termsAcceptance.message}</p>}
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  {...register('dataProcessingConsent', { required: 'Data processing consent is required' })}
                  type="checkbox"
                  className="mr-2 rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50"
                />
                <span className="text-sm font-medium text-gray-700">I consent to data processing</span>
              </label>
              {errors.dataProcessingConsent && <p className="mt-1 text-sm text-red-600">{errors.dataProcessingConsent.message}</p>}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto my-4 p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Swift! Driver Application</h1>
      <div className="mb-8 overflow-x-auto">
        <div className="flex items-center justify-between min-w-max">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-800'}`}>
                {index + 1}
              </div>
              <div className="ml-2 text-sm font-semibold text-black">{step}</div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1 mx-2 ${index < currentStep ? 'bg-yellow-600' : 'bg-gray-300'}`} />
              )}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {renderStep()}
        <div className="flex justify-between">
          {currentStep > 0 && (
            <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400">
              <ChevronLeft className="inline-block" />
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button type="button" onClick={nextStep} className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-400">
              Next
              <ChevronRight className="inline-block" />
            </button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-400">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
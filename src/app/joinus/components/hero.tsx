'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { useState } from 'react'
import image from '../images/1.png'
import { countryCodes, europeanCities } from './data'

export default function Hero() {
  const [countryCode, setCountryCode] = useState(countryCodes[0].code)
  const [city, setCity] = useState('')

  return (
    <section className="relative min-h-screen pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <Image
          src={image}
          alt="Car interior"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">
              Make money<br />driving with Swift
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Become a Swift driver, set your schedule and earn money by driving
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 max-w-md mx-auto lg:ml-auto">
            <h2 className="text-2xl font-bold mb-6">Become a driver</h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <Input type="email" placeholder="Enter email address" />
              </div>
              
              <div>
                <label className="text-sm text-gray-600">Phone number</label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-24"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code} ({item.country})
                      </option>
                    ))}
                  </select>
                  <Input type="tel" placeholder="Mobile number" className="flex-1 min-w-[200px]" />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-gray-600">City</label>
                <select 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)}  
                  className="w-full"
                >
                  <option value="" disabled>City where you will drive</option>
                  {europeanCities.map((city) => (
                    <option key={city} value={city.toLowerCase()}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              
              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black  text-md">
                Register as a driver
              </Button>
              
              <p className="text-md text-gray-500 text-center">
                Already have an account?{' '}
                <a href="#" className="text-yellow-500 hover:underline">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

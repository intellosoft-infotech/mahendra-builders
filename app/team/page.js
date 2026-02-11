'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Ramesh Patidar',
      designation: 'Founder & Chairman',
      image: '/ee.png'
    },
    {
      id: 2,
      name: 'Suresh Patidar',
      designation: 'MD, Mahendra Agro Services',
      image: '/aa.png'
    },
    {
      id: 3,
      name: 'Radheshyam Patidar',
      designation: 'MD, Real Estate',
      image: '/dd.png'
    },
    {
      id: 4,
      name: 'Lakhan Patidar',
      designation: 'MD, Mahendra Fuel Point',
      image: '/ii.png'
    },
    {
      id: 5,
      name: 'Dinesh Patidar',
      designation: 'MD, Real Estate and Warehousing',
      image: '/hh.png'
    },
    {
      id: 6,
      name: 'Siddharth Patidar',
      designation: 'MD, Hotels',
      image: '/bb.png'
    },
    {
      id: 7,
      name: 'Sourabh Patidar',
      designation: 'MD, Real Estate and Warehousing',
      image: '/mm.png'
    },
    {
      id: 8,
      name: 'Gourav Patidar',
      designation: 'Founder, Intellosoft Infotech',
      image: '/cc.png'
    },
    {
      id: 9,
      name: 'Ronit Patidar',
      designation: 'MD, Hotels',
      image: '/ff.png'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Meet the exceptional professionals behind Mahendra Builders' success
          </p>
        </div>
      </div>

      {/* Team Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <h3 className="text-xl text-blue-600 mb-6">Dedicated to Excellence</h3>
          <p className="text-gray-600 leading-relaxed">
            Our team comprises seasoned professionals with decades of combined experience in real estate, 
            construction, and customer service. Together, we're committed to delivering projects that exceed 
            expectations and build lasting relationships with our stakeholders.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Team Member Image */}
              <div className="relative h-96 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-200">{member.designation}</p>
                </div>
              </div>

              {/* Hover effect - subtle border */}
              <div className="absolute inset-0 border-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Culture Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Culture & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every project, maintaining the highest standards of quality and professionalism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">
                Built on integrity and transparency, our relationships with clients and partners are based on mutual respect.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate to bring modern solutions and improve customer experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be Part of Our Growing Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for excellence and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Career Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
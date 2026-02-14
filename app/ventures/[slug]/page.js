"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Phone, Mail, Home, Zap, Shield, Droplet, Check, Download, ArrowLeft, Send, Loader2 } from 'lucide-react'
import { getVentureBySlug } from '@/data/ventures'
import Lightbox from '@/components/Lightbox'

export default function VentureDetailPage({ params }) {
  const router = useRouter()
  const venture = getVentureBySlug(params.slug)

  const [isSubmitting1, setIsSubmitting1] = useState(false)
  const [isSubmitting2, setIsSubmitting2] = useState(false)

  const [formData1, setFormData1] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [formData2, setFormData2] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit1 = async (e) => {
    e.preventDefault()
    setIsSubmitting1(true)
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData1,
          projectName: venture?.name,
          source: 'Venture Enquiry'
        }),
      })
      const result = await response.json()
      if (result.success) {
        router.push('/thank-you?type=enquiry')
      } else {
        alert('Failed to send message. Please try again.')
        setIsSubmitting1(false)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
      setIsSubmitting1(false)
    }
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault()
    setIsSubmitting2(true)
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData2,
          projectName: venture?.name,
          source: 'Venture Quick Enquiry'
        }),
      })
      const result = await response.json()
      if (result.success) {
        router.push('/thank-you?type=enquiry')
      } else {
        alert('Failed to send enquiry. Please try again.')
        setIsSubmitting2(false)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
      setIsSubmitting2(false)
    }
  }

  const handleChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value })
  }

  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value })
  }

  if (!venture) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Venture Not Found</h1>
          <p className="text-gray-600 mb-6">The venture you're looking for doesn't exist.</p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700"></div>
        <Image
          src={venture.images[0]}
          alt={venture.name}
          fill
          className="object-cover opacity-40"
          priority
        />
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
          
              <div className="flex gap-3 mb-6 animate-slide-up">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                  {venture.type}
                </span>
                {/* <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
                  {venture.status}
                </span> */}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up stagger-1">
                {venture.name}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up stagger-2">
                {venture.tagline}
              </p>
              <div className="flex items-center space-x-2 text-white/90 text-lg mb-8 animate-slide-up stagger-3">
                <MapPin className="text-white" size={24} />
                <span>{venture.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-6 sticky top-0 z-40 shadow-lg">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Phone size={20} />
              <a href={`tel:${venture.phone}`} className="font-semibold hover:text-primary-200 transition">
                {venture.phone}
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#overview" className="hover:text-primary-200 transition">Overview</a>
              <a href="#features" className="hover:text-primary-200 transition">Features</a>
              <a href="#amenities" className="hover:text-primary-200 transition">Amenities</a>
              <a href="#gallery" className="hover:text-primary-200 transition">Gallery</a>
            </div>
            <div className="flex gap-3">
              <Link href="#enquiry" className="bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                About This Venture
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {venture.name} <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {venture.description}
              </p>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={venture.images[1]}
                  alt={venture.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Key Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-gradient">Offer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {venture.features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <Check className="text-white" size={16} />
                </div>
                <p className="text-gray-700 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Facilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium <span className="text-gradient">Amenities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venture.amenities.map((amenity, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all card-hover animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Home className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Venture <span className="text-gradient">Gallery</span>
            </h2>
          </div>

          <Lightbox images={venture.images} />
        </div>
      </section>


      {/* Location Section */}
      <section id="location" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit1} className="space-y-6">
                <div>
                  <label htmlFor="name1" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name1"
                    name="name"
                    value={formData1.name}
                    onChange={handleChange1}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email1" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email1"
                      name="email"
                      value={formData1.email}
                      onChange={handleChange1}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone1" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone1"
                      name="phone"
                      value={formData1.phone}
                      onChange={handleChange1}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject1" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject1"
                    name="subject"
                    value={formData1.subject}
                    onChange={handleChange1}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="property">Property Information</option>
                    <option value="visit">Schedule Visit</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message1" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message1"
                    name="message"
                    value={formData1.message}
                    onChange={handleChange1}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting1}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting1 ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Venture Info & Map */}
            <div className="space-y-6">
              {/* Venture Info Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{venture.name}</h3>
                    <p className="text-primary-100 text-sm">{venture.type}</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Visit us at our {venture.type.toLowerCase()} location to discuss your needs in person. Our team of experts is ready to assist you.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/80 text-sm mb-1">Address</p>
                    <p className="text-white font-semibold">{venture.location}</p>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm mb-1">Phone</p>
                  <a href={`tel:${venture.phone}`} className="text-white font-semibold hover:text-primary-100 transition">
                    {venture.phone}
                  </a>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Status</p>
                  <p className="text-white font-semibold">{venture.status}</p>
                </div>
              </div>
            </div>
              {/* Map */}
              <div className="bg-gray-200 rounded-2xl h-80 overflow-hidden">
                <iframe
                  title={`${venture.name} Location`}
                  src={
                    venture.location
                      ? `https://www.google.com/maps?q=${encodeURIComponent(
                          `${venture.name}, ${venture.location}`
                        )}&output=embed`
                      : `https://www.google.com/maps?q=${encodeURIComponent(
                          `${venture.name}, Bhopal`
                        )}&output=embed`
                  }
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="enquiry" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get More Information
            </h2>
            <p className="text-xl text-white/90">
              Fill out the form below and our team will get back to you shortly
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-2xl animate-scale-in">
            <form onSubmit={handleSubmit2} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData2.name}
                  onChange={handleChange2}
                  placeholder="Your Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData2.phone}
                  onChange={handleChange2}
                  placeholder="Phone Number"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData2.email}
                onChange={handleChange2}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                required
              />
              <textarea
                name="message"
                value={formData2.message}
                onChange={handleChange2}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting2}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting2 ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Enquiry</span>
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

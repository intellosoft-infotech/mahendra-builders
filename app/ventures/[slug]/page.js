import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Home, Zap, Shield, Droplet, Check, Download, ArrowLeft } from 'lucide-react'
import { getVentureBySlug } from '@/data/ventures'
import Lightbox from '@/components/Lightbox'

export default function VentureDetailPage({ params }) {
  const venture = getVentureBySlug(params.slug)

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
                <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
                  {venture.status}
                </span>
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition resize-none"
              ></textarea>
              <button type="submit" className="w-full btn-primary text-lg py-4">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

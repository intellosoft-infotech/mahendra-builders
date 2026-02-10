import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Home, Maximize, Car, Shield, Droplet, Zap, Check } from 'lucide-react'

export default function ProjectDetailPage({ params }) {
  // This would normally fetch project data based on params.slug
  const project = {
    name: 'Mahendra Ample Park',
    tagline: 'Where Luxury Meets Comfort',
    type: 'Residential',
    status: 'Ready to Move',
    location: 'Salaiya, Ahead of E-8 Extn. Bhopal 462026',
    phone: '9589011668',
    email: 'mahendrabuliders@rediffmail.com',
    description: 'Mahendra Ample Park is a premium residential project that redefines modern living. Strategically located in Salaiya, this development offers the perfect blend of luxury, comfort, and convenience. With world-class amenities and meticulous attention to detail, every aspect is designed to enhance your lifestyle.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80'
    ],
    configurations: [
      { type: '2 BHK', size: '1050 sq.ft', price: '₹45 Lakhs onwards' },
      { type: '3 BHK', size: '1450 sq.ft', price: '₹65 Lakhs onwards' }
    ],
    amenities: [
      { icon: Home, name: 'Clubhouse', description: 'Modern amenities' },
      { icon: Car, name: 'Parking', description: 'Covered & open' },
      { icon: Shield, name: '24/7 Security', description: 'CCTV surveillance' },
      { icon: Droplet, name: 'Water Supply', description: 'Round the clock' },
      { icon: Zap, name: 'Power Backup', description: '100% coverage' },
      { icon: Maximize, name: 'Landscape Garden', description: 'Lush greenery' }
    ],
    highlights: [
      'Prime location with excellent connectivity',
      'Vastu-compliant homes',
      'Earthquake resistant structure',
      'Premium quality fittings and fixtures',
      'Ample parking space',
      'Children\'s play area',
      'Jogging track',
      'Rainwater harvesting',
      'Solar lighting in common areas',
      'Wide roads and ample open spaces'
    ]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700"></div>
        <Image
          src={project.images[0]}
          alt={project.name}
          fill
          className="object-cover opacity-40"
          priority
        />
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="flex gap-3 mb-6 animate-slide-up">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                  {project.type}
                </span>
                <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
                  {project.status}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up stagger-1">
                {project.name}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up stagger-2">
                {project.tagline}
              </p>
              <div className="flex items-center space-x-2 text-white/90 text-lg mb-8 animate-slide-up stagger-3">
                <MapPin className="text-white" size={24} />
                <span>{project.location}</span>
              </div>
              <div className="flex flex-wrap gap-4 animate-slide-up stagger-4">
                <a href={`tel:${project.phone}`} className="btn-primary text-lg px-8 py-4">
                  <Phone className="inline mr-2" size={20} />
                  Call Now
                </a>
                <Link href="#enquiry" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all">
                  Enquire Now
                </Link>
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
              <a href={`tel:${project.phone}`} className="font-semibold hover:text-primary-200 transition">
                {project.phone}
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#overview" className="hover:text-primary-200 transition">Overview</a>
              <a href="#amenities" className="hover:text-primary-200 transition">Amenities</a>
              <a href="#gallery" className="hover:text-primary-200 transition">Gallery</a>
              <a href="#location" className="hover:text-primary-200 transition">Location</a>
            </div>
            <Link href="#enquiry" className="bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Details
            </Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                About Project
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Project <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
              
              {/* Configurations */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Configurations</h3>
                {project.configurations.map((config, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{config.type}</h4>
                        <p className="text-gray-600">{config.size}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary-700">{config.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.images[1]}
                  alt="Project view"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              World-Class Facilities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium <span className="text-gradient">Amenities</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.amenities.map((amenity, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all card-hover animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <amenity.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
              Project <span className="text-gradient">Highlights</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project <span className="text-gradient">Gallery</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.images.map((image, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Image
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="enquiry" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-900"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Interested in This Project?
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
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

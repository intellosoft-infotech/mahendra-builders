import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Home, Maximize, Car, Shield, Droplet, Zap, Check, Download } from 'lucide-react'
import { getProjectBySlug } from '@/data/projects'
import Lightbox from '@/components/Lightbox'

const iconMap = {
  Home,
  Car,
  Shield,
  Droplet,
  Zap,
  Maximize,
  Phone,
  Mail,
  MapPin,
  Check,
  Download
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <Link href="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  // Map icon names to actual icon components
  const amenitiesWithIcons = project.amenities.map(amenity => ({
    ...amenity,
    icon: iconMap[amenity.icon] || Home
  }))

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
            <div className="flex gap-3">
              {project.brochure && (
                <a href={`/brochures/${project.brochure}`} download className="bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2">
                  <Download size={18} />
                  Download Brochure
                </a>
              )}
              <Link href="#enquiry" className="bg-white text-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Details
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
                About Project
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Project <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
              
              {/* Configurations */}
              <div className="space-y-4 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">Configurations</h3>
                {project.configurations.map((config, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{config.type}</h4>
                        <p className="text-gray-600">{config.size}</p>
                      </div>
                      {/* <div className="text-right">
                        <p className="text-2xl font-bold text-primary-700">{config.price}</p>
                      </div> */}
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
            {amenitiesWithIcons.map((amenity, idx) => (
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

          <Lightbox images={project.images} />
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

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
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
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Project Info & Map */}
            <div className="space-y-6">
              {/* Project Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <p className="text-primary-100 text-sm">{project.type}</p>
                  </div>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Visit our project site to explore this {project.type.toLowerCase()} development. Our team of experts is ready to assist you with all your inquiries.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/80 text-sm mb-1">Address</p>
                    <p className="text-white font-semibold">{project.location}</p>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm mb-1">Phone</p>
                    <a href={`tel:${project.phone}`} className="text-white font-semibold hover:text-primary-100 transition">
                      {project.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm mb-1">Status</p>
                    <p className="text-white font-semibold">{project.status}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-2xl h-80 overflow-hidden">
                <iframe
                  src={
                    project.latitude && project.longitude
                      ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.${Math.floor(Math.random() * 1000000)}!2d${project.longitude}!3d${project.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2z${encodeURIComponent(project.location)}!5e0!3m2!1sen!2sin!4v${Date.now()}`
                      : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.${Math.floor(Math.random() * 1000000)}!2d77.463!3d23.259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2z${encodeURIComponent(project.location + ', Bhopal')}!5e0!3m2!1sen!2sin!4v${Date.now()}`
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
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

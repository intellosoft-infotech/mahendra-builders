'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Building2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['0755-4278331', '+91 9827205617'],
      action: 'tel:07554278331'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['mahendrabuliders@rediffmail.com'],
      action: 'mailto:mahendrabuliders@rediffmail.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Block - 1, Mahendra Business Square', 'E-8 Extn Bawaria Kalan, Bhopal'],
      action: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday', '10:00 AM - 7:00 PM'],
      action: null
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-white/90">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding -mt-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all card-hover"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">
                    {info.action && idx === 0 ? (
                      <a href={info.action} className="hover:text-primary-600 transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
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
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="property">Property Information</option>
                    <option value="site-visit">Schedule Site Visit</option>
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Office Info & Map */}
            <div className="space-y-6">
              {/* Office Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Our Office</h3>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Visit us at our office to discuss your real estate needs in person. Our team of experts is ready to assist you.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/80 text-sm mb-1">Address</p>
                    <p className="text-white font-semibold">
                      Block - 1, Mahendra Business Square<br />
                      E-8 Extn Bawaria Kalan, Bhopal
                    </p>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm mb-1">Office Hours</p>
                    <p className="text-white font-semibold">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-2xl h-80 overflow-hidden">
                <iframe
                  title="Mahendra Builders Office Location"
                  src="https://www.google.com/maps?q=Mahendra%20Builders,%20Block%20-%201,%20Mahendra%20Business%20Square,%20E-8%20Extn%20Bawaria%20Kalan,%20Bhopal,%20Madhya%20Pradesh%20462039&output=embed"
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
    </div>
  )
}

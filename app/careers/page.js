'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Briefcase, Send, Users, TrendingUp, Heart, Award, ChevronRight, Loader2 } from 'lucide-react'

export default function CareerPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('position', formData.position)
      formDataToSend.append('experience', formData.experience)
      formDataToSend.append('message', formData.message)
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume)
      }

      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formDataToSend,
      })
      const result = await response.json()
      if (result.success) {
        router.push('/thank-you?type=career')
      } else {
        alert('Failed to submit application. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths with opportunities to grow and develop your skills'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We value your personal time and ensure a healthy work-life balance'
    },
    {
      icon: Users,
      title: 'Great Team Culture',
      description: 'Work with passionate professionals in a collaborative environment'
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Attractive compensation packages and comprehensive benefits'
    }
  ]

  const openPositions = [
    {
      title: 'Civil Engineer',
      department: 'Engineering',
      location: 'Bhopal',
      type: 'Full Time',
      experience: '3-5 years',
      description: 'Lead construction projects and ensure quality standards are met'
    },
   
    {
      title: 'Sales Executive',
      department: 'Sales & Marketing',
      location: 'Bhopal',
      type: 'Full Time',
      experience: '1-3 years',
      description: 'Drive sales and build relationships with potential customers'
    },
   
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="text-white" size={40} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Career With Us
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                Join a team that's building the future of Bhopal, one project at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your Career <span className="text-gradient">With Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">
              At Mahendra Builders, we don't just build projects - we build careers and futures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Current Openings
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Available <span className="text-gradient">Positions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect role that matches your skills and aspirations
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center text-gray-600">
                        <Briefcase size={16} className="mr-2" />
                        {position.department}
                      </span>
                      <span className="flex items-center text-gray-600">
                        📍 {position.location}
                      </span>
                      <span className="flex items-center text-gray-600">
                        ⏱️ {position.experience}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button 
                      onClick={() => {
                        setFormData({...formData, position: position.title})
                        document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="btn-primary flex items-center space-x-2 whitespace-nowrap"
                    >
                      <span>Apply Now</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Apply for a Position
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you soon
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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

                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                      Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select Position</option>
                      {openPositions.map((pos, idx) => (
                        <option key={idx} value={pos.title}>{pos.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="e.g., 3 years"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Resume (PDF) *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf"
                    required
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us why you're a great fit for this role..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

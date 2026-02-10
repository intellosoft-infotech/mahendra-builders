import Link from 'next/link'
import { MessageSquare, Quote, Heart, Handshake, Target, Users } from 'lucide-react'

export default function DirectorMessagePage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about creating spaces that enrich lives'
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'Our word is our bond; we deliver on every promise'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every detail'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build not just projects, but thriving communities'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="text-white" size={40} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Director's Message
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                Words of wisdom and vision from our leadership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="section-padding gradient-bg -mt-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Image Side */}
                <div className="lg:col-span-2 bg-gradient-to-br from-purple-100 to-blue-100 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                      <span className="text-white text-6xl font-bold">DP</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Dinesh Patidar</h3>
                    <p className="text-purple-700 font-semibold mb-4">Founder & Director</p>
                    <div className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm">
                      ISO 9001:2008 Certified Leader
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-3 p-8 md:p-12">
                  <div className="mb-8">
                    <Quote className="text-purple-300" size={48} />
                  </div>
                  
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p className="font-semibold text-xl text-gray-900">Dear Friends and Well-wishers,</p>
                    
                    <p>
                      It gives me immense pleasure to share my thoughts with you as the founder of Mahendra Builders. When I started this journey in 1990, I had a simple yet powerful vision - to create spaces where dreams come alive and families find not just homes, but happiness.
                    </p>
                    
                    <p>
                      Over the past 35 years, we have grown from strength to strength, but our core values remain unchanged. We believe that building is not just about bricks and mortar; it's about trust, integrity, and the relationships we forge with our customers. Every project we undertake carries the weight of our reputation and the dreams of countless families.
                    </p>
                    
                    <p>
                      Our ISO 9001:2008 certification is not just a badge of honor; it's a commitment to excellence that permeates every aspect of our work. From the quality of materials we use to the timely delivery of projects, from transparent dealings to exceptional after-sales service - we hold ourselves to the highest standards.
                    </p>
                    
                    <p>
                      As we look to the future, we remain committed to innovation, sustainability, and creating value for all our stakeholders. We are not just building structures; we are building communities, creating landmarks, and contributing to the growth story of Bhopal and beyond.
                    </p>
                    
                    <p>
                      I extend my heartfelt gratitude to our customers who have placed their trust in us, our team members who work tirelessly to deliver excellence, and our partners who support us in this journey. Together, we will continue to build dreams and create legacies.
                    </p>
                    
                    <p className="font-semibold text-gray-900">With warm regards,</p>
                    <p className="font-bold text-xl text-purple-700">Dinesh Patidar</p>
                    <p className="text-gray-600">Founder & Director, Mahendra Builders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Leadership Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Values That <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Guide Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles our leadership lives by and instills in every team member
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <value.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Leadership <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Philosophy</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-700 mb-2">People First</div>
                  <p className="text-gray-600">Our customers and team members are our greatest assets</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-700 mb-2">Innovation</div>
                  <p className="text-gray-600">Constantly evolving to meet changing needs and expectations</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-700 mb-2">Legacy</div>
                  <p className="text-gray-600">Building for generations, creating lasting impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Success Story</h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of a legacy built on trust, quality, and excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/projects" className="bg-white text-purple-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl">
                View Our Projects
              </Link>
              <Link href="/contact" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

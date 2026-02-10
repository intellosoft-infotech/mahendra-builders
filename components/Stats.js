'use client'

import { Building2, Users, MapPin, Trophy } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Building2,
      value: '30+',
      label: 'Completed Projects',
      description: 'Successfully delivered across Bhopal'
    },
    {
      icon: Users,
      value: '5000+',
      label: 'Happy Families',
      description: 'Living in our communities'
    },
    {
      icon: MapPin,
      value: '15+',
      label: 'Prime Locations',
      description: 'Strategic properties in Bhopal'
    },
    {
      icon: Trophy,
      value: '35+',
      label: 'Years Experience',
      description: 'In real estate excellence'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Journey in Numbers
          </h2>
          <p className="text-xl text-white/90">
            Three decades of excellence, innovation, and customer satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative scale-on-scroll"
            >
              {/* Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 h-full hover-lift">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <stat.icon className="text-white" size={36} />
                  </div>
                  
                  {/* Value */}
                  <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/80 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent-400/20 rounded-full blur-2xl group-hover:bg-accent-400/30 transition-all"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center reveal">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20 hover-lift">
            <p className="text-white text-lg mb-2">
              <span className="font-bold">ISO 9001:2008 Certified</span>
            </p>
            <p className="text-white/80">
              Committed to Quality & Excellence in Every Project
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

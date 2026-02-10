import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, MessageSquare, Award, Users, TrendingUp, Building2, Heart } from 'lucide-react'

export default function AboutPage() {
  const milestones = [
    { year: '1990', title: 'Foundation', description: 'Mahendra Builders established with a vision' },
    { year: '2000', title: 'Expansion', description: 'Expanded into commercial developments' },
    { year: '2010', title: 'ISO Certified', description: 'Achieved ISO 9001:2008 certification' },
    { year: '2020', title: 'New Heights', description: 'Completed 25+ landmark projects' },
    { year: '2024', title: 'Present Day', description: 'Leading developer in Central India' }
  ]

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every project meets the highest standards of construction and finishing.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Their satisfaction is our ultimate success.'
    },
    {
      icon: Building2,
      title: 'Innovation',
      description: 'We embrace modern technologies and innovative designs to create exceptional living spaces.'
    },
    {
      icon: Users,
      title: 'Transparency',
      description: 'Open communication and honest dealings form the foundation of our business relationships.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 animate-fade-in">
                35+ Years of Excellence
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
                About Mahendra Builders
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up max-w-3xl" style={{ animationDelay: '0.1s' }}>
                Building dreams, creating landmarks, and shaping the future of Bhopal since 1990
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                A Legacy of <span className="text-gradient">Trust & Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mahendra Builders owes its origin to Mr. Dinesh Patidar, who envisioned a success story waiting to take shape in the retail business in 2008. What started as a dream has grown swiftly to become one of the leading property developers in Bhopal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by a set of well-versed professionals with an aim to amalgamate global standards and quality to the Indian Real Estate Industry, the Group showcases a profound experience of multiple decades in Township Developments, Warehousing & logistics park, Hospitality sector, and franchise dealership of petroleum with BPCL & Nayara Energy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our promoters have diversified to leverage their expertise of customer delight and transparent ethics into real estate, creating communities where families thrive and businesses flourish.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                  <Building2 className="text-primary-300" size={200} />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-700 mb-2">5000+</div>
                  <div className="text-gray-600 font-medium">Happy Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Milestones That <span className="text-gradient">Define Us</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0 border-l-4 border-primary-200 hover:border-primary-500 transition-colors group">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all ml-4 card-hover">
                  <div className="text-3xl font-bold text-primary-700 mb-2">{milestone.year}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-gradient">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links to Mission, Vision, Director Message */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/our-mission" className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800"></div>
              <div className="relative p-8 text-white">
                <Target className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-white/90 mb-4">Discover our commitment to excellence and customer satisfaction</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/our-vision" className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
              <div className="relative p-8 text-white">
                <Eye className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-white/90 mb-4">See how we're shaping the future of real estate in Central India</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More →
                </span>
              </div>
            </Link>

            <Link href="/director-message" className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800"></div>
              <div className="relative p-8 text-white">
                <MessageSquare className="mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-3">Director's Message</h3>
                <p className="text-white/90 mb-4">Read the inspiring words from our leadership team</p>
                <span className="inline-flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Family</h2>
            <p className="text-xl text-white/90 mb-8">
              Be part of a community that values quality, trust, and excellence
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/projects" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl">
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

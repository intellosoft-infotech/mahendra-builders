import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Target, Eye, Users } from 'lucide-react'

export default function About() {
  const highlights = [
    'ISO 9001:2008 Certified',
    '35+ Years of Excellence',
    'Transparent Business Ethics',
    'Customer-Centric Approach'
  ]

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver exceptional real estate solutions that exceed expectations while maintaining the highest standards of quality, integrity, and customer satisfaction.',
      link: '/our-mission'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the most trusted and preferred real estate developer in Central India, known for innovation, sustainability, and creating value for all stakeholders.',
      link: '/our-vision'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Meet the exceptional professionals behind our success - dedicated individuals committed to excellence and customer satisfaction in every project.',
      link: '/team'
    }
  ]

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="relative reveal">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/kkk.jpg"
                alt="Mahendra Builders"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Floating Card */}
            {/* <div className="absolute -bottom-28 -right-8 bg-white p-6 rounded-xl shadow-2xl animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">35+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Years</p>
                  <p className="text-gray-600">of Excellence</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Content Side */}
          <div className="reveal">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              About Mahendra Builders
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building Dreams Since <span className="text-gradient">1990</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to Mahendra Builders group, established since 1990 as a premier real estate and infrastructure development company. We are engaged in the business of Township developments, warehousing & logistics parks, Hospitality sector, and franchise dealership of petroleum with BPCL & Nayara Energy.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded by a set of well-versed professionals with an aim to amalgamate global standards and quality to the Indian Real Estate Industry, the Group showcases a profound experience of multiple decades in delivering exceptional projects that stand the test of time.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Mission, Vision, Message Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group reveal"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {value.description}
              </p>
              <Link 
                href={value.link}
                className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center group"
              >
                Read More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Target, CheckCircle, ArrowRight, Building2, Users, Award, Heart } from 'lucide-react'

export default function MissionPage() {
  const objectives = [
    {
      icon: Building2,
      title: 'Quality Construction',
      description: 'Deliver projects that exceed industry standards with superior construction quality and attention to detail in every aspect.'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Put customers first by understanding their needs, maintaining transparency, and ensuring complete satisfaction throughout their journey.'
    },
    {
      icon: Award,
      title: 'Timely Delivery',
      description: 'Honor our commitments by completing and delivering projects on schedule without compromising on quality or safety.'
    },
    {
      icon: Heart,
      title: 'Sustainable Development',
      description: 'Build eco-friendly communities that harmonize with nature while providing modern amenities and comfortable living.'
    }
  ]

  const commitments = [
    'Maintain the highest standards of integrity and ethics in all business dealings',
    'Continuously innovate and adopt modern construction technologies',
    'Create value for all stakeholders including customers, employees, and partners',
    'Contribute positively to the communities we serve',
    'Ensure safe and sustainable construction practices',
    'Provide exceptional after-sales service and support'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={40} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                To deliver exceptional real estate solutions that exceed expectations while maintaining the highest standards of quality, integrity, and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Building More Than <span className="text-gradient">Structures</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Mahendra Builders, our mission extends beyond constructing buildings. We are committed to creating communities where families thrive, businesses flourish, and lives are enriched. Every project we undertake is a testament to our dedication to excellence, sustainability, and customer delight.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe in amalgamating global standards with local expertise to deliver projects that stand the test of time. Our ISO 9001:2008 certification reflects our commitment to maintaining international quality benchmarks while staying rooted in the values of trust, transparency, and integrity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through innovative design, superior construction quality, and unwavering customer focus, we aim to set new benchmarks in the real estate industry and contribute meaningfully to the growth and development of Bhopal and surrounding regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Objectives
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core <span className="text-gradient">Pillars</span>
            </h2>
            <p className="text-xl text-gray-600">
              Four fundamental objectives that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6">
                  <objective.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{objective.title}</h3>
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Commitments</span>
              </h2>
              <p className="text-xl text-gray-600">
                Promises we make to our customers, partners, and community
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                      <CheckCircle className="text-primary-600 group-hover:text-white transition-colors" size={20} />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Our Mission in Action</h2>
            <p className="text-xl text-white/90 mb-8">
              Explore our projects and see how we're turning our mission into reality
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/projects" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl inline-flex items-center space-x-2">
                <span>View Our Projects</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

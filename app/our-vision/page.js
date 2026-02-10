import Link from 'next/link'
import { Eye, Sparkles, TrendingUp, Globe, Leaf, Users, Award, Building } from 'lucide-react'

export default function VisionPage() {
  const visionPillars = [
    {
      icon: Award,
      title: 'Market Leadership',
      description: 'To be recognized as the most trusted and preferred real estate developer in Central India, setting benchmarks for quality and customer satisfaction.'
    },
    {
      icon: Sparkles,
      title: 'Innovation Excellence',
      description: 'Pioneer the adoption of cutting-edge technologies, sustainable practices, and innovative designs that redefine modern living and working spaces.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Growth',
      description: 'Create eco-friendly developments that balance environmental responsibility with contemporary lifestyle needs, ensuring a better tomorrow.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Develop thriving communities where people connect, businesses prosper, and life quality is enhanced through thoughtful planning and amenities.'
    },
    {
      icon: Globe,
      title: 'Regional Expansion',
      description: 'Extend our footprint across Madhya Pradesh and beyond, bringing our expertise and values to new markets and communities.'
    },
    {
      icon: TrendingUp,
      title: 'Stakeholder Value',
      description: 'Create lasting value for all stakeholders - customers, employees, partners, and the society at large through ethical and profitable growth.'
    }
  ]

  const futureGoals = [
    { number: '50+', label: 'Projects by 2030', description: 'Expanding our portfolio' },
    { number: '10,000+', label: 'Happy Families', description: 'Growing community' },
    { number: '100%', label: 'Green Buildings', description: 'Sustainable future' },
    { number: '#1', label: 'In Central India', description: 'Market leadership' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={40} />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Our Vision
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                To be the most trusted and preferred real estate developer in Central India, known for innovation, sustainability, and creating lasting value for all stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-blue-100 rounded-2xl mb-6">
                  <Sparkles className="text-blue-600" size={48} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Shaping the <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Future of Real Estate</span>
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Our vision is to transform the landscape of Central India through innovative real estate development that sets new standards in quality, design, and sustainability. We aspire to create communities that are not just places to live or work, but environments where people thrive, dreams are realized, and legacies are built.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                By 2030, we envision Mahendra Builders as synonymous with trust, quality, and innovation in real estate - a company that has touched thousands of lives and contributed significantly to the economic and social development of the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Strategic Pillars
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Foundation of Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-gray-600">
              Six strategic pillars that guide our journey towards excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all card-hover border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <pillar.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Vision for 2030
            </h2>
            <p className="text-xl text-white/90">
              Ambitious goals that drive us forward every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureGoals.map((goal, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                  {goal.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {goal.label}
                </h3>
                <p className="text-white/80">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-center">
              <Building className="mx-auto text-blue-600 mb-6" size={64} />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Commitment to the Future
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are committed to building a sustainable future through responsible development practices, environmental conservation, and social responsibility. Every project we undertake is designed with the future in mind - creating spaces that will serve generations to come.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/projects" className="btn-primary">
                  Explore Our Projects
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

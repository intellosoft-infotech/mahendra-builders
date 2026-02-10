import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Building2, Home, Warehouse, Hotel } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      name: 'Mahendra Ample Park',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/main_page.jpg',
      location: 'Salaiya, Ahead of E-8 Extn. Bhopal 462026',
      phone: '9589011668',
      type: 'Residential',
      status: 'Current',
      slug: 'mahendra-ample-park',
      icon: Home,
      features: ['2/3 BHK', 'Gated Community', 'Premium Amenities']
    },
    {
      name: 'Mahendra Shipra',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/shipra_plan1.jpg',
      location: 'Mahendra Township Phase-1, E-8 Extn. Bawadia Kalan, Bhopal 462039',
      phone: '7024143668',
      type: 'Residential',
      status: 'Current',
      slug: 'mahendra-shipra',
      icon: Home,
      features: ['Modern Design', 'Strategic Location', '24/7 Security']
    },
    {
      name: 'Mahendra Business Square',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/plan3-2.jpg',
      location: 'Mahendra Township Phase-1, E-8 Extn. Bawadia Kalan, Bhopal 462039',
      phone: '7024143668',
      type: 'Commercial',
      status: 'Current',
      slug: 'mahendra-business-square',
      icon: Building2,
      features: ['Office Spaces', 'Retail Units', 'Prime Location']
    },
    {
      name: 'Mahendra Medi Square',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/medi_plan3.jpg',
      location: 'Bawadiya Kalan Rd, Kolar Rd, Bhopal, Madhya Pradesh 462010',
      phone: '7024143668',
      type: 'Commercial',
      status: 'Current',
      slug: 'mahendra-medi-square',
      icon: Building2,
      features: ['Medical Centers', 'Commercial Units', 'Modern Infrastructure']
    },
    {
      name: 'Mahendra Ample Business Park',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/ma_about3.jpg',
      location: 'In front of Mahendra Ample Park, E-8 Extn., Salaiya, Bhopal 462026',
      phone: '9589011668',
      type: 'Commercial',
      status: 'Current',
      slug: 'mahendra-ample-business-park',
      icon: Building2,
      features: ['Business Offices', 'Conference Facilities', 'Ample Parking']
    },
    {
      name: 'Mahendra Greenwoods',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2020/12/mgg2.jpg',
      location: 'Jatkhedi, Bhopal, Madhya Pradesh 462026',
      phone: '9303356668',
      type: 'Residential',
      status: 'Current',
      slug: 'mahendra-greenwoods',
      icon: Home,
      features: ['Eco-Friendly', 'Green Spaces', 'Modern Villas']
    },
    {
      name: 'Mahendra Utsav',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/post_plan.jpg',
      location: 'Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462039',
      phone: '8435000627',
      type: 'Hospitality',
      status: 'Current',
      slug: 'mahendra-utsav',
      icon: Hotel,
      features: ['Marriage Garden', 'Banquet Halls', 'Premium Services']
    },
    {
      name: 'Mahendra Warehouse',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/galler3.jpg',
      location: 'Village Dobra, 2 KM From Mubarakpur Square, Near Raja Bhoj Airport, Bhopal 462030',
      phone: '07554278331',
      type: 'Warehouse',
      status: 'Current',
      slug: 'mahendra-warehouse',
      icon: Warehouse,
      features: ['Logistics Hub', 'Modern Facilities', 'Strategic Location']
    }
  ]

  const categories = [
    { name: 'All Projects', value: 'all', count: projects.length },
    { name: 'Residential', value: 'Residential', count: projects.filter(p => p.type === 'Residential').length },
    { name: 'Commercial', value: 'Commercial', count: projects.filter(p => p.type === 'Commercial').length },
    { name: 'Warehouse', value: 'Warehouse', count: projects.filter(p => p.type === 'Warehouse').length },
    { name: 'Hospitality', value: 'Hospitality', count: projects.filter(p => p.type === 'Hospitality').length }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Discover our premium developments across Bhopal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white shadow-lg -mt-12 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-8">
            {categories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-1">
                  {category.count}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-100 to-blue-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  {/* Fallback icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <project.icon size={100} className="text-primary-600" />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-700">
                      {project.type}
                    </span>
                    <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold">
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {project.name}
                  </h3>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-2 text-gray-600">
                      <MapPin className="flex-shrink-0 text-primary-600 mt-1" size={18} />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Phone className="flex-shrink-0 text-primary-600" size={18} />
                      <a href={`tel:${project.phone}`} className="text-sm hover:text-primary-600 transition-colors">
                        {project.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="flex-1 bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <a 
                      href={`tel:${project.phone}`}
                      className="px-4 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                    >
                      <Phone size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with our team to discuss custom solutions and upcoming projects
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl">
                Contact Us
              </Link>
              <a href="tel:07554278331" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all">
                Call: 0755-4278331
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

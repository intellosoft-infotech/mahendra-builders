import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      name: 'Mahendra Ample Park',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/main_page.jpg',
      location: 'Salaiya, Ahead of E-8 Extn. Bhopal 462026',
      phone: '9589011668',
      type: 'Residential',
      status: 'Current',
      slug: 'mahendra-ample-park'
    },
    {
      name: 'Mahendra Shipra',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/shipra_plan1.jpg',
      location: 'Mahendra Township Phase-1, E-8 Extn. Bawadia Kalan, Bhopal 462039',
      phone: '7024143668',
      type: 'Residential',
      status: 'Current',
      slug: 'mahendra-shipra'
    },
    {
      name: 'Mahendra Business Square',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/plan3-2.jpg',
      location: 'Mahendra Township Phase-1, E-8 Extn. Bawadia Kalan, Bhopal 462039',
      phone: '7024143668',
      type: 'Commercial',
      status: 'Current',
      slug: 'mahendra-business-square'
    },
    {
      name: 'Mahendra Medi Square',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/medi_plan3.jpg',
      location: 'Bawadiya Kalan Rd, Kolar Rd, Bhopal, Madhya Pradesh 462010',
      phone: '7024143668',
      type: 'Commercial',
      status: 'Current',
      slug: 'mahendra-medi-square'
    },
    {
      name: 'Mahendra Ample Business Park',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/ma_about3.jpg',
      location: 'In front of Mahendra Ample Park, E-8 Extn., Salaiya, Bhopal 462026',
      phone: '9589011668',
      type: 'Commercial',
      status: 'Current',
      slug: 'mahendra-ample-business-park'
    },
    {
      name: 'Mahendra Greenwoods',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2020/12/mgg2.jpg',
      location: 'Jatkhedi, Bhopal, Madhya Pradesh 462026',
      phone: '9303356668',
      type: 'Residential',
      status: 'Current',
      slug: 'mahendra-greenwoods'
    },
    {
      name: 'Mahendra Utsav',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/post_plan.jpg',
      location: 'Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462039',
      phone: '8435000627',
      type: 'Hospitality',
      status: 'Current',
      slug: 'mahendra-utsav'
    },
    {
      name: 'Mahendra Warehouse',
      image: 'https://mahendrabuilders.com/wp-content/uploads/2021/03/galler3.jpg',
      location: 'Village Dobra, 2 KM From Mubarakpur Square, Near Raja Bhoj Airport, Bhopal 462030',
      phone: '07554278331',
      type: 'Warehouse',
      status: 'Current',
      slug: 'mahendra-warehouse'
    }
  ]

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover our premium developments across Bhopal, from residential townships to commercial spaces
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift scale-on-scroll"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-700">
                    {project.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {project.name}
                </h3>
                
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
                    className="flex-1 bg-primary-700 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <a 
                    href={`tel:${project.phone}`}
                    className="px-4 py-3 border-2 border-primary-700 text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/projects"
            className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-4"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

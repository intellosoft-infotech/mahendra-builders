import { Home, Shield, Palette, TreePine, Zap, Droplet, Car, Wifi } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Home,
      title: 'Duplex Layout',
      description: 'Single-family homes built in two floors with modern amenities, one kitchen & dining area for comfortable family living.'
    },
    {
      icon: Shield,
      title: 'High-Level Security',
      description: 'Advanced building and site access control systems, residence hall and campus security ensuring complete peace of mind.'
    },
    {
      icon: Palette,
      title: 'Premium Finishes',
      description: 'Royale Luxury Emulsion with smooth, soft-to-touch finish and water beading properties for long-lasting beauty.'
    },
    {
      icon: TreePine,
      title: 'Large Playgrounds',
      description: 'Spacious recreational areas with modern play equipment, perfect for children and families to enjoy outdoor activities.'
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: '24/7 power backup systems ensuring uninterrupted electricity supply for all your needs and emergencies.'
    },
    {
      icon: Droplet,
      title: 'Water Supply',
      description: 'Consistent 24-hour water supply with advanced filtration and storage systems for pure, clean water.'
    },
    {
      icon: Car,
      title: 'Ample Parking',
      description: 'Dedicated parking spaces with covered and open parking options for residents and visitors alike.'
    },
    {
      icon: Wifi,
      title: 'Smart Connectivity',
      description: 'High-speed internet infrastructure and smart home ready installations for modern digital living.'
    }
  ]

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Premium Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Property <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600">
            Our goal is to provide the most convenient and luxurious living in the heart of the city with world-class amenities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-500 hover-lift scale-on-scroll"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary-700 group-hover:to-primary-900 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <feature.icon className="text-primary-700 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal">
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-gradient-to-r from-primary-50 to-blue-50 p-8 rounded-2xl hover-lift">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to find your dream property?
              </h3>
              <p className="text-gray-600">
                Explore our premium projects and experience luxury living
              </p>
            </div>
            <div className="flex items-center">
              <a href="/projects" className="btn-primary whitespace-nowrap">
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

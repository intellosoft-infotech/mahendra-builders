'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, Building2, Home, Warehouse, Users } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects', icon: Building2 },
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
    { id: 'warehouse', name: 'Warehouse', icon: Warehouse },
    { id: 'events', name: 'Events', icon: Users }
  ]

  const galleryImages = [
    {
      id: 1,
      src: 'https://mahendrabuilders.com/wp-content/uploads/2021/04/ample-park.jpg',
      title: 'Mahendra Ample Park',
      category: 'residential',
      description: 'Premium residential development in Salaiya'
    },
    {
      id: 2,
      src: 'https://mahendrabuilders.com/wp-content/uploads/2021/04/bussiness-square.jpg',
      title: 'Business Square',
      category: 'commercial',
      description: 'Modern commercial complex'
    },
    {
      id: 3,
      src: 'https://mahendrabuilders.com/wp-content/uploads/2021/04/ample-bussiness-park.jpg',
      title: 'Ample Business Park',
      category: 'commercial',
      description: 'State-of-the-art business park'
    },
    {
      id: 4,
      src: 'https://mahendrabuilders.com/wp-content/uploads/2021/04/WARE-HOUSE.jpg',
      title: 'Mahendra Warehouse',
      category: 'warehouse',
      description: 'Strategic logistics solution'
    },
    {
      id: 5,
      src: 'https://mahendrabuilders.com/wp-content/uploads/2021/04/UTSAV.jpg',
      title: 'Mahendra Utsav',
      category: 'events',
      description: 'Premium hospitality venue'
    },
    {
      id: 6,
      src: 'https://mahendrabuilders.com/wp-content/uploads/2021/04/sipra-project.jpg',
      title: 'Mahendra Shipra',
      category: 'residential',
      description: 'Modern township development'
    },
    {
      id: 7,
      src: 'https://mahendrabuilders.com/wp-content/uploads/2021/04/medi-square.jpg',
      title: 'Medi Square',
      category: 'commercial',
      description: 'Healthcare & commercial hub'
    },
    {
      id: 8,
      src: 'https://mahendrabuilders.com/wp-content/uploads/2021/04/green-wood.jpg',
      title: 'Mahendra Greenwoods',
      category: 'residential',
      description: 'Eco-friendly living spaces'
    }
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm-6.485 0l15.556 15.556L39.657 17 24.1 1.414h-2.586zm13.97 0L54.627 15.142l-1.414 1.414L38.07 1.414h-2.586zm-27.97 0L.373 15.142 1.787 16.556 16.485 1.858v-1.858h-.97zm40.627 0L60 7.858v1.414L53.142 16.8 51.727 15.384 60 7.112V0h-1.858zm.03 0L52.2 0h3.83V3.83L50.515.03zm-48.002 0L0 3.83V0h3.83L.03.03zm15.557 0l-1.414 1.414L0 16.556v-1.414L15.556 0h.97zm17.728 0l1.414 1.414L60 16.556v-1.414L31.272 0h-.97zm11.313 0l-1.414 1.414L60 26.556v-1.414L31.556 0h.97zm-27.556 0L0 26.556v-1.414L14.828 0h-.97z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container-custom">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Project Gallery
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Explore our portfolio of landmark developments across Bhopal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <category.icon size={20} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all card-hover cursor-pointer bg-white"
                onClick={() => setSelectedImage(image)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-white/90">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="text-white" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Building2 className="mx-auto text-gray-300 mb-4" size={64} />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="text-white" size={24} />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-xl text-white/80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Happy Families</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-white/80">Locations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">35+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Building2, Award, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      fallbackGradient: 'from-blue-600 to-blue-800',
      title: 'Building Dreams, Creating Landmarks',
      subtitle: 'Excellence in Real Estate Development Since 1990',
      cta: 'Explore Projects',
      link: '/projects'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
      fallbackGradient: 'from-primary-700 to-primary-900',
      title: 'Modern Commercial Spaces',
      subtitle: 'Strategic Business Solutions in Prime Locations',
      cta: 'View Commercial',
      link: '/projects'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
      fallbackGradient: 'from-purple-600 to-purple-800',
      title: 'Residential Excellence',
      subtitle: 'Luxurious Living in the Heart of Bhopal',
      cta: 'Discover Homes',
      link: '/projects'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80',
      fallbackGradient: 'from-green-600 to-green-800',
      title: 'Green Living Spaces',
      subtitle: 'Sustainable Communities for Modern Families',
      cta: 'Learn More',
      link: '/about'
    },
    {
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80',
      fallbackGradient: 'from-indigo-600 to-indigo-800',
      title: 'Premium Infrastructure',
      subtitle: 'World-Class Amenities & Modern Architecture',
      cta: 'View Gallery',
      link: '/gallery'
    },
    {
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&q=80',
      fallbackGradient: 'from-orange-600 to-orange-800',
      title: 'Luxury Redefined',
      subtitle: 'Experience Premium Living with Unmatched Quality',
      cta: 'Explore Luxury',
      link: '/projects'
    },
    {
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
      fallbackGradient: 'from-teal-600 to-teal-800',
      title: 'Your Dream Home Awaits',
      subtitle: 'Thoughtfully Designed Spaces for Modern Living',
      cta: 'Find Your Home',
      link: '/projects'
    },
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80',
      fallbackGradient: 'from-rose-600 to-rose-800',
      title: 'Smart Investments',
      subtitle: 'Prime Properties in Bhopal\'s Best Locations',
      cta: 'Invest Now',
      link: '/contact'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Changed to 6 seconds for better viewing time
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const stats = [
    { icon: Building2, value: '30+', label: 'Projects Completed' },
    { icon: Award, value: '35+', label: 'Years Experience' },
    { icon: Users, value: '5000+', label: 'Happy Families' },
    { icon: TrendingUp, value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="relative min-h-screen h-auto sm:h-screen overflow-hidden">
      {/* Carousel */}
      <div className="relative w-full min-h-[500px] sm:h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.fallbackGradient}`}></div>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover animate-ken-burns"
                priority={index === 0}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container-custom">
                <div className="max-w-3xl px-4 sm:px-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-slide-up opacity-0" style={{ animation: 'slideUp 1s ease-out forwards', animationDelay: '0.2s' }}>
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 animate-slide-up opacity-0" style={{ animation: 'slideUp 1s ease-out forwards', animationDelay: '0.4s' }}>
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-slide-up opacity-0" style={{ animation: 'slideUp 1s ease-out forwards', animationDelay: '0.6s' }}>
                    <Link href={slide.link} className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
                      {slide.cta}
                    </Link>
                    <Link href="/contact" className="bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 text-center text-sm sm:text-base lg:text-lg">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all group z-10"
        >
          <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all group z-10"
        >
          <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative w-full bg-white/95 backdrop-blur-sm shadow-2xl">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="p-2 sm:p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                    <stat.icon className="text-primary-600" size={24} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

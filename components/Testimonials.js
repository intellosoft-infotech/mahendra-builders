'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Home Owner - Mahendra Ample Park',
      content: 'Mahendra Builders delivered exactly what they promised. The quality of construction, timely delivery, and post-sales support has been exceptional. Our family is extremely happy with our new home.',
      rating: 5,
      image: 'RS'
    },
    {
      name: 'Priya Patel',
      role: 'Business Owner - Mahendra Business Square',
      content: 'The strategic location and modern amenities make Mahendra Business Square perfect for our business. The professional approach and transparency throughout the process was remarkable.',
      rating: 5,
      image: 'PP'
    },
    {
      name: 'Amit Verma',
      role: 'Resident - Mahendra Greenwoods',
      content: 'Living in Mahendra Greenwoods has been a wonderful experience. The green surroundings, security, and community feel make it a perfect place for families. Highly recommended!',
      rating: 5,
      image: 'AV'
    },
    {
      name: 'Sunita Jain',
      role: 'Investor - Multiple Projects',
      content: 'I have invested in multiple Mahendra Builder projects and each one has exceeded expectations in terms of quality and returns. Their commitment to excellence is evident in every project.',
      rating: 5,
      image: 'SJ'
    },
    {
      name: 'Vikram Singh',
      role: 'Home Owner - Mahendra Shipra',
      content: 'The attention to detail and quality finishes in Mahendra Shipra are outstanding. The team was always responsive and ensured all our requirements were met. Truly a premium living experience.',
      rating: 5,
      image: 'VS'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                        <Quote className="text-white" size={28} />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-accent-400 fill-accent-400" size={24} />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.image}
                        </span>
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white shadow-xl p-3 rounded-full hover:bg-primary-50 transition-all group"
          >
            <ChevronLeft className="text-gray-700 group-hover:text-primary-600" size={28} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white shadow-xl p-3 rounded-full hover:bg-primary-50 transition-all group"
          >
            <ChevronRight className="text-gray-700 group-hover:text-primary-600" size={28} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-primary-700 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Customer Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-primary-700 mb-2">5000+</div>
            <div className="text-gray-600 font-medium">Happy Families</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-primary-700 mb-2">30+</div>
            <div className="text-gray-600 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl">
            <div className="text-4xl font-bold text-primary-700 mb-2">4.9/5</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}

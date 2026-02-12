'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ images, initialIndex = 0 }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyPress = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, currentIndex])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => openLightbox(idx)}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group animate-scale-in cursor-pointer"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <Image
              src={image}
              alt={`Gallery ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm animate-fade-in"
            onClick={closeLightbox}
          ></div>

          {/* Close Button - Top Right */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group backdrop-blur-sm"
            aria-label="Close gallery"
          >
            <X className="text-white w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Image Counter - Top Left */}
          <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
            <span className="text-white text-sm font-semibold">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Main Content Container */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
            
            {/* Main Image Container */}
            <div className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={images[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                  quality={95}
                />
              </div>
            </div>

            {/* Navigation Arrows - Left */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm group z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            {/* Navigation Arrows - Right */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm group z-10"
              aria-label="Next image"
            >
              <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Thumbnail Strip - Bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-10">
              <div className="flex items-center justify-center gap-2 p-3 bg-black/40 backdrop-blur-md rounded-2xl overflow-x-auto scrollbar-hide">
                <div className="flex gap-2">
                  {images.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`flex-shrink-0 relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        idx === currentIndex
                          ? 'border-white scale-110 shadow-lg shadow-white/30'
                          : 'border-white/20 hover:border-white/60 hover:scale-105'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                      {idx === currentIndex && (
                        <div className="absolute inset-0 bg-white/20"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Keyboard Navigation Hint */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:block z-10">
              <p className="text-white/60 text-xs font-medium text-center px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full">
                Use ← → arrow keys to navigate • Press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
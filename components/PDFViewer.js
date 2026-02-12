'use client'

import { useState, useEffect } from 'react'
import { X, Download, Maximize2, Minimize2, FileText } from 'lucide-react'

export default function PDFViewerEnhanced({ isOpen, onClose, pdfUrl, title }) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <>
      {/* Backdrop with animation */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] animate-fadeIn"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.2s ease-out'
        }}
      ></div>

      {/* Modal with slide-up animation on mobile */}
      <div 
        className={`fixed z-[9999] bg-white flex flex-col overflow-hidden transition-all duration-300 ease-out ${
          isFullscreen 
            ? 'inset-0' 
            : 'inset-0 sm:inset-6 md:inset-10 lg:inset-16 xl:inset-20 sm:rounded-xl md:rounded-2xl shadow-2xl'
        }`}
        style={{
          animation: isMobile ? 'slideUp 0.3s ease-out' : 'scaleIn 0.2s ease-out'
        }}
      >
        {/* Gradient Header */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 flex items-center justify-between shadow-xl flex-shrink-0">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
          
          <div className="flex items-center space-x-3 flex-1 min-w-0 relative z-10">
            {/* Icon */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            
            {/* Title */}
            <div className="flex-1 min-w-0">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white truncate">
                {title}
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 hidden sm:block">
                {isMobile ? 'Tap to view' : 'Click to interact with PDF'}
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0 relative z-10">
            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2 sm:p-2.5 hover:bg-white/20 active:bg-white/30 rounded-lg transition-all duration-200 group"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? (
                <Minimize2 className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
              ) : (
                <Maximize2 className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
              )}
            </button>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 hover:bg-red-500/80 active:bg-red-600 rounded-lg transition-all duration-200 group"
              title="Close (ESC)"
            >
              <X className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
          {/* Loading State */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 z-10">
            <div className="text-center px-4">
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
                <div className="w-16 h-16 border-4 border-blue-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base font-medium mb-2">Loading PDF Document</p>
              <p className="text-gray-500 text-xs sm:text-sm">Please wait...</p>
            </div>
          </div>

          {/* PDF iFrame - Enhanced for mobile */}
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH&zoom=page-fit`}
            className="w-full h-full border-none absolute inset-0 z-20"
            title={title}
            loading="eager"
            allow="fullscreen"
          />
        </div>

        {/* Modern Footer */}
        <div className="bg-white border-t border-gray-200 px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 shadow-2xl flex-shrink-0">
          {/* Info Section */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 order-2 sm:order-1">
            <div className="hidden lg:flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Press ESC or click outside to close</span>
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">{isMobile ? 'Tap' : 'Click'} outside to close</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 order-1 sm:order-2 w-full sm:w-auto">
            {/* Download Button - Primary */}
            <a
              href={pdfUrl}
              download
              className="flex-1 sm:flex-initial bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-95 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 text-sm sm:text-base group"
            >
              <Download size={18} className="flex-shrink-0 group-hover:animate-bounce" />
              <span>Download PDF</span>
            </a>

            {/* Open in New Tab - Secondary (Desktop only) */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-700 px-4 py-3 rounded-xl font-medium transition-all duration-200 items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>
      </div>

      {/* Add animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
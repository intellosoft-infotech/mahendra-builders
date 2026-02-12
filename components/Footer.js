  'use client'

  import Link from 'next/link'
  import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Download } from 'lucide-react'
  import Image from 'next/image'
  import { useState } from 'react'
  import PDFViewer from './PDFViewer'

  export default function Footer() {
    const [isPDFOpen, setIsPDFOpen] = useState(false)
    const currentYear = new Date().getFullYear()

    const quickLinks = [
      { name: 'Our Mission', href: '/our-mission' },
      { name: 'Our Vision', href: '/our-vision' },
      { name: 'Career With Us', href: '/career' },
      // { name: 'Gallery', href: '/gallery' },
      { name: 'Contact Us', href: '/contact' }
    ]

    const projects = [
      { name: 'Mahendra Ample Park', href: '/projects/mahendra-ample-park' },
      { name: 'Mahendra Green Woods', href: '/projects/mahendra-greenwoods' },
      { name: 'Mahendra Medi Square', href: '/projects/mahendra-medi-square' },
      { name: 'Mahendra Warehouse', href: '/projects/mahendra-warehouse' }
      
    ]

    const businessUnits = [
      { name: 'Real Estate', href: '/projects' },
      { name: 'Petrol Pump', href: '/ventures/mahendra-fuel-point' },
      { name: 'Warehouse & Logistics', href: '/ventures/mahendra-warehouse' },
      { name: 'Hospitality', href: '/ventures/kasturi-hospitality' },
      { name: 'Agro-Service', href: '/ventures/mahendra-agro-services' }
    ]

    return (
      <>
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Main Footer */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-16 h-16 bg-white opacity-[1] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <Image src="/logo.png" alt="Mahendra Builders Logo" width={55} height={55} className="object-contain" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-200 leading-none">
                    Mahendra Builders
                  </h1>
                  <p className="text-xs mt-[4px] text-gray-300">Building Dreams Since 1990</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 mt-4 leading-relaxed">
                A professionally managed ISO 9001:2008 certified group in real estate business, combining vision, strength, and excellence in every project.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors inline-flex items-center group"
                    >
                      <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Projects */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Our Projects</h4>
              <ul className="space-y-3">
                {projects.map((project, index) => (
                  <li key={index}>
                    <Link 
                      href={project.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors inline-flex items-center group"
                    >
                      <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-300 text-sm">
                    Block - 1, Mahendra Business Square,<br />
                    E-8 Extn Bawaria Kalan,<br />
                    Bhopal, Madhya Pradesh
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary-400 flex-shrink-0" size={20} />
                  <a href="tel:07554278331" className="text-gray-300 hover:text-primary-400 transition-colors">
                    0755-4278331
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                  <a href="mailto:mahendrabuliders@rediffmail.com" className="text-gray-300 hover:text-primary-400 transition-colors break-all text-sm">
                    mahendrabuliders@rediffmail.com
                  </a>
                </div>
              
              </div>
            </div>
          </div>

          {/* Business Units */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h4 className="text-lg font-bold mb-4 text-white">Our Business Units</h4>
            <div className="flex flex-wrap gap-3">
              {businessUnits.map((unit, index) => (
                <Link
                  key={index}
                  href={unit.href}
                  className="px-4 py-2 bg-white/10 rounded-lg text-sm text-gray-300 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  {unit.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Mahendra Builders & Developers. All Rights Reserved. | ISO 9001:2008 Certified
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <button 
                  onClick={() => setIsPDFOpen(true)}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Terms & Conditions & Privacy Policy
                </button>
                {/* <span className="text-gray-600">|</span>
                <Link href="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Sitemap
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
          <a
            href="https://web.whatsapp.com/send?phone=+918085328281&text=Hello, Mahendra Builders"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="text-white" size={24} />
          </a>
          <a
            href="tel:07554278331"
            className="w-14 h-14 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
            title="Call Us"
          >
            <Phone className="text-white" size={24} />
          </a>
        </div>
      </footer>

        <PDFViewer 
          isOpen={isPDFOpen}
          onClose={() => setIsPDFOpen(false)}
          pdfUrl="/Terms_and_Conditions_Privacy_Policy_Medium_Style.pdf"
          title="Terms & Conditions and Privacy Policy"
        />
      </>
    )
  }

  function MessageSquare({ size, className }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  }

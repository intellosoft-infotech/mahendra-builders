'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      dropdown: [
        { name: 'Our Mission', href: '/our-mission' },
        { name: 'Our Vision', href: '/our-vision' },
        { name: 'Our Team', href: '/team' },
      ],
    },
    { name: 'Our Projects', href: '/projects' },
    {
      name: 'Our Ventures',
      href: '#',
      dropdown: [
        { name: 'Mahendra Fuel Point', href: '/ventures/mahendra-fuel-point' },
        { name: 'Mahendra Warehouse', href: '/ventures/mahendra-warehouse' },
        { name: 'Mahendra Agro Services', href: '/ventures/mahendra-agro-services' },
        { name: 'Tridev Logistics and Warehousing Park', href: '/ventures/tridev-logistics-warehousing' },
        { name: 'Hotel Tulip Inn', href: '/ventures/hotel-tulip-inn' },
        { name: 'Kasturi Hospitality', href: '/ventures/kasturi-hospitality' },
        {
          name: 'Intellosoft Infotech Private Limited',
          href: 'https://www.intellosoft.io/',
          external: true,
        },
      ],
    },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/logo.png"
                alt="Mahendra Builders Logo"
                width={55}
                height={55}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 leading-none">
                Mahendra Builders
              </h1>
              <p className="text-xs text-gray-500">
                Building Dreams Since 1990
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors flex items-center space-x-1"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={16}
                        className="group-hover:rotate-180 transition-transform"
                      />
                    </button>

                    <div
                      className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.dropdown.map((item) =>
                        item.external ? (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name
                          )
                        }
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg font-medium flex items-center justify-between"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {activeDropdown === link.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {link.dropdown.map((item) =>
                            item.external ? (
                              <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </a>
                            ) : (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 text-gray-600 hover:bg-primary-50 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                href="/contact"
                className="btn-primary mt-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

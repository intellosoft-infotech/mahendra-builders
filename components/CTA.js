import Link from 'next/link'
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12 reveal">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Build Your Dream?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Get in touch with our experts and discover the perfect property for you
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Phone, title: 'Call Us', subtitle: 'Monday - Saturday', info: '0755-4278331', link: 'tel:07554278331' },
              { icon: Mail, title: 'Email Us', subtitle: 'Quick Response', info: 'mahendrabuliders@rediffmail.com', link: 'mailto:mahendrabuliders@rediffmail.com' },
              { icon: MessageSquare, title: 'WhatsApp', subtitle: 'Instant Connect', info: '+91 8085328281', link: 'https://web.whatsapp.com/send?phone=+918085328281&text=Hello, Mahendra Builders' }
            ].map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover-lift scale-on-scroll group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <method.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-white/80 text-sm mb-2">{method.subtitle}</p>
                  <p className="text-white font-bold text-sm break-all">{method.info}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 inline-flex items-center space-x-2"
            >
              <span>Schedule a Site Visit</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/projects"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all inline-flex items-center space-x-2"
            >
              <span>Browse Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-white/80 text-sm">
              <strong className="text-white">Office Hours:</strong> Monday - Saturday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

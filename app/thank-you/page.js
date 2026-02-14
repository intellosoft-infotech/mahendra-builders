'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Home, Phone, ArrowRight, Mail, Building2 } from 'lucide-react'
import { Suspense } from 'react'

function ThankYouContent() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type') || 'contact'

    const messages = {
        contact: {
            title: 'Message Sent Successfully!',
            subtitle: 'Thank you for reaching out to us',
            description: 'Our team will review your message and get back to you within 24-48 hours. We appreciate your interest in Mahendra Builders.',
            icon: Mail
        },
        enquiry: {
            title: 'Enquiry Submitted!',
            subtitle: 'Thank you for your interest',
            description: 'Our property experts will contact you shortly with all the details you need. We look forward to helping you find your perfect property.',
            icon: Building2
        },
        career: {
            title: 'Application Received!',
            subtitle: 'Thank you for applying',
            description: 'Our HR team will review your application and resume. If your profile matches our requirements, we will contact you for the next steps.',
            icon: CheckCircle
        }
    }

    const content = messages[type] || messages.contact
    const Icon = content.icon

    return (
        <div className="min-h-screen bg-gradient-to-br py-5 from-gray-50 via-white to-primary-50 flex items-center justify-center px-4">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative max-w-2xl w-full text-center">
                {/* Success Animation */}
                <div className="mb-8 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-green-100 rounded-full animate-ping opacity-20"></div>
                    </div>
                    <div className="relative w-28 h-28 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-200">
                        <CheckCircle className="text-white" size={56} strokeWidth={2.5} />
                    </div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                        <Icon className="text-primary-600" size={32} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {content.title}
                    </h1>

                    <p className="text-xl text-primary-600 font-semibold mb-4">
                        {content.subtitle}
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                        {content.description}
                    </p>

                    {/* Contact Info */}
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 mb-8">
                        <p className="text-gray-700 font-medium mb-4">Need immediate assistance?</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="tel:07554278331"
                                className="flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold transition-colors"
                            >
                                <Phone size={20} />
                                <span>0755-4278331</span>
                            </a>
                            <span className="hidden sm:block text-gray-300">|</span>
                            <a
                                href="mailto:mahendrabuilders@rediffmail.com"
                                className="flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold transition-colors"
                            >
                                <Mail size={20} />
                                <span>mahendrabuilders@rediffmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="btn-primary flex items-center gap-2 px-8 py-4"
                        >
                            <Home size={20} />
                            <span>Back to Home</span>
                        </Link>
                        <Link
                            href="/projects"
                            className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all flex items-center gap-2"
                        >
                            <span>Explore Projects</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="mt-8 text-gray-500 text-sm">
                    You will receive a confirmation email shortly at your registered email address.
                </p>
            </div>
        </div>
    )
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full"></div>
            </div>
        }>
            <ThankYouContent />
        </Suspense>
    )
}

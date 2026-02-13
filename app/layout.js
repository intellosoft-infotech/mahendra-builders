
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Mahendra Builders - Leading Property Developers in Bhopal',
  description: 'Mahendra Builders is a professionally managed ISO 9001:2008 certified group in real estate, specializing in township developments, warehousing, hospitality, and petroleum franchise dealership.',
  keywords: 'Mahendra Builders, Bhopal real estate, property developers, township development, warehouse, hospitality',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

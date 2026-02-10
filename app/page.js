import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Projects from '@/components/Projects'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Stats />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  )
}

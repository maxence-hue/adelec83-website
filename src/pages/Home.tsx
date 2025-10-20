import { useEffect } from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}

export default Home

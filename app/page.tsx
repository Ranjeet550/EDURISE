import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import SpecialOffer from '@/components/SpecialOffer'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StructuredData />
      <Header />
      <Hero />
      <Courses />
      <WhyUs />
      <Testimonials />
      <SpecialOffer />
      <Contact />
      <Footer />
    </main>
  )
}

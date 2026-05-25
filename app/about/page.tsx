import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata = {
  title: 'About Edu Rise - Our Story & Mission',
  description: 'Learn about Edu Rise coaching institute, our mission, values, and commitment to student success.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <StructuredData />
      <Header />
      <About />
      <Footer />
    </main>
  )
}

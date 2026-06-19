'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryImages = [
    {
      id: 1,
      category: 'classes',
      title: 'Classroom Learning',
      src: '/HERO/pexels-ebahir-34086213.jpg',
      description: 'Interactive classroom sessions'
    },
    {
      id: 2,
      category: 'classes',
      title: 'Digital Board Classes',
      src: '/HERO/pexels-george-milton-7034613.jpg',
      description: 'Modern digital learning experience'
    },
    {
      id: 3,
      category: 'events',
      title: 'Student Events',
      src: '/HERO/pexels-martabranco-32046500.jpg',
      description: 'Fun learning activities'
    },
    {
      id: 4,
      category: 'campus',
      title: 'Campus Tour',
      src: '/images/logo.jpg',
      description: 'Beautiful campus facilities'
    },
    {
      id: 5,
      category: 'classes',
      title: 'Lab Sessions',
      src: '/HERO/pexels-ebahir-34086213.jpg',
      description: 'Hands-on practical learning'
    },
    {
      id: 6,
      category: 'events',
      title: 'Annual Awards',
      src: '/HERO/pexels-george-milton-7034613.jpg',
      description: 'Celebrating student achievements'
    },
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'classes', label: 'Classes' },
    { id: 'events', label: 'Events' },
    { id: 'campus', label: 'Campus' },
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-primary-50 min-h-screen pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore moments from our coaching institute. See our classrooms, events, and campus facilities.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg'
                    : 'bg-white text-neutral-700 border-2 border-accent-200 hover:border-accent-500'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden bg-neutral-100">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 text-lg font-semibold">
                      View
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-neutral-800 mb-2">{image.title}</h3>
                  <p className="text-sm text-neutral-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

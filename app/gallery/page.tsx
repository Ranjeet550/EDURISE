'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      id: 1,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141234_052.jpg.jpeg',
      description: 'Exciting event moments'
    },
    {
      id: 2,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141252_117.jpg.jpeg',
      description: 'Student engagement and participation'
    },
    {
      id: 3,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141255_952.jpg.jpeg',
      description: 'Fun learning activities'
    },
    {
      id: 4,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141259_220.jpg.jpeg',
      description: 'Interactive sessions'
    },
    {
      id: 5,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141301_138.jpg.jpeg',
      description: 'Student achievements'
    },
    {
      id: 6,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141305_352.jpg.jpeg',
      description: 'Celebrating success'
    },
    {
      id: 7,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141314_590.jpg.jpeg',
      description: 'Community engagement'
    },
    {
      id: 8,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141317_607.jpg.jpeg',
      description: 'Memorable moments'
    },
    {
      id: 9,
      category: 'events',
      title: 'Gallery Image',
      src: '/eventsimage/IMG_20260619_141321_249.jpg.jpeg',
      description: 'Team spirit and collaboration'
    },
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'events', label: 'Events' },
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

          {/* Gallery Grid - Clean Mason Style */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.src)}
                className="group break-inside-avoid overflow-hidden rounded-lg cursor-pointer transition duration-300"
              >
                <div className="relative overflow-hidden bg-neutral-100">
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 font-semibold">
                      View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal/Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Gallery preview"
                  width={1000}
                  height={800}
                  className="w-full h-full object-contain"
                />
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-gray-200 transition duration-300 shadow-lg"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Videos Section */}
          <div className="mt-20 pt-16 border-t-2 border-accent-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
                Event Videos
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Watch highlights and moments from our recent events and activities.
              </p>
            </div>

            {/* Videos Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              <div className="group break-inside-avoid overflow-hidden rounded-lg">
                <div className="relative overflow-hidden bg-black">
                  <video
                    width={400}
                    height={300}
                    controls
                    className="w-full h-auto"
                    poster="/eventsimage/IMG_20260619_141234_052.jpg.jpeg"
                  >
                    <source src="/eventvideo/WhatsApp Video 2026-06-19 at 2.20.13 PM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="group break-inside-avoid overflow-hidden rounded-lg">
                <div className="relative overflow-hidden bg-black">
                  <video
                    width={400}
                    height={300}
                    controls
                    className="w-full h-auto"
                    poster="/eventsimage/IMG_20260619_141252_117.jpg.jpeg"
                  >
                    <source src="/eventvideo/WhatsApp Video 2026-06-19 at 2.20.17 PM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="group break-inside-avoid overflow-hidden rounded-lg">
                <div className="relative overflow-hidden bg-black">
                  <video
                    width={400}
                    height={300}
                    controls
                    className="w-full h-auto"
                    poster="/eventsimage/IMG_20260619_141255_952.jpg.jpeg"
                  >
                    <source src="/eventvideo/WhatsApp Video 2026-06-19 at 2.20.31 PM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

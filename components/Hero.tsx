'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const carouselImages = [
    {
      src: '/HERO/pexels-ebahir-34086213.jpg',
      title: 'Smart Learning',
     
    },
    {
      src: '/HERO/pexels-george-milton-7034613.jpg',
      title: 'Personalized',
      
    },
    {
      src: '/HERO/pexels-martabranco-32046500.jpg',
      title: 'Excellence',
      
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  
  const goToSlide = (index: number) => setCurrentSlide(index)
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-200 via-orange-200 to-blue-300 min-h-96 md:min-h-96 flex items-center overflow-hidden rounded-2xl xs:rounded-2xl sm:rounded-3xl m-2 xs:m-2 sm:m-4 lg:m-8 p-4 xs:p-4 sm:p-6 lg:p-8">
      {/* Animated Background Elements - Hidden on Mobile to reduce blur effect */}

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-4 sm:gap-8 lg:gap-12 items-center min-h-80">
          {/* Left Content */}
          <div className="space-y-4 xs:space-y-6 sm:space-y-8 py-8 xs:py-10 sm:py-12 lg:py-0">
            {/* Badge - Mobile optimized */}
            <div className="inline-flex items-center gap-2 bg-gray-100 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 rounded-full border border-gray-300">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              <p className="text-primary-600 text-xs font-bold truncate">🎓 500+ Students</p>
            </div>

            {/* Main Heading - Mobile optimized */}
            <div className="space-y-3 xs:space-y-4">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-primary-600 leading-tight italic tracking-wide">
                Transform Your
                <span className="block bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent font-black italic">
                  Academic Journey
                </span>
              </h1>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-primary-500 max-w-xl leading-relaxed font-semibold tracking-normal">
                Expert coaching for Classes 1-10 with personalized attention, digital board classes, and proven success strategies.
              </p>
            </div>

            

            {/* Trust Indicators - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-2 xs:gap-2 sm:gap-4 pt-3 xs:pt-4 sm:pt-6">
              <div className="text-center xs:text-left">
                <p className="text-base xs:text-lg sm:text-2xl md:text-3xl font-bold text-primary-600">10+</p>
                <p className="text-xs text-primary-500 mt-0.5 truncate">Years</p>
              </div>
              <div className="text-center xs:text-left">
                <p className="text-base xs:text-lg sm:text-2xl md:text-3xl font-bold text-primary-600">500+</p>
                <p className="text-xs text-primary-500 mt-0.5 truncate">Students</p>
              </div>
              <div className="text-center xs:text-left">
                <p className="text-base xs:text-lg sm:text-2xl md:text-3xl font-bold text-primary-600">100%</p>
                <p className="text-xs text-primary-500 mt-0.5 truncate">Success</p>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[500px] items-center justify-center mt-8 lg:mt-0 flex w-full">
            {/* Carousel Container */}
            <div className="relative w-full h-full">
              {/* Carousel Track */}
              <div className="w-full h-full overflow-hidden bg-white rounded-full">
                <div className="relative w-full h-full">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-full object-cover rounded-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-4 rounded-full">
                        <h3 className="text-sm xs:text-base sm:text-lg font-bold text-white">{image.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}

              {/* Dots Indicator */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-primary-600 w-6' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mobile Optimized */}
      <div className="absolute bottom-2 xs:bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-1 xs:gap-1.5 animate-bounce">
          <p className="text-primary-600 text-xs font-bold">Scroll</p>
          <svg className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        /* Smooth carousel transition */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}

'use client'

export default function Hero() {
  const backgroundImage = '/HERO/pexels-ebahir-34086213.jpg'

  return (
    <section 
      className="relative min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-screen flex items-center justify-center overflow-hidden rounded-2xl xs:rounded-2xl sm:rounded-3xl m-1 xs:m-2 sm:m-4 lg:m-8 p-4 xs:p-6 sm:p-8 lg:p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.35) 100%), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center justify-center pt-12 xs:pt-16 sm:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 gap-4 xs:gap-6 sm:gap-8 lg:gap-12 items-center w-full justify-center">
          {/* Left Content */}
          <div className="space-y-3 xs:space-y-5 sm:space-y-8 flex flex-col justify-center items-center text-center max-w-3xl mx-auto w-full">
            {/* Badge - Mobile optimized */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 rounded-full border border-white/40 shadow-lg hover:bg-white/30 transition-all duration-300">
              <span className="w-2.5 h-2.5 xs:w-3 xs:h-3 bg-yellow-300 rounded-full animate-pulse"></span>
              <p style={{ fontFamily: 'var(--font-poppins)' }} className="text-white text-xs xs:text-sm font-bold">🎓 500+ Students</p>
            </div>

            {/* Main Heading - Mobile optimized */}
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="space-y-1 xs:space-y-2 sm:space-y-3">
                <h1 style={{ fontFamily: 'var(--font-playfair)', animationDelay: '0s' }} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent leading-tight xs:leading-tight sm:leading-snug tracking-tight xs:tracking-normal drop-shadow-xl animate-text-falling-staggered">
                  Transform Your
                </h1>
                <h2 style={{ fontFamily: 'var(--font-playfair)', animationDelay: '0.3s' }} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent leading-tight xs:leading-tight sm:leading-snug tracking-tight xs:tracking-normal drop-shadow-lg animate-text-falling-staggered">
                  Future Goals
                </h2>
                <h3 style={{ fontFamily: 'var(--font-playfair)', animationDelay: '0.6s' }} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent leading-tight xs:leading-tight sm:leading-snug tracking-tight xs:tracking-normal drop-shadow-xl animate-text-falling-staggered">
                  Academic Journey
                </h3>
              </div>
              <p style={{ fontFamily: 'var(--font-poppins)' }} className="text-sm xs:text-base sm:text-lg md:text-xl text-white font-bold max-w-2xl leading-relaxed xs:leading-relaxed sm:leading-loose tracking-normal drop-shadow-md bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent ">
                Expert coaching for Classes 1-10 with personalized attention, digital board classes, and proven success strategies.
              </p>
            </div>

            {/* CTA Button - New for Mobile */}
            <div className="flex gap-3 xs:gap-4 pt-2 xs:pt-4 sm:pt-6 w-full justify-center flex-wrap">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-2.5 xs:py-3 px-6 xs:px-8 rounded-lg xs:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs xs:text-sm sm:text-base">
                Get Started
              </button>
              <button className="border-2 border-white/60 hover:border-white text-white font-bold py-2.5 xs:py-3 px-6 xs:px-8 rounded-lg xs:rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-xs xs:text-sm sm:text-base">
                Learn More
              </button>
            </div>

            {/* Trust Indicators - Mobile Optimized */}
            <div className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6 pt-4 xs:pt-6 sm:pt-8 w-full">
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3 xs:p-4 hover:bg-white/10 transition-all duration-300">
                <p style={{ fontFamily: 'var(--font-playfair)' }} className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300 drop-shadow-md">10+</p>
                <p style={{ fontFamily: 'var(--font-poppins)' }} className="text-xs xs:text-sm text-white/90 mt-1 font-semibold">Years</p>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3 xs:p-4 hover:bg-white/10 transition-all duration-300">
                <p style={{ fontFamily: 'var(--font-playfair)' }} className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300 drop-shadow-md">500+</p>
                <p style={{ fontFamily: 'var(--font-poppins)' }} className="text-xs xs:text-sm text-white/90 mt-1 font-semibold">Students</p>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-3 xs:p-4 hover:bg-white/10 transition-all duration-300">
                <p style={{ fontFamily: 'var(--font-playfair)' }} className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-yellow-300 drop-shadow-md">100%</p>
                <p style={{ fontFamily: 'var(--font-poppins)' }} className="text-xs xs:text-sm text-white/90 mt-1 font-semibold">Success</p>
              </div>
            </div>
          </div>

          {/* Right Content - Background Image Area */}
          <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[500px] items-center justify-center mt-8 lg:mt-0 flex w-full invisible lg:visible hidden lg:block">
            {/* This space is reserved for visual balance on larger screens */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Mobile Optimized */}
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden xs:flex">
        <div className="flex flex-col items-center gap-1.5 xs:gap-2 animate-bounce">
          <p style={{ fontFamily: 'var(--font-poppins)' }} className="text-white text-xs xs:text-sm font-bold drop-shadow-md">Scroll</p>
          <svg className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6 text-yellow-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

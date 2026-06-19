'use client'

export default function Hero() {
  return (
    <section className="relative bg-gray-100 min-h-screen md:min-h-screen flex items-center overflow-hidden rounded-2xl xs:rounded-2xl sm:rounded-3xl m-2 xs:m-3 sm:m-4 lg:m-8">
      {/* Animated Background Elements - Hidden on Mobile to reduce blur effect */}

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center min-h-screen">
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

          {/* Right Content - Floating Images - Same view on all devices */}
          <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[500px] items-center justify-center mt-8 lg:mt-0 px-2 xs:px-4 sm:px-0 flex">
            {/* Floating Images Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Floating Image - Center */}
              <div className="absolute w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 rounded-full shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 z-20 animate-float">
                <img 
                  src="/HERO/pexels-ebahir-34086213.jpg" 
                  alt="Smart Learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-2 xs:p-3 sm:p-4 lg:p-6">
                  <h3 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">Smart Learning</h3>
                  <p className="text-xs text-gray-200">Interactive Classes</p>
                </div>
              </div>

              {/* Floating Image 1 - Top Right */}
              <div className="absolute top-0 xs:top-2 sm:top-4 -right-6 xs:-right-4 sm:right-0 md:right-4 lg:right-8 w-32 xs:w-40 sm:w-48 md:w-56 lg:w-60 h-32 xs:h-40 sm:h-48 md:h-56 lg:h-60 rounded-full shadow-xl overflow-hidden transform hover:scale-110 transition duration-300 z-10 animate-float-delay-1">
                <img 
                  src="/HERO/pexels-george-milton-7034613.jpg" 
                  alt="Personalized Learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-2 xs:p-2.5 sm:p-3 lg:p-4">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white">Personalized</h3>
                  <p className="text-xs text-gray-200">1:1 Attention</p>
                </div>
              </div>

              {/* Floating Image 2 - Bottom Left */}
              <div className="absolute bottom-0 xs:bottom-2 sm:bottom-4 -left-6 xs:-left-4 sm:left-0 md:left-4 lg:left-8 w-32 xs:w-40 sm:w-48 md:w-56 lg:w-60 h-32 xs:h-40 sm:h-48 md:h-56 lg:h-60 rounded-full shadow-xl overflow-hidden transform hover:scale-110 transition duration-300 z-10 animate-float-delay-2">
                <img 
                  src="/HERO/pexels-martabranco-32046500.jpg" 
                  alt="Excellence" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-2 xs:p-2.5 sm:p-3 lg:p-4">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white">Excellence</h3>
                  <p className="text-xs text-gray-200">100% Success</p>
                </div>
              </div>

              {/* Glow Effect */}
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
        /* Desktop Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-delay-1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes float-delay-2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        
        @keyframes float-delay-3 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delay-4 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        
        /* Reduced animations for tablets */
        @keyframes float-mobile {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        /* Animation Classes */
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float-delay-1 4s ease-in-out infinite;
        }
        
        .animate-float-delay-2 {
          animation: float-delay-2 3.5s ease-in-out infinite;
        }
        
        .animate-float-delay-3 {
          animation: float-delay-3 2.5s ease-in-out infinite;
        }
        
        .animate-float-delay-4 {
          animation: float-delay-4 3.2s ease-in-out infinite;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .animate-float,
          .animate-float-delay-1,
          .animate-float-delay-2,
          .animate-float-delay-3,
          .animate-float-delay-4 {
            animation: float-mobile 2s ease-in-out infinite;
          }
        }

        /* Smooth scrolling for better mobile experience */
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

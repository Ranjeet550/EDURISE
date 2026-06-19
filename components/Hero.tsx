'use client'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-accent-900 min-h-screen flex items-center overflow-hidden rounded-3xl m-4 sm:m-6 lg:m-8">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 left-10 sm:left-20 w-72 sm:w-96 h-72 sm:h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 py-12 lg:py-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-white border-opacity-20">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              <p className="text-white text-xs sm:text-sm font-semibold">🎓 Join 500+ Successful Students</p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight italic tracking-wide">
                Transform Your
                <span className="block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent font-black italic">
                  Academic Journey
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-neutral-200 max-w-xl leading-relaxed font-light tracking-normal">
                Expert coaching for Classes 1-10 with personalized attention, digital board classes, and proven success strategies. Your path to excellence starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-sm sm:text-base rounded-xl overflow-hidden shadow-2xl hover:shadow-accent-500/50 transition duration-300 w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Get Free Demo Class
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white bg-opacity-10 backdrop-blur-md text-white font-bold text-sm sm:text-base rounded-xl border-2 border-white border-opacity-30 hover:bg-opacity-20 hover:border-opacity-50 transition duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white border-opacity-10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent-400">10+</p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent-400">500+</p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">Happy Students</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-accent-400">100%</p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Images */}
          <div className="relative h-96 sm:h-[500px] md:h-[600px] lg:h-full flex items-center justify-center mt-8 lg:mt-0 px-4 sm:px-0">
            {/* Floating Images Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Floating Image - Center */}
              <div className="absolute w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-full shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 z-20 animate-float">
                <img 
                  src="/HERO/pexels-ebahir-34086213.jpg" 
                  alt="Smart Learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Smart Learning</h3>
                  <p className="text-xs sm:text-sm text-gray-200">Interactive Classes</p>
                </div>
              </div>

              {/* Floating Image 1 - Top Right */}
              <div className="absolute top-8 sm:top-12 -right-8 sm:right-0 md:right-8 w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full shadow-xl overflow-hidden transform hover:scale-110 transition duration-300 z-10 animate-float-delay-1">
                <img 
                  src="/HERO/pexels-george-milton-7034613.jpg" 
                  alt="Personalized Learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-white">Personalized</h3>
                  <p className="text-xs text-gray-200">1:1 Attention</p>
                </div>
              </div>

              {/* Floating Image 2 - Bottom Left */}
              <div className="absolute bottom-8 sm:bottom-12 -left-8 sm:left-0 md:left-8 w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full shadow-xl overflow-hidden transform hover:scale-110 transition duration-300 z-10 animate-float-delay-2">
                <img 
                  src="/HERO/pexels-martabranco-32046500.jpg" 
                  alt="Excellence" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold text-white">Excellence</h3>
                  <p className="text-xs text-gray-200">100% Success</p>
                </div>
              </div>

              

             

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-white text-xs sm:text-sm font-semibold">Scroll to explore</p>
          <svg className="w-5 sm:w-6 h-5 sm:h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  )
}

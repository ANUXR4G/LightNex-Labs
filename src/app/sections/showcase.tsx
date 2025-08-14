'use client'

import { useEffect, useRef } from 'react'
import { Card } from "@/components/ui/card"

export default function Showcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pb-10">
      {/* Responsive heading section */}
      <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-8 sm:mb-16 md:mb-20 lg:mb-28">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-light mb-2 sm:mb-4 text-[#c8c2bd] leading-tight">
          Projects at a Glance
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 md:mt-6 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#86868b]">
          Thousands of people use LightNex Labs to animate websites, product demos, courses, tutorials and social media posts.
        </p>
      </div>

      {/* Responsive Overlapping Screens */}
      <div className="relative w-full flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-10">
        
        {/* Mobile: Single Column Layout */}
        <div className="flex flex-col sm:hidden space-y-6 w-full max-w-sm">
          {/* Mobile Card 1 */}
          <Card className="w-full aspect-video bg-gradient-to-br from-[#86868b] to-[#bdc2c9] rounded-xl shadow-xl border-0 overflow-hidden">
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping1.mp4" type="video/mp4" />
              </video>
            </div>
          </Card>

          {/* Mobile Card 2 */}
          <Card className="w-full aspect-video bg-gradient-to-br from-[#000000] to-[#86868b] shadow-xl border-0 overflow-hidden">
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping2.mp4" type="video/mp4" />
              </video>
            </div>
          </Card>

          {/* Mobile Card 3 */}
          <Card className="w-full aspect-video bg-gradient-to-br from-[#bdc2c9] to-[#e7dfd6] rounded-xl shadow-xl border-0 overflow-hidden">
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping3.mp4" type="video/mp4" />
              </video>
            </div>
          </Card>
        </div>

        {/* Tablet: Two Column Layout */}
        <div className="hidden sm:flex md:hidden flex-col space-y-4 w-full max-w-md">
          <Card className="w-full aspect-video bg-gradient-to-br from-[#86868b] to-[#bdc2c9] rounded-xl shadow-xl border-0 overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping1.mp4" type="video/mp4" />
              </video>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="aspect-video bg-gradient-to-br from-[#000000] to-[#86868b] shadow-xl border-0 overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative w-full h-full">
                <video
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping2.mp4" type="video/mp4" />
                </video>
              </div>
            </Card>

            <Card className="aspect-video bg-gradient-to-br from-[#bdc2c9] to-[#e7dfd6] rounded-xl shadow-xl border-0 overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative w-full h-full">
                <video
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping3.mp4" type="video/mp4" />
                </video>
              </div>
            </Card>
          </div>
        </div>

        {/* Desktop: Original Overlapping Layout */}
        <div className="hidden md:flex items-center justify-center gap-[-2rem] w-full max-w-6xl lg:max-w-7xl scale-90 md:scale-95 lg:scale-100 xl:scale-110">
          {/* Left Screen */}
          <Card className="w-[42%] lg:w-[45%] aspect-video bg-gradient-to-br from-[#86868b] to-[#bdc2c9] rounded-2xl shadow-2xl transform -rotate-2 -translate-x-3 lg:-translate-x-6 hover:rotate-0 hover:scale-105 transition-all duration-300 overflow-hidden z-10 border-0 ml-6 lg:ml-12">
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping1.mp4" type="video/mp4" />
              </video>
            </div>
          </Card>

          {/* Center Screen */}
          <Card className="w-[46%] lg:w-[48%] aspect-video bg-gradient-to-br from-[#000000] to-[#86868b] shadow-2xl transform hover:scale-105 transition-all duration-300 z-20 border-0">
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping2.mp4" type="video/mp4" />
              </video>
            </div>
          </Card>

          {/* Right Screen */}
          <Card className="w-[42%] lg:w-[45%] aspect-video bg-gradient-to-br from-[#bdc2c9] to-[#e7dfd6] rounded-2xl shadow-2xl transform rotate-2 translate-x-3 lg:translate-x-6 hover:rotate-0 hover:scale-105 transition-all duration-300 overflow-hidden z-10 border-0 mr-6 lg:mr-12">
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover rounded-2xl"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://pub-a49ce427d0254ca983d7c77bb50b7846.r2.dev/overlapping3.mp4" type="video/mp4" />
              </video>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

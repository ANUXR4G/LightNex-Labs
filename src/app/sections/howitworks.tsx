import React from 'react'
import Image from 'next/image'

const HowItWorks = () => {
  const cards = [
    {
      title: 'Branding',
      image: '/branding.webp',
      items: [
        'Art Direction',
        'Logo Design',
        'Visual Identity',
        'Brand Style Guide',
        '2D & 3D Motion Design',
        'Collateral Design',
      ],
    },
    {
      title: 'App Development',
      image: '/3d.webp',
      items: [
        'CGI',
        '3D Visual Design',
        'Visual Identity',
        'Product Visualization',
        'Packaging Visualization',
        '3D Motion Design',
      ],
    },
    {
      title: 'Website Development',
      image: '/website.webp',
      items: [
        'Landing Page Design',
        'Web Design',
        'Interaction Design',
        '2D & 3D Motion Design',
        'Framer Development',
      ],
    },
    {
      title: 'SaaS Products',
      image: '/product.webp',
      items: [
        'App Design',
        'Mobile App Design',
        'Interaction Design',
        'Prototyping',
        '2D & 3D Motion Design',
      ],
    },
  ]

  return (
    <section className="space-y-16 sm:space-y-20 md:space-y-28 bg-black text-[#c8c2bd] py-8 sm:py-12 md:py-16 mt-20 sm:mt-28 md:mt-36">
      {/* Header Section */}
      <div className="space-y-6 sm:space-y-8 w-11/12 max-w-[1200px] min-[1800px]:max-w-[1600px] mx-auto px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none font-light">
          Comprehensive ∞ <br className="hidden sm:block" /> 
          Design Capabilities
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-[800px] lg:max-w-[1100px] leading-relaxed">
          We are experts in crafting bold visuals, distinctive brand identities,
          innovative products, and immersive websites. Whether you want to
          elevate your company&apos;s visual language, build an MVP, or explore
          a new idea, we&apos;ll take care of everything.
        </p>
      </div>

      {/* Cards Section */}
      <div className="space-y-8 sm:space-y-12 md:space-y-16 w-11/12 max-w-[1200px] min-[1800px]:max-w-[1600px] mx-auto">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className="group rounded-2xl sm:rounded-3xl lg:rounded-[36px] p-6 sm:p-8 md:p-10 lg:px-20 border border-[#3e393e] hover:border-[#5e535e] transition-all duration-300 hover:scale-[1.02] flex flex-col lg:flex-row gap-6 sm:gap-8 items-start lg:items-center w-full"
            style={{
              background:
                'linear-gradient(rgb(17, 14, 17) 0%, rgb(11, 7, 11) 100%)',
            }}
          >
            {/* Image Section - Now always on the left */}
            <div className="flex-shrink-0 lg:mr-8">
              <div className="relative group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={card.image}
                  width={120}
                  height={120}
                  alt={`${card.title} services`}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Content Section - Now always on the right */}
            <div className="flex-1 space-y-4 sm:space-y-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                {card.title}
              </h3>
              
              {/* Services List */}
              <div className="space-y-2">
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm sm:text-base md:text-lg lg:text-xl">
                  {card.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="flex items-center gap-2">
                      <span className="hover:text-[#fffaf6] transition-colors duration-200">
                        {item}
                      </span>
                      {itemIndex !== card.items.length - 1 && (
                        <span className="text-[#86868b]">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks

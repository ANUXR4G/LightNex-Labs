'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChangelogDialog } from "./changelog-dailog"
import { useState, useEffect } from 'react'
import { UpcomingFeaturesDialog } from './upcoming-features-dialog'
import { Menu, X } from 'lucide-react'

export function SiteHeader() {
  const [showChangelog, setShowChangelog] = useState(false)
  const [showUpcomingFeatures, setUpcomingFeatures] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowBanner(false)
      } else {
        setShowBanner(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu when clicking outside or on links
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed left-0 right-0 z-50 w-full bg-black/60 backdrop-blur-lg transition-all duration-300 ease-in-out border-b border-gray-800/20 ${showBanner ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold text-[#c8c2bd] hover:text-[#fffaf6] transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            LightNex Labs
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[#c8c2bd] hover:bg-gray-700/50 hover:text-[#fffaf6] border-none transition-colors duration-200">
                  Getting Started
                </NavigationMenuTrigger>
                <NavigationMenuContent className='bg-black/95 backdrop-blur-md border-gray-800'>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="group relative flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] p-6 no-underline outline-none focus:shadow-md overflow-hidden transition-all duration-300 hover:from-[#4a4a4a] hover:to-[#2a2a2a]"
                          href="/#"
                        >
                          {/* Golden SVG Background */}
                          <div className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,215,0,0.3)" strokeWidth="0.5" />
                                </pattern>
                                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                                  <rect width="50" height="50" fill="url(#smallGrid)" />
                                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,215,0,0.5)" strokeWidth="1" />
                                </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                          </div>

                          {/* Animated golden circles */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-20 blur-xl animate-pulse"></div>
                            <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-gradient-to-tl from-yellow-200 to-yellow-500 opacity-20 blur-xl animate-pulse [animation-delay:1s]"></div>
                          </div>

                          {/* Content */}
                          <div className="relative z-10">
                            <div className="mb-2 mt-4 text-lg font-medium text-[#e7dfd6]">
                              LightNex Labs
                            </div>
                            <p className="text-sm leading-tight text-[#bdc2c9]">
                              Create Beautiful Animations In Seconds
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/#" title="Introduction">
                      Learn how LightNex Labs can transform your screenshots.
                    </ListItem>
                    <ListItem 
                      title="Upcoming Features" 
                      onClick={(e: { preventDefault: () => void }) => {
                        e.preventDefault()
                        setUpcomingFeatures(true)
                      }}
                    >
                      Read our latest articles and updates about video ad creation.
                    </ListItem>
                    <ListItem 
                      title="Changelog" 
                      onClick={(e: { preventDefault: () => void }) => {
                        e.preventDefault()
                        setShowChangelog(true)
                      }}
                    >
                      Stay up to date with our latest features and improvements.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Sign In Button */}
          <Button
            variant="outline"
            className="hidden lg:inline-flex text-black hover:from-[#bdc2c9] hover:to-[#e7dfd6] bg-gradient-to-r from-[#86868b] to-[#bdc2c9] border-none transition-all duration-200 hover:scale-105"
            onClick={() => window.location.href = '/login'}
          >
            Sign In
          </Button>

          {/* Mobile/Tablet Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleMobileMenuToggle}
            className="lg:hidden text-[#c8c2bd] hover:bg-gray-700/50 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile/Tablet Overlay Menu */}
        <div className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Content */}
          <div className="relative bg-black/95 backdrop-blur-md border-b border-gray-800/20">
            <nav className="px-4 py-6 space-y-1">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link 
                  href="/#" 
                  className="block py-3 px-4 rounded-lg text-[#c8c2bd] hover:bg-gray-700/50 hover:text-[#fffaf6] transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Introduction
                </Link>
                
                <Link 
                  href="/#howitworks" 
                  className="block py-3 px-4 rounded-lg text-[#c8c2bd] hover:bg-gray-700/50 hover:text-[#fffaf6] transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  How it Works?
                </Link>
                
                <button 
                  onClick={() => {
                    setShowUpcomingFeatures(true)
                    closeMobileMenu()
                  }} 
                  className="block w-full text-left py-3 px-4 rounded-lg text-[#c8c2bd] hover:bg-gray-700/50 hover:text-[#fffaf6] transition-colors duration-200"
                >
                  Upcoming Features
                </button>
                
                <button 
                  onClick={() => {
                    setShowChangelog(true)
                    closeMobileMenu()
                  }} 
                  className="block w-full text-left py-3 px-4 rounded-lg text-[#c8c2bd] hover:bg-gray-700/50 hover:text-[#fffaf6] transition-colors duration-200"
                >
                  Changelog
                </button>
              </div>

              {/* Mobile Sign In Button */}
              <div className="pt-4 border-t border-gray-800/20">
                <Button
                  variant="outline"
                  className="w-full text-black hover:from-[#bdc2c9] hover:to-[#e7dfd6] bg-gradient-to-r from-[#86868b] to-[#bdc2c9] border-none transition-all duration-200"
                  onClick={() => {
                    window.location.href = '/login'
                    closeMobileMenu()
                  }}
                >
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Dialogs */}
      <UpcomingFeaturesDialog
        open={showUpcomingFeatures}
        onOpenChange={setUpcomingFeatures}
      />
      <ChangelogDialog
        open={showChangelog}
        onOpenChange={setShowChangelog}
      />
    </>
  )
}

function ListItem({ 
  className = "", 
  title, 
  children, 
  ...props 
}: { 
  className?: string; 
  title: string; 
  children: React.ReactNode; 
  [key: string]: any 
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={`block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-[#c8c2bd]/10 hover:text-[#fffaf6] focus:bg-[#c8c2bd]/10 focus:text-[#fffaf6] cursor-pointer ${className}`}
          {...props}
        >
          <div>
            <div className="text-sm font-medium leading-none text-[#fffaf6]">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-[#c8c2bd] mt-1">{children}</p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

'use client'
import React, { useState } from 'react'
import Container from '@/components/ui/Container'
const About = () => {
  const [] = useState(false)
  return (
    <div className="space-y-16 sm:space-y-24 mx-auto max-w-screen min-[1800px]:max-w-screen bg-black text-[#c8c2bd] p-10 lg:p-64">
      <div className="space-y-4 sm:space-y-12">
        <h4 className="text-[20px] sm:text-[38px] ">
          <span className="text-primaryPurple">(</span>
          Who stands behind your designs?
          <span className="text-primaryPurple">)</span>
        </h4>
        <h3 className="text-[30px] sm:text-[50px] lg:text-[75px] leading-none">
          Design driven <span className="text-primaryPurple">power duo</span>{' '}
          with over 20 years of combined experience
        </h3>
      </div>
          <Container />
    </div>
  )
}
export default About

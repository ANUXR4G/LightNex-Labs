import React from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import MinDost from "../../../public/MinDost.png"
import Mageui from "../../../public/mageui.png"


const SelectedProjects = () => {
  const projects = [
    {
      title: 'Mindost',
      items: ['Startup', 'AI', 'Mental Health Support', 'Web Design'],
      image: MinDost,
      href: 'https://mindost.vercel.app/', // Add project-specific route
    },
    {
      title: 'Mage-UI',
      items: ['UI-Library', 'NEXT.JS', 'Web Design'],
      image: Mageui,
      href: 'https://www.mageui.live/', // Add project-specific route
    },
    {
      title: 'Lido',
      items: ['CGI', 'Landing Page Design', 'Social Media Graphics'],
      image: '/projects/lido.webp',
      href: '/projects/lido', // Add project-specific route
    },
  ]
  
  return (
    <section className="w-full bg-black p-10 lg:p-32 text-[#c8c2bd]">
      <div className="w-11/12 mx-auto">
        <h3 className="text-[30px] sm:text-[48px] w-11/12 mx-auto pb-6">
          <span>✦ </span>
          <span>Selected Projects</span>
        </h3>
      </div>
      <div className="w-11/12 mx-auto">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </section>
  )
}

export default SelectedProjects

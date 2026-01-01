import React, { useEffect } from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiDocker } from 'react-icons/di'
import { FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { FiFigma } from 'react-icons/fi'
import { IoLogoHtml5, IoLogoPython } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiNextdotjs, SiPostgresql, SiStreamlit } from 'react-icons/si'
import { TbBrandDjango } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

const SkillsSection = () => {
   

    const skills=
   [ 
    {name:"HTML/CSS",category:"frontend",icon:<IoLogoHtml5 color='RoyalBlue'/>},
    {name:"JavaScript",category:"frontend",icon:<FaJsSquare color='yellow'/>},
    {name:"React",category:"frontend",icon:<FaReact color='DarkTurquoise'/>}, 
    {name:"Tailwind CSS",category:"frontend",icon:<RiTailwindCssFill color='deepskyblue'/>}, 
    {name:"Next.js",category:"frontend",icon:<SiNextdotjs color='limegreen'/>}, 
    {name:"Node.Js",category:"Backend",icon:<FaNodeJs color='Chartreuse'/>}, 
    {name:"Express",category:"Backend",icon:<SiExpress/>}, 
    {name:"MongoDB",category:"Backend",icon:<SiMongodb color='limegreen'/>}, 
    {name:"Python", category:"frontend",icon:<IoLogoPython color='gray' />},
    {name:'django', category:'backend', icon:<TbBrandDjango color='forestgreen'/>},
    {name:"Streamlit",category:"frontend",icon:<SiStreamlit color='darkred'/>},
    {name:"PostgreSQL",category:"Backend",icon:<BiLogoPostgresql color='SteelBlue'/>}, 
    {name:"Git/GitHub",category:"tools",icon:<FaGithub/>},  
]

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>   
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My<span className='text-primary'> Skills</span>
            </h2>
            <div className='grid grid-cols-2 sm:grid-cols2 lg:grid-cols-3 gap-6 '>
                {skills.map((skill,key)=>
                (
                    <div key={key} className=' bg-card p-6 rounded-lg shadow-xs card-hover  '>
                        <div className='flex items-center justify-between mb-1 '>
                            <h3 className='font-semibold text-lg '>{skill.name}</h3>
                            <div className='text-5xl'>
                                {skill.icon}
                            </div>
                        </div>
        
                        <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            
                        </div> 
                    </div>
                ))}
            </div>
        </div>

    </section>
  )
}

export default SkillsSection
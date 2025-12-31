import { Description } from '@radix-ui/react-toast'
import { ArrowDownRight, Github } from 'lucide-react'
import React from 'react'

const ProjectsSection = () => {
    const projects=
    [
        {
            id:1,
            title:"comic clutser",
            description:"A manga (comic) reading website , displays various trending comics which are dynamic and search returns the best match for the user's search text. developed using react and tailwindcss.",
            image:'/comicclusterdp.png',
            tags:["React","TailwindCSS","JavaScript"],
            githuburl:"https://github.com/yagneshhhh/Comic_Cluster"
        },
        {
            id:2,
            title:'Cold E-Mail Generator',
            description:"An AI based Cold Email Generator that automates personalized outreach by converting Airtable lead data into high-quality cold emails using large language models.",
            image:"coldEmaildp.png",
            tags:["Python","Django","Streamlit"],
            githuburl:"https://github.com/yagneshhhh/yagnesh/tree/main/coldemail_generator"
        },
        {
            id:3,
            title:"AI Based Content  Pipeline",
            description:"AI-powered content automation system that helps businesses or individuals create, manage, and publish high-quality blog posts and social media content  with minimal manual effort.​",
            image:"AIpipelinedp.png",
            tags:["python","Django","Streamlit"],
            githuburl:"https://github.com/yagneshhhh/content-generation-pipeline"
        }
    ]
  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Featured <span className='text-primary'>Projects</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Here are some of my projects. Each project was carefully crafted with attention to detail , perfomamnce , and user experience.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,key)=>
                (
                    <div key={key}
                      className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
                            <div className='h-48 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-center transition-transform duration-500 group-hover:scale-110'/>
                            </div> 

                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag)=>(
                                        <span className='px-2 py-1 text-xs font-medium rounded-full  border bg-secodary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
            
                            <h3 className='text-xl font-semibold mb-1'>
                                {project.title}
                            </h3>
                            <p className='text-muted-foreground text-sm mb-4'>
                                {project.description}
                            </p>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a href={project.githuburl}
                                    target="_blank" className='text-foreground/80 hover:text-primary ml-2 mt-3 transition-colors duration-300 ' >
                                        <Github/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className='mt-8'>have a clear view about the projects by clicking on the github icon for each project</p>
            <div className='text-center mt-12'>
                <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/yagneshhhh' target='_blank'>
                    Check My GitHub <ArrowDownRight size={16}/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection
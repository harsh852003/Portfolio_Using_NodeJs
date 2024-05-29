import React from 'react'
import ProjectCard from './ProjectCard'


const Data=[
    {
        id:"1",
        title:"React Project 1",
        description:"Description of project 1",
        image:'/p1.png',
    },
    {
        id:"2",
        title:"React Project 2",
        description:"Description of project 2",
        image:"/p2.png",
    },
    {
        id:"3",
        title:"React Project 3",
        description:"Description of project 3",
        image:"/p3.png",
    },
    {
        id:"4",
        title:"React Project 4",
        description:"Description of project 4",
        image:"/p1.png"
    },
]

function ProjectSection() {

  return (
    <div>
        <p className=" text-center py-14 text-orange-500 font-semibold md:text-5xl" id='Projects'> My Projects</p>
        <div className='grid px-20  sm:px-5 sm: justify-center md:grid-cols-2 gap-8 md:gap-24'>
            {
                Data.map((project)=> <ProjectCard 
                key={project.id} title={project.title} description={project.description} imgUrl={project.image}
                />

                )
            }
        </div>
    </div>

  )
}

export default ProjectSection
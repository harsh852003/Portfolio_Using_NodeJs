import React from 'react'
import ProjectCard from './ProjectCard'


const Data=[
    {
        id:"1",
        title:"Text_Utils",
        description:"Developed a text utility application with features for text conversion (small and large text).Implemented functionality to remove extra spacing and count words.Also it will provide  Integrated dark mode and light mode themes for enhanced user experience.",
        image:'/p1.png',
        codeLink:'https://github.com/harsh852003/TextUtils_Application_Using_React',
        viewLink:'https://text-utils-application-using-react-emgii4jy7.vercel.app/'
    },
    {
        id:"2",
        title:"News Adda",
        description:"In this project from the news api we can saw the current and real time news through this webApplication. In which also the catagory is available for specific catagory centric user experience.",
        image:"/p2.png",
        codeLink:'https://github.com/harsh852003/NewsAdda',
        viewLink:'https://github.com/harsh852003/NewsAdda'
    },
    {
        id:"3",
        title:"E-Commerce Web Application",
        description:"CRUD operation performs; you can add, delete, and update your product; JWT token authentication for registered users.",
        image:"/p3.png",
        codeLink:'https://github.com/harsh852003/E_Commerce_Application_Using_NodeJs',
        viewLink:'https://github.com/harsh852003/E_Commerce_Application_Using_NodeJs'
    },
    {
        id:"4",
        title:"Airchat - ChatApplication",
        description:"Utilized Bootstrap 5 to ensure a mobile-friendly layout,Managed with Firebase Realtime Database for instant message synchronization, Secure user login using Firebase Authentication,  Messages and user data stored in Firebase Realtime Database and Ensured data integrity and security through Firebase rules and Cloud Function triggers.  ",
        image:"/p4.png",
        codeLink:'https://github.com/harsh852003/AirChat-Application-Using-Firebase-',
        viewLink:'https://github.com/harsh852003/AirChat-Application-Using-Firebase-'
    },
]

function ProjectSection() {

  return (
    <div>
        <p className=" text-center py-14 text-orange-500 font-semibold md:text-5xl" id='Projects'> My Projects</p>
        <div className='grid px-20  sm:px-5 sm: justify-center md:grid-cols-2 gap-8 md:gap-20'>
            {
                Data.map((project)=> <ProjectCard
                key={project.id} title={project.title} description={project.description} imgUrl={project.image} codeLink={project.codeLink} viewLink={project.viewLink}
                />

                )
            }
        </div>
    </div>

  )
}

export default ProjectSection
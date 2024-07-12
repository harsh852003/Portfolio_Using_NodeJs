import Link from 'next/link';
import React from 'react'
import { IoCodeSharp} from "react-icons/io5";
import {FiEye} from "react-icons/fi";


function ProjectCard({ imgUrl, title, description,codeLink,viewLink }) {
    return (
        <div>
            <div className='h-72 w-72 md:h-60 md:w-96 rounded-xl relative group bg-center bg-no-repeat md:mx-4' style={{ background: `url(${imgUrl})`, backgroundSize: "contain" }}>
       
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-600 "> 
            <Link href={codeLink} className='h-14 w-14 border-2 relative rounded-full border-orange-200 hover:border-orange-50 group/link'>
                <IoCodeSharp className=' h-10 w-10 text-orange-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-orange-50'/>
            </Link>

            <Link href={viewLink} className=' ml-2 h-14 w-14 border-2 relative rounded-full border-orange-200 hover:border-orange-50 group/link'>
                <FiEye className=' h-10 w-10 text-orange-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-orange-50'/>
            </Link>
            </div>
            </div>
            <div className=' text-orange-500 rounded-b-xl py-6 px-6 bg-orange-50 dark:bg-gray-900'>
                <h5 className=' text-xl font-semibold mb-2'>{title}</h5>
                <p className=' text-orange-500'>{description}</p>
                </div>
            
        </div>
    ) 
}

export default ProjectCard
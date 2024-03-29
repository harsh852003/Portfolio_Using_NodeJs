"use client"
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import WebDev from '../../../public/web-development.jpg'
import TabButton from './TabButton';

const TAB_DTA = [
    {
        title: "Skills",
        id: "Skills",
        content: (
            <ul className=' list-disc pl-2 dark:text-orange-50'>
                <li>Node js</li>
                <li>Express js</li>
                <li>My sql</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>React</li>
            </ul>
        ),

    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className=' list-disc pl-2 dark:text-orange-50'>
                <li>12th - P V Modi High School</li>
                <li>College - VGEC Chandkheda Under Gujarat Technological University</li>
                
            </ul>
        ),
    },
    {
        title: " Achievements",
        id: " Achievements",
        content: (
            <ul className=' list-disc pl-2 dark:text-orange-50'>
                <li>VGEC NCC Social Media Team Leader</li>
                <li>Gymnastic</li>
                <li>B certificate in NCC</li>
               
            </ul>
        ),

    }
]

function AboutMe() {


    const[Tab,setTab]=useState("skills")
    const[isPending,startTransition]=useTransition()

   const handletabChange = (id)=>{
        startTransition(()=>{
            setTab(id)
        })
    }
    // this logic is helpful for TAB_DTA visibility in frontend
    const foundTab = TAB_DTA.find((t) => t.id === Tab);

  return (
    <section className=' text-orange-500 py-5' id='skills'>
        <div className=' md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-12 xl:px-16 '>
           <Image src={WebDev} className=' rounded ' alt='this is th web development image'/>
           <div className='mt-4  md:mt-0 text-left flex flex-col h-full'>
            <h2 className=' text-4xl font-bold mb-4'>About Me</h2>
            <p className=' text-base md:text-lg'>This paragraph is showing about my skills</p>

            <div className='flex flex-row mt-8'>
                <TabButton selectTab={()=> handletabChange("Skills")} active={Tab === "Skills"} >
                    {""} 
                    Skills {" "}
                </TabButton>
                
                <TabButton selectTab={()=> handletabChange("Education")} active={Tab === "Education"} >
                    {""} 
                    Education {" "}
                </TabButton>
                <TabButton selectTab={()=> handletabChange(" Achievements")} active={Tab === " Achievements"} >
                    {""} 
                    Achievements{" "}
                </TabButton>
                
            </div>
            <div className=' mt-8'>
            {foundTab ? foundTab.content : "Tab content not found"}
                </div>
           </div>
        </div>
    </section>
  )
}

export default AboutMe
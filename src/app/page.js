
'use client'
import { IoInvertModeOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { VscClose } from "react-icons/vsc";
import { useEffect, useState } from "react";
import NavLink from "./components/NavLink";
import MenuOverlay from "./components/MenuOverlay";
import AboutMe from "./components/AboutMe";
import NameSection from "./components/NameSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

// const darkMode=window && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';

export default function Home() {
  
  const [navbarOpen, setnavbarOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Default theme
    useEffect(() => {
      if (typeof window !== 'undefined' && window.matchMedia) {
        const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        setTheme(darkMode);
      }
    }, []);   


  //navlink array
  const navlink = [{
    title: "AboutMe",
    path: "#skills"
  },
  {
    title: "Projects",
    path: "#Projects"

  }]

//   document.addEventListener("DOMContentLoaded", function () {
//     const body = document.body;

//     // Check the user's system preference
//     const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

//     // Apply dark mode class based on user's system preference
//     if (prefersDarkMode) {
//         body.classList.add("dark");
//     }
// });

  
  return (

    //<div className={`${darkMode}`} >
    <div className="bg-orange-50">
    <div className={theme} >
      <title >Harsh Portfolio</title>
      <main className=' bg-orange-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=" min-h-screen">
          {/* Navbar */}
          <nav className=' fixed top-0 left-0 right-0 z-10 py-3 px-3 flex justify-between bg-orange-500 bg-opacity-90 '>
            <h1 className=' font-customFont text-xl  dark:text-orange-50'>Harsh Pandya</h1>
            {/* <button className=""><IoInvertModeOutline onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /></button> */}
            <div className=" mobile-menu block md:hidden ">
              {
                !navbarOpen ? (
                  <button href='/#skills' onClick={() => setnavbarOpen(true)} className=" text-gray-900 flex items-center px-3 py-1 border rounded border-gray-900  hover:text-orange-50 hover:border-orange-50  "><FaBars className=" h-6 w-6" /></button>
                )
                  :
                  (
                    <button href='/#' onClick={() => setnavbarOpen(false)} className=" text-gray-900 flex items-center px-3 py-1 border rounded border-gray-900  hover:text-orange-50 hover:border-orange-50 " ><VscClose className=" h-6 w-6 " /></button>
                  )
              }
            </div>

            <div className="menu hidden md:block">
              <ul className=' flex items-center cursor-pointer'>
                {/* <li className="px-2 dark:text-orange-50 ">Skills</li>
              <li className="px-2  dark:text-orange-50">Achievement</li> */}
                {
                  navlink.map((link, index) => (
                    <li key={index}>
                      <NavLink href={link.path} title={link.title} />
                    </li>
                  ))
                }
                {/* <li className="px-2"><IoInvertModeOutline onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl' /></li> */}
                <li><a className=" bg-gradient-to-r  from-orange-500 to-orange-200 text text-wh px-2 py-2 rounded-md ml-10" href="#">Resume</a></li>
              </ul>
            </div>
            {
              navbarOpen ? <MenuOverlay links={navlink} /> : null
            }
          </nav>
          <NameSection />
          <AboutMe  />
          <ProjectSection />
          <EmailSection />  
          <ContactMe/> 
        </section> 
      </main>
      <Footer/>
    </div>
    </div>
  )
}

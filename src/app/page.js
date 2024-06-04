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

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Default theme

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
      setTheme(darkMode);
      document.body.classList.toggle('dark', darkMode === 'dark');
    }
  }, []);

  //navlink array
  const navlink = [
    {
      title: "AboutMe",
      path: "#skills"
    },
    {
      title: "Projects",
      path: "#Projects"
    }
  ];

  const openResume=()=>{
    window.open('/Harsh.pdf','_blank')
  }

  return (
    <div className={`bg-orange-50 ${theme}`}>
      <title>Harsh Portfolio</title>
      <main className='bg-orange-50 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          {/* Navbar */}
          <nav className='fixed top-0 left-0 right-0 z-10 py-3 px-3 flex justify-between bg-orange-500 bg-opacity-90'>
            <h1 className='font-customFont text-xl dark:text-orange-50'>Harsh Pandya</h1>
            <div className="mobile-menu block md:hidden">
              {!navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className="text-gray-900 flex items-center px-3 py-1 border rounded border-gray-900 hover:text-orange-50 hover:border-orange-50">
                  <FaBars className="h-6 w-6" />
                </button>
              ) : (
                <button onClick={() => setNavbarOpen(false)} className="text-gray-900 flex items-center px-3 py-1 border rounded border-gray-900 hover:text-orange-50 hover:border-orange-50">
                  <VscClose className="h-6 w-6" />
                </button>
              )}
            </div>

            <div className="menu hidden md:block">
              <ul className='flex items-center cursor-pointer'>
                {navlink.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
                ))}
                <li>
                  <button onClick={openResume} className="bg-gradient-to-r from-orange-500 to-orange-200 text text-wh px-2 py-2 rounded-md ml-10">Resume</button>
                </li>
              </ul>
            </div>
            {navbarOpen ? <MenuOverlay links={navlink} /> : null}
          </nav>
          <NameSection />
          <AboutMe />
          <ProjectSection />
          <EmailSection />
          <ContactMe />
        </section>
      </main>
      <Footer />
    </div>
  );
}

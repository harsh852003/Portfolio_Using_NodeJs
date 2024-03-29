"use client"
import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import Image from "next/image";
import logo from '../../../public/hp.png';
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

function NameSection() {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12 py-5'>
                <div className=' px-5 col-span-7 place-self-center'>
                    <h2 className=" text-5xl py-8  text-orange-600 font-extrabold md:text-6xl">Hello, I am <br></br> {" "}
                        <TypeAnimation
                            sequence={[
                                'Harsh Pandya',
                                2000,
                                'Web Developer',
                                3000
                            ]}
                            wrapper="span"
                            speed={25}
                            repeat={Infinity}
                        /></h2>
                    <p className=" text-base py-4  leading-8 text-gray-700 md:text-xl max-w-lg dark:text-orange-50">I am very exciting to learn new things in web development. Currently I am working with next js project as a learner.</p>
                    {/* for social media icons */}
                    <div className="text-5xl flex justify-center gap-16 py-4 md:justify-start text-slate-600 dark:text-orange-50">
                        <Link href="https://x.com/HARSH36540110?t=YO-O0dWdburN7AAyS2Mz9w&s=09"><AiFillTwitterCircle className=" cursor-pointer" onClick={() => console.log("hello your in linkedin page")} /></Link>
                        <Link href="https://www.linkedin.com/in/harsh-pandya-02b684226/"><AiFillLinkedin className=" cursor-pointer" onClick={() => console.log("hello your in linkedin page")} /></Link>
                        <Link href="https://www.instagram.com/harsh852003/"><AiFillInstagram className=" cursor-pointer" onClick={() => console.log("hello your in linkedin page")} /></Link>
                    </div>
                </div>
                {/* for animated image */}
                <div className=" relative  bg-gradient-to-b from-orange-500 rounded-full w-80 h-80 mt-16 overflow-hidden md:w-96 md:h-96 mx-auto">
                    <Image src={logo} layout="fill" objectFit="cover" alt='this image is my avatar'  />
                </div>
            </div>
        </section>
    )
}

export default NameSection
"use client"
import React, { useState } from 'react'
import { ImGithub } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';

function EmailSection() {
  const [Submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: "POST",
      // to telling the server that we are sending json 
      headers: {
        "Content-Type": "application/json",
      },
      // body of the request is th json
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    console.log(resData);

    if (response.status === 200) {
      console.log('Message sent');
      setSubmit(true);

      setTimeout(() => {
        setSubmit(false);
      }, 5000);
    }
  };

  return (
    <>
      <section className='grid md:grid-cols-2 my-12 md:my-12 py-24' id='email'>
        <div>
          <h5 className='text-2xl font-bold text-orange-600'>Let&apos;s Meet</h5>
          <p className='text-gray-700 text-lg mb-4 max-w-md dark:text-orange-50'>
            {" "}Namaste, I am currently learning new things in web development. I am looking for new opportunities, my inbox is always full whether you have a question or just want to say Hi.
          </p>

          <div className='flex flex-row gap-2'>
            <Link href="https://github.com">
              <ImGithub className='text-orange-500 text-2xl cursor-pointer mb-4' />
            </Link>

            <Link href="https://linkedin.com">
              <FaLinkedinIn className='text-orange-500 text-2xl cursor-pointer mb-4' />
            </Link>
          </div>
        </div>
        <div>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email' className='text-orange-500 block text-md font-bold md:text-xl'>Your Email</label>
              <input name='email' type='email' id='email' required className='bg-orange-100 border border-orange-400 placeholder-orange-300 text-orange-500 rounded-lg block w-full p-2' placeholder='abcd@gmail.com' />
            </div>
            <div>
              <label htmlFor='subject' className='text-orange-500 block text-md font-bold md:text-xl'>Subject</label>
              <input name='subject' type='text' id='subject' required className='bg-orange-100 border border-orange-400 placeholder-orange-300 text-orange-500 rounded-lg block w-full p-2' placeholder='Say Hi' />
            </div>
            <div>
              <label htmlFor='message' className='text-orange-500 block text-md font-bold md:text-xl'>Message</label>
              <textarea name='message' id='message' className='bg-orange-100 border border-orange-400 placeholder-orange-300 text-orange-500 rounded-lg block w-full p-2' placeholder="Let&apos;s talk about"></textarea>
            </div>

            <button type='submit' className='bg-orange-400 hover:bg-orange-500 rounded-lg block w-full p-2 md:p-2.5 md:text-xl'>
              Send Message
            </button>
            {
              Submit && (
                <p className='text-green-400 font-semibold text-lg'>Email sent successfully!</p>
              )
            }
          </form>
        </div>
      </section>
    </>
  );
}

export default EmailSection;

import Link from 'next/link'
import React from 'react'

function ContactMe() {
  return (
    <section>
        <h3 className=' text-center text-orange-400 text-3xl font-bold'>Contact Me</h3>
        <div className=' font-semibold  text-orange-500 py-5 text-center'>
            <p className='py-2'>PANDYA HARSH BHASKARRAY </p>
            <p className='py-2'><Link href="#">pandyaharsh852003@gmail.com</Link></p>
        </div>
    </section>
  )
}

export default ContactMe
import React from 'react'
import footer from '../../../public/HP Logo.png'
import Image from 'next/image'

function Footer() {
  return (
    <div className='border border-t-orange-100 border-l-transparent border-r-transparent text-orange-500 dark:bg-orange-500 dark:text-orange-50'>
        <div className=' container p-5 flex justify-between '>
            <span className='text-xl' >
              Harsh Pandya</span>
            <p className='text-xl'>Thanks for watching</p>
        </div>
    </div>
  )
}

export default Footer
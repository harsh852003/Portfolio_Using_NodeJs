import Link from 'next/link'
import React from 'react'

function NavLink({href,title}) {
  return (
    <Link href={href} className=' block px-2 dark:text-orange-50 '>  
        {title}
    </Link>
  )
}

export default NavLink
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex'>
    <ul className='flex space-x-2'>
                    <li>
                    <Link href="/about" classname="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">ABOUT</Link>
                    </li>
                    <li>
                    <Link href="/news" classname="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">NEWS</Link>
                    </li>
                </ul>
    </div>
  )
}

export default Header

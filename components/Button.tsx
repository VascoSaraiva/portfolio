import React from 'react'
import { ButtonProps } from '@/types'
import Link from 'next/link'

const Button = ({handleClick, title} : ButtonProps) => {
  return (
    <Link target='_blank' href={handleClick} className='border px-7 hover:bg-main-700 hover:text-main-100 transition-colors duration-200 py-3 rounded-md border-main-700'>
      {title}
    </Link>
  )
}

export default Button
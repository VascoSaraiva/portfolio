import React from 'react'
import { TitleSectionProps } from '@/types'

const TitleSection = ({title, text} : TitleSectionProps) => {
  return (
    <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-start py-14'>
        <h1 className='text-3xl font-poppins font-semibold'>{title}</h1>
        <p className='text-main-600 mt-2 text-center w-fit sm:text-left max-w-[300px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px]'>{text}</p>
    </div>
  )
}

export default TitleSection
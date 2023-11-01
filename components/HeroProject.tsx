'use client'

import { ProjectDataProps } from '@/types'
import { Button } from '.'
import Image from "next/image"

const HeroProject = ({ data }: ProjectDataProps) => {


    return (
        <div className='relative'>

            <div className={`absolute h-full w-full bg-gradient-to-b from-main-200 to-main-100 top-0 left-0 right-0 -z-10`} />
            
            <div className='heroHeight lg:h-fit appContainer relative text-center flex flex-col items-center justify-center' >

                <button onClick={() => history.back()} className='mt-8 top-0 absolute lg:relative mb-40 self-start hover:text-main-600 transition-colors duration-200'>{'<- Go back'}</button>

                <div className="flex flex-col justify-center items-center lg:h-auto lg:grow lg:mb-36">
                    <p className="pb-4">Made in {data.year}</p>
                    <h1 className="font-poppins text-[35px] lg:text-4xl leading-tight font-semibold pb-10">{data.title}</h1>
                    <Button title='Go to Website ->' handleClick={data.link} />
                </div>

                <Image
                className="hidden lg:block object-cover left-0 right-0 rounded-md aspect-video border  border-main-400 "
                style={{ width: '100%', height: 'auto' }}
                quality={100} 
                src={data.thumbnail.src}
                alt={data.thumbnail.alt}
                sizes="100vw"
                width={0}
                height={0} />

            </div>
        </div>
    )
}

export default HeroProject
'use client'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const ColorSheme = () => {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className='lg:border-l lg:border-main-400 lg:ml-8 lg:pl-8 flex items-center lg:block'>

            {theme === 'dark' ?

                <button onClick={() => setTheme('light')} className='bg-main-600 bg-opacity-30 flex items-center py-2.5 px-5 rounded-md cursor-pointer border lg:border-0 border-[#dfdfdf] '>
                    <LightModeOutlinedIcon sx={{ fontSize: 18 }} />
                    <span className='ml-1.5 lg:hidden font-medium'>Light mode</span>
                </button>


                :

                <button onClick={() => setTheme('dark')} className='bg-main-600 bg-opacity-10 flex items-center py-2.5 px-5 rounded-md cursor-pointer border lg:border-0 border-[#dfdfdf] '>
                    <DarkModeOutlinedIcon sx={{ fontSize: 18 }} />
                    <span className='ml-1.5 lg:hidden font-medium'>Dark mode</span>
                </button>



            }






        </div>
    )
}

export default ColorSheme
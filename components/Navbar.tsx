'use client'

import Link from "next/link"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { ColorSheme } from ".";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Navbar = () => {

    return (
        <nav className="h-16 sticky top-0 bg-main-100 backdrop-blur-xl bg-opacity-60 z-20 border-b border-main-400 flex justify-center items-center">
            <div className="flex justify-between items-center appContainer">

                <Link aria-label='About me.' className="hover:opacity-70 tracking-wide font-medium font-poppins transition-opacity duration-200 border-main-100" href='/#aboutMe'>Vasco Saraiva</Link>


                {/* Desktop Navigation */}
                <div className="flex">
                    <div className="justify-center items-center gap-10 hidden lg:flex">
                        <Link aria-label='About me.' className="hover:opacity-70 transition-opacity duration-200 border-main-100" href='/#aboutMe'>About me</Link>

                        <Link aria-label='My works.' className="hover:opacity-70 transition-opacity duration-200 border-main-100" href='/#works'>Works</Link>

                        <Link aria-label='Contact me!' className="hover:opacity-70 transition-opacity duration-200 border-main-100" href='#contacts'>Contacts</Link>
                    </div>

                    <div className="hidden lg:block">
                        <ColorSheme />
                    </div>

                </div>


                {/* Mobile Navigation */}

                <div className="lg:hidden">
                    <Options />
                </div>



            </div>

        </nav>
    )
}

export default Navbar





export function Options() {
    return (
        <div>
            <Menu as="div" className="relative inline-block text-left ">
                <div>
                    <Menu.Button aria-label="Menu button">
                        <MenuRoundedIcon />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-4 w-56 rounded bg-main-700 shadow-lg">
                        <div className="p-2 [&>a]:px-2 [&>a]:py-2.5">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link aria-label='About me.' href='/#aboutMe'
                                        className={`${active && 'bg-main-600 bg-opacity-10'} text-main-200 flex w-full items-center rounded `}
                                    >
                                        About Me
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link aria-label='My works.' href='/#works'
                                        className={`${active && 'bg-main-600 bg-opacity-10'} text-main-200  flex w-full items-center rounded `}
                                    >
                                        Works
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link aria-label='Contact me!' href='/#contacts'
                                        className={`${active && 'bg-main-600 bg-opacity-10'} text-main-200  flex w-full items-center rounded `}
                                    >
                                        Contacts
                                    </Link>
                                )}
                            </Menu.Item>

                            <hr className="my-2.5 mx-2 border-main-600 opacity-60" />

                            <Menu.Item>
                                <div
                                    className='text-main-200 px-2 py-2.5 flex w-full items-center rounded cursor-pointer'
                                >
                                    <ColorSheme />
                                </div>
                            </Menu.Item>

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}


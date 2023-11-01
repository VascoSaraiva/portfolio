'use client'

import { ProjectFilterProps } from '@/types';
import FilterListIcon from '@mui/icons-material/FilterList';
import { categories } from '@/constants';
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const ProjectFilters = ({ clickedFilter, setClickedFilter }: ProjectFilterProps) => {


    return (
        <div className='pb-8'>
            <ul className='items-center hidden md:flex text-main-600'>

                {categories.map((category) => (
                    <li key={category} className=' pr-7 border-b hover:text-main-500 transition-colors duration-200 border-main-400'>
                        <button
                            onClick={() => setClickedFilter(category)}
                            className={`${clickedFilter === category ? 'activeSection' : ' '} h-9 flex`}>
                            {category}
                        </button>
                    </li>
                ))}



                <li className='h-9 pl-5 grow border-b border-main-400'></li>
            </ul>

            <Options />

        </div>

    )

    function Options() {
        return (
            <div>
                <Menu as="div" className="relative inline-block text-left w-full">
                    <div>
                        <Menu.Button className='flex w-full justify-center items-center gap-1 md:hidden text-main-700 border border-main-700 px-7 hover:bg-main-700 hover:text-main-100 transition-colors duration-200 py-3 rounded-md'>
                            <FilterListIcon className='-translate-y-[0.1rem]' /> {clickedFilter}
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
                        <Menu.Items className="absolute left-0 mt-4 w-full rounded bg-main-700 shadow-lg">
                            <div className="p-2 [&>button]:px-2 [&>button]:py-2.5">

                                {categories.map((category) => (
                                    <Menu.Item key={category}>
                                        {({ active }) => (
                                            <button onClick={() => setClickedFilter(category)}
                                                className={`${active && 'bg-main-600 bg-opacity-10'} text-main-200 flex w-full items-center rounded `}
                                            >
                                                {category}
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}





                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        )
    }

}

export default ProjectFilters




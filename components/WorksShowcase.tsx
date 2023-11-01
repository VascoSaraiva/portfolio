'use client'

import { ProjectFilters, ProjectCard } from '.'
import { AllProjectDataProps } from '@/types'
import { useEffect, useState } from 'react'
import { categories } from '@/constants';

const WorksShowcase = ({ data }: AllProjectDataProps) => {

    const [clickedFilter, setClickedFilter] = useState<string>(categories[0]);
    const [filteredData, setFilteredData] = useState(data)

    useEffect(() => {
        if (clickedFilter != categories[0]) {
            setFilteredData(data.filter(project => project.type.includes(clickedFilter)))
        } else {
            setFilteredData(data)
        }
    }, [clickedFilter])

    return (
        <div>
            <ProjectFilters clickedFilter={clickedFilter} setClickedFilter={setClickedFilter} />


            {filteredData.length > 0 ?
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {filteredData.map(projectData => <ProjectCard key={projectData._id} data={projectData} />)}
                </div> :
                <p className='text-center w-full h-28 text-main flex items-center justify-center'>No Projects to show.</p>}

        </div>
    )
}

export default WorksShowcase
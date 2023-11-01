import { AllProjectDataProps } from '@/types';
import { TitleSection, WorksShowcase } from '.'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


export default async function Works({data} : AllProjectDataProps) {

    return (
        <div className='border-t border-main-400 mt-28'>

            <div className='appContainer'>

                {data ?
                    <div>
                        <TitleSection
                            title='Works'
                            text={`Showcasing a total of ${data.length} projects.`}
                        />

                        <WorksShowcase data={data} />
                    </div>
                    :
                    <div>
                        <TitleSection
                            title='Works'
                            text={`Showcasing some of my projects.`}
                        />

                        <div className='text-center max-w-2xl mx-auto p-16 border border-main-400 rounded-md'>
                            <ErrorOutlineIcon sx={{ fontSize: 48 }} className='mb-4'/>
                            <h1 className='font-poppins text-2xl mb-4'>Can't see the projects?</h1>
                            <p className='text-main-600 '>Looks like something went wrong. I will see what I can do.</p>
                        </div>
                    </div>
                }

            </div>



        </div >
    )
}


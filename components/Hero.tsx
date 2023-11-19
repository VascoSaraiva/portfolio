import TerminalIcon from '@mui/icons-material/Terminal';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { AllProjectDataProps, ProjectObject } from '@/types';

const setProjectCategories = (data: ProjectObject[]) => {
    const categories: string[] = [];
    let numberOfProjects: number[] = [];


    data.forEach((project: ProjectObject) => {
        project.type.forEach((type: string) => {
            if (!categories.includes(type)) {
                categories.push(type);
            }
        });
    });

    categories.map(category => (
        numberOfProjects.push(data.filter((project: ProjectObject) => project.type.includes(category)).length)
    ))

    return ({
        categories,
        numberOfProjects
    })
}


const Hero = async ({data} : AllProjectDataProps) => {

    const projectCategories = data ? setProjectCategories(data) : null;

    return (
        <div className='heroHeight from-main-300 to-main-100 appContainer lg:border-x border-main-400 bg-gradient-to-bl text-center flex flex-col'>
            <div className="flex flex-col justify-center items-center h-full lg:h-auto lg:grow">

                <h1 className="font-poppins text-main-300 text-[35px] lg:text-4xl leading-tight font-semibold pb-10 text-opacity-0 bg-clip-text bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 animate-gradient
                ">
                    Welcome<br />I'm Vasco Saraiva.</h1>
                <p className="text-xl pb-20 opacity-60">Full Stack Web Developer.</p>

                {/* Download CV  */}
                <a download="CV Vasco Saraiva" href={'/files/CV.pdf'} className="text-xl border-b pb-0.5 border-main-700 hover:opacity-75 transition-opacity duration-200">📄 Download CV -{">"}</a>
            </div>

            <div className="justify-center gap-6 h-fit items-center pb-14 hidden md:flex cursor-default" data-aos='fade-up'>

                {projectCategories && projectCategories?.categories.map((category: string, index: number) => (
                    <div className="bg-main-300 bg-opacity-40 backdrop-blur-sm  py-6 w-52 lg:w-60 border flex gap-3 justify-center items-center border-main-400 rounded-md">

                        {category === 'Web Development' ?
                            <TerminalIcon sx={{ fontSize: 30 }} /> :
                            category === 'UX/UI Design' ?
                                <WidgetsIcon sx={{ fontSize: 30 }} /> :
                                <ImagesearchRollerIcon sx={{ fontSize: 30 }} />
                        }

                        <div className="flex flex-col justify-center items-start">
                            <h1 className="font-semibold">{category}</h1>
                            <p className="text-sm">
                                {
                                    projectCategories?.numberOfProjects[index] +
                                    (projectCategories?.numberOfProjects[index] > 1 ? ' Projects' : ' Project')
                                }
                            </p>
                        </div>
                    </div>
                ))}



            </div>

        </div>



    )
}

export default Hero
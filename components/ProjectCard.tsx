import { ProjectDataProps } from "@/types"
import Image from "next/image"
import Link from "next/link";
import 'aos/dist/aos.css';


const ProjectCard = ({ data }: ProjectDataProps) => {


    const tags = new Array;

    for (let i = 0; i < 3; i++) {
        tags.push(
            data.features[i]
        )
    }

    return (
        <div className="w-full bg-main-200 border border-main-400 pb-8 rounded-md"  data-aos="fade-up">
            <Link aria-label={`Go to project ${data.title}`} href={`/project/${data._id}`}>
                <Image className="rounded-md pb-7 object-cover object-center sm:h-[420px]" sizes="100vw" style={{ width: '100%' }} src={data.thumbnail.src} width={0} height={0} alt={data.thumbnail.alt} />
            </Link>
            <div className="px-4 sm:px-6">
                <h1 className="font-poppins font-medium pb-6 text-[1.5rem] truncate">{data.title}</h1>
                <div className="flex [&>*:nth-child(-n+2)]:hidden sm:[&>*:nth-child(-n+3)]:block justify-start items-center gap-2 mb-5 flex-wrap">

                    {
                        tags.map((tag, index) =>
                            <div key={tag} className="cursor-default py-2 px-4 text-sm bg-main-300 text-main-600 w-fit h-fit rounded-md">
                                {tag}
                            </div>
                        )}

                    <div className="cursor-default py-2 px-4 text-sm border border-main-500 text-main-600 w-fit h-fit rounded-md">
                        And More
                    </div>
                </div>

                <p className="text-main-600 projectCardDescription mb-8">{data.description}</p>

                <Link aria-label={`Go to project ${data.title}`} href={`/project/${data._id}`} className="border px-7 hover:bg-main-700 hover:text-main-100 transition-colors duration-200 py-3 rounded-md border-main-700">{'Check Project ->'}</Link>

            </div>
        </div>
    )
}

export default ProjectCard
import { TitleSection} from "@/components";
import HeroProject from "@/components/HeroProject";
import { ProjectPageParams } from "@/types";
import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Key } from "react";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from 'next'



export const generateMetadata = async({ params }: ProjectPageParams, parent : ResolvingMetadata) : Promise<Metadata> => {

  const data = await getData(params.id)

  return{
    title: `${data.title} | Vasco Saraiva`,
    description: data.description,
  }

}

const ProjectPage = async({ params }: ProjectPageParams) => {
  
  const data = await getData(params.id)

  return (
    <div className="relative">


      <div className="border-b heroHeight -z-10 w-full absolute top-0 border-main-400" />

      <div>
        <HeroProject data={data} />
      </div>

      <div className="appContainer">

        <div className="grid grid-cols-1 gap-8 mt-8">
          <Image
            className="object-contain rounded-md lg:hidden aspect-video"
            style={{ width: '100%', height: 'auto' }}
            src={data.thumbnail.src}
            alt={data.thumbnail.alt} 
            sizes="100vw"
            width={0}
            height={0} />
            
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-2">
          <Image
            className="object-contain rounded-md aspect-video"
            style={{ width: '100%', height: 'auto' }}
            src={data.imgs[0].src}
            alt={data.thumbnail.alt} 
            sizes="100vw"
            width={0}
            height={0} />

          <Image
            className="object-contain rounded-md aspect-video"
            style={{ width: '100%', height: 'auto' }}
            src={data.imgs[1].src}
            alt={data.thumbnail.alt} 
            sizes="100vw"
            width={0}
            height={0} />
        </div>

        <div className="py-8 lg:py-14">

          <div className="hidden sm:block">
            <TitleSection
              title="Additional Info"
              text={data.description}
            />
          </div>


          <div className="border sm:border-0 border-main-400 rounded-md px-6 py-8 sm:p-0">

            <div className="sm:hidden">
              <h1 className='pb-3'>Aditional Info</h1>
              <p className="text-main-600 pb-8">{data.description}</p>
            </div>


            <table className="w-full text-left">
              <thead className="border-b border-main-400">
                <tr>
                  <th className="font-normal hidden sm:table-cell md:hidden lg:table-cell pr-8 py-8">Year</th>
                  <th className="font-normal hidden xl:table-cell pr-8 py-8">Project</th>
                  <th className="font-normal hidden sm:table-cell pr-8 py-8">Made at</th>
                  <th className="font-normal hidden md:table-cell pr-8 py-8">Built with</th>
                  <th className="font-normal hidden sm:table-cell pr-8 py-8">Link</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-main-600">
                  <td className="hidden sm:table-cell md:hidden lg:table-cell align-top pr-4 sm:pr-12 lg:pr-6 xl:pr-14 2xl:pr-22 py-8 whitespace-nowrap">{data.year}</td>
                  <td className="hidden xl:table-cell align-top pr-4 sm:pr-12 lg:pr-6 xl:pr-14 2xl:pr-22 py-8 whitespace-nowrap">{data.title}</td>
                  <td className="hidden sm:table-cell align-top pr-4 sm:pr-12 lg:pr-6 xl:pr-14 2xl:pr-22 py-8 whitespace-nowrap">{data.madeAt}</td>
                  <td className="hidden md:table-cell align-top pr-4 sm:pr-12 lg:pr-6 xl:pr-14 2xl:pr-22 py-8 whitespace-nowrap">
                    <ul className="flex flex-wrap gap-2 -translate-y-1.5">
                      {
                        data.features.map((tag : Key) =>
                          <li key={tag} className="cursor-default text-sm py-2 px-4 bg-main-300 text-main-600 w-fit h-fit rounded-md">
                            {tag}
                          </li>
                        )}
                    </ul>
                  </td>
                  <td className="align-top pr-4 sm:pr-12 lg:pr-6 xl:pr-14 2xl:pr-22 py-8 whitespace-nowrap">
                    <Link href={data.link} target="_blank" className="hover:text-main-400 flex items-start transition-colors duration-200">{data.link}<ArrowOutwardIcon className="ml-1 translate-y-1"  sx={{ fontSize: 14 }} /></Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>





        </div>




      </div>

    </div >

  )
}

export default ProjectPage; 

async function getData(id : string){
  const res = await fetch(`${process.env.URL}/api/projects/${id}`, { cache: 'no-store' })
  return res.json()
}
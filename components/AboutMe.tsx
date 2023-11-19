import { TitleSection } from '.'
import Image from 'next/image'
import { contacts } from '@/constants'
import { softSkills, preferredTech, openToWork } from '@/constants'
import Link from 'next/link'

const AboutMe = () => {


  return (
    <div className='border-t border-main-400'>
      <div className='appContainer'>
        <TitleSection
          title='About me'
          text="Know more about me."
        />

        <div className='grid grid-col-1 xl:grid-cols-3 gap-8 [&>*]:w-full h-fit [&>*]:h-full'>

          <section data-aos='fade-up' className='flex flex-col justify-between items-center [&>*]:border [&>*]:border-main-400 [&>*]:rounded-md [&>*]:text-main-600'>
            <article className='pt-6 pb-12 px-6 grow w-full flex flex-col justify-center items-center text-main-600 '>
              <img className='mb-4 rounded-full bg-main-200' src={'/images/myFace.webp'} alt='My face' width={250} />
              <h1 className="font-poppins text-2xl mb-1 text-main-700">Vasco Saraiva</h1>
              <p className='mb-6'>Aveiro, Portugal</p>

              {openToWork ?
                <div className='bg-[#39a36b] py-2 px-4 rounded-md text-white'>
                  Open to work
                </div> :
                null
              }
            </article>

          </section>

          <section data-aos='fade-up' className='flex flex-col justify-between items-center [&>*]:border [&>*]:border-main-400 [&>*]:rounded-md [&>*]:p-6 [&>*]:text-main-600'>
            <article className='mb-8'>
              <h1 className='text-main-700 mb-3'>Who am I?</h1>
              <p className='mb-2'>I studied Multimedia and Communication Technologies at University of Aveiro. During the course I started my programming adventure. Since then, I've had the oportunity to work on a variety of projects with different clients which allowed me to grow my skillset as a full stack web developer.
              </p>

              <p>
                Besides coding, I love fantasy books and have a special place in my heart for videogames. You might realize that through some of my projects.
              </p>

            </article>
            <article>
              <h1 className='text-main-700 mb-3'>Soft Skills</h1>
              <div className='flex flex-wrap gap-2'>

                {softSkills.map(skill => (
                  <div className="cursor-default py-2 px-4 border border-main-400 text-main-600 w-fit h-fit rounded-md">
                    {skill}
                  </div>
                ))}

              </div>
            </article>
          </section>

          <section data-aos='fade-up' className='flex flex-col items-center [&>*]:border [&>*]:border-main-400 [&>*]:rounded-md [&>*]:p-6 [&>*]:text-main-600'>
            <article className='mb-8'>
              <h1 className='text-main-700 mb-3'>Main Technologies</h1>
              <div className='flex flex-wrap gap-2'>

                {preferredTech.map(tech => (
                  <div className="cursor-default py-2 px-4 bg-main-300 text-main-600 w-fit h-fit rounded-md">
                    {tech}
                  </div>
                ))}

              </div>
            </article>

            <article className='flex flex-col justify-between grow bg-main-200'>
              <div>
                <h1 className='text-main-700 mb-3'>What can I offer?</h1>
                <p className='mb-6'>I am capable of working both independently and as part of a team. Besides full stack development I also do UI/UX design. Ultimately, my main goal is to help you build web applications that deliver the optimal user  experience, utilizing the cutting-edge technologies available in the market.
                </p>
              </div>

              <Link aria-label='Contact me!' className='text-main-700 w-fit self-end hover:opacity-70 transition-opacity duration-200' href={'/#contacts'}>{'Contact me ->'}</Link>
            </article>
          </section>



        </div>

      </div>

    </div >
  )
}

export default AboutMe
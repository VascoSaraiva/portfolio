'use client'

const Loading = () => {

  window.addEventListener("load", () => {
    document.body.style.overflow = 'hidden'
  });

  return (
    <div className='relative'>

      <div className={`absolute h-full w-full bg-gradient-to-b from-main-200 to-main-100 top-0 left-0 right-0 -z-10`} />

      <div className='heroHeight lg:h-fit appContainer relative text-center flex flex-col items-center justify-center' >

        <button onClick={() => history.back()} className='mt-8 top-0 absolute lg:relative mb-40 self-start hover:text-main-600 transition-colors duration-200'>{'<- Go back'}</button>

        <div className="opacity-70 flex flex-col justify-center items-center lg:h-auto lg:grow lg:mb-36 w-full">
          <div className="mb-7 animate-pulse bg-main-400 h-5 w-24 rounded-full"></div>
          {/* <p className="pb-4">Made in {data.year}</p> */}
          <div className="mb-11 animate-pulse bg-main-400 h-12 w-4/5 xl:w-2/5 rounded-full"></div>
          {/* <h1 className="font-poppins text-[35px] lg:text-4xl leading-tight font-semibold pb-10">{data.title}</h1> */}
          <div className="animate-pulse bg-main-400 h-[47px] w-40 rounded-lg"></div>
          {/* <Button title='Go to Website ->' handleClick={data.link} /> */}
        </div>


        <div className="opacity-70 hidden lg:block left-0 right-0 rounded-md bg-main-400 animate-pulse w-full aspect-video">
        </div>

      </div>
    </div>
  )
}

export default Loading
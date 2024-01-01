import { AboutMe, Hero, Works } from '@/components'

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <Hero data={data} />
      <div id='aboutMe'>
        <AboutMe />
      </div>
      <div id='works'>
        <Works data={data} /> 
      </div>
    </main>
  )
}

async function getData() {
  const res = await fetch(process.env.URL + '/api/projects', { next : {revalidate: 60 }})
  return (res.status === 200 ? res.json() : null)
}
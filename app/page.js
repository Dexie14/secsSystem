import Image from 'next/image'
import Navbar from '@/components/Home/Navbar'
import Hero from '@/components/Home/Hero'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero />
    </main>
  )
}

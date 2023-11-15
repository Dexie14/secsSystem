import Image from 'next/image'
import Navbar from '@/components/Home/Navbar'
import Hero from '@/components/Home/Hero'
import Journey from '@/components/Home/Journey'
import Unicorn from '@/components/Home/Unicorn'
import Service from "@/components/Home/Service"
import Call from '@/components/Home/Call'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero />
      <Journey />
      <Unicorn />
      <Service />
      <Call />
    </main>
  )
}

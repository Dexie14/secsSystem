import Image from 'next/image'
import Navbar from '@/components/Home/Navbar'
import Hero from '@/components/Home/Hero'
import Journey from '@/components/Home/Journey'
import Unicorn from '@/components/Home/Unicorn'
import Service from "@/components/Home/Service"
import Call from '@/components/Home/Call'
import Footer from '@/components/Home/Footer'
import Partner from '@/components/Home/Partner'

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero />
      <Journey />
      <Unicorn />
      <Service />
      <Partner/>
      <Call />
      <Footer />
    </main>
  )
}

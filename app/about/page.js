
import Hero from '@/components/About/Hero'
import Mission from '@/components/About/Mission'
import Vision from '@/components/About/Vision'
import Navbar from '@/components/Home/Navbar'


export default function About() {
  return (
    <main className="">
         <Navbar/>
         <Hero />
         <Vision />
         <Mission />
    </main>
  )
}

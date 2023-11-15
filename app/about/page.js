import Hero from "@/components/About/Hero";
import Mission from "@/components/About/Mission";
import Team from "@/components/About/Team";
import Vision from "@/components/About/Vision";
import Call from "@/components/Home/Call";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export default function About() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Vision />
      <Mission />
      <Team />
      <Call/>
      <Footer />
    </main>
  );
}

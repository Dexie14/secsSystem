import Hero from "@/components/About/Hero";
import Mission from "@/components/About/Mission";
import Team from "@/components/About/Team";
import Vision from "@/components/About/Vision";
import Call from "@/components/Home/Call";
import Footer from "@/components/Home/Footer";
import FormContact from "@/components/Home/FormContact";
import Navbar from "@/components/Home/Navbar";
import Partner from "@/components/Home/Partner";

export default function About() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Vision />
      <Mission />
      {/* <Team /> */}
      <Partner/>
      {/* <Call/> */}
      <FormContact/>
      <Footer />
    </main>
  );
}

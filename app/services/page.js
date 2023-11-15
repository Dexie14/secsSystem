
import Call from "@/components/Home/Call";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Services/Hero";
import Order from "@/components/Services/Order";

export default function About() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Order />
      <Call/>
      <Footer />
    </main>
  );
}

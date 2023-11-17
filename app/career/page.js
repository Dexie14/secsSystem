
import Benefits from "@/components/Career/Benefits";
import Hero from "@/components/Career/Hero";
import Positons from "@/components/Career/Positons";
import Call from "@/components/Home/Call";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export default function Career() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Benefits />
      <Positons />
      <Call/>
      <Footer />
    </main>
  );
}

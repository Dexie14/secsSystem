
import Benefits from "@/components/Career/Benefits";
import Form from "@/components/Career/Form";
import Hero from "@/components/Career/Hero";
import Positons from "@/components/Career/Positons";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export default function Career() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Benefits />
      <Positons />
      <Form/>
      <Footer />
    </main>
  );
}

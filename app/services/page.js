
import Call from "@/components/Home/Call";
import Footer from "@/components/Home/Footer";
import FormContact from "@/components/Home/FormContact";
import Navbar from "@/components/Home/Navbar";
import Unicorn from "@/components/Home/Unicorn";
import Hero from "@/components/Services/Hero";
import Order from "@/components/Services/Order";
import OrderTwo from "@/components/Services/OrderTwo";

export default function Services() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Order />
      <Unicorn />
      <OrderTwo />
      {/* <Call/> */}
      <FormContact/>
      <Footer />
    </main>
  );
}

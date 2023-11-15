import Image from "next/image";
import pos from "@/public/assets/service/pos.svg";
import pci from "@/public/assets/service/pci.svg";
import mobile from "@/public/assets/service/mobile.svg";
import pay from "@/public/assets/service/payment.svg";
import OrderCard from "@/components/Services/OrderCard";

const Order = () => {
  return (
    <div className="w-[88%] mx-auto grid sm:grid-cols-2 gap-x-8 gap-y-20 my-10">
      <OrderCard
        title="Mobile POS solutions"
        image={pos}
        text="We offer a variety of fully certified terminals tailored to meet your
        business requirements, assisting in the creation of a mobile point of
        sale (POS) solution compatible with Android and Linux systems. Our
        solution not only meets the highest quality standards but also offers
        flexible options to suit any business."
      />
      <OrderCard
        title="Mobile and web application development"
        image={mobile}
        text="Our comprehensive mobile and web application development services empower businesses to craft and deploy tailored mobile and web applications, utilizing cutting-edge technologies and industry-leading practices to create highly functional, user-friendly, and visually appealing solutions that precisely cater to our clients' requirements."
      />
      <OrderCard
        title="Payment gateway solution and integration"
        image={pay}
        text="We have developed a secure and reliable gateway solution for handling online transactions, enabling businesses to accept payments from customers via various methods such as credit cards, debit cards, and e-wallets. This solution also supports multi-currency collection and adheres to industry standards for compliance."
      />
      <OrderCard
        title="PCI compliance certification"
        image={pci}
        text="Feel free to reach out to us today for assistance with achieving Payment Card Industry Data Security Standards (PCI DSS) compliance for your business – we're here to support your PCI-DSS compliance implementation."
      />
    </div>
  );
};

export default Order;

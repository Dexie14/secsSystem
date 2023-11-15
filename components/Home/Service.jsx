import ServCard from "@/components/Home/ServCard";
import serv from "@/public/assets/home/serv.svg";
import Image from "next/image";

const Service = () => {
  return (
    <div className="my-20 w-11/12 mx-auto">
      <h2 className="text-4xl text-center" style={{ fontFamily: "DMSans" }}>
        Our Services
      </h2>
      <p className="text-xl text-[#4F4F4F] text-center md:w-[45%] my-8 mx-auto">
        We assist in seamlessly implementing and integrating our technology into
        your existing business infrastructure.
      </p>

      <section className="my-20">
        <div className="flex flex-wrap gap-12 items-center justify-center">
          <ServCard
            title="Mobile POS solutions"
            text="We offer a variety of fully certified terminals tailored to meet your
        business requirements, assisting in the creation of a mobile point of
        sale (POS) solution compatible with Android and Linux systems. Our
        solution not only meets the"
          />
          <ServCard
            title="Mobile and web application development"
            text="Our comprehensive mobile and web application development services empower businesses to craft and deploy tailored mobile and web applications, utilizing cutting-edge technologies and industry-leading practices to create highly "
          />
          <ServCard
            title="PCI compliance certification"
            text="Feel free to reach out to us today for assistance with achieving Payment Card Industry Data Security Standards (PCI DSS) compliance for your business – we're here to support your PCI-DSS compliance implementation."
          />
          <ServCard
            title="Customized analytics and reporting"
            text="We facilitate businesses in achieving quicker decision-making by providing them with valuable insights through rapid reporting analytics. These analytics swiftly assess team productivity, track conversions and drop-offs"
          />
          <ServCard
            title="Fraud prevention and enhancing security "
            text="We assist businesses in enhancing the efficiency and security of their payment processes, all while elevating the customer experience, by detecting, preventing, and responding to fraud through a unified perspective on payment data."
          />
          <div className="py-12 px-3 flex flex-col justify-center bg-white border-[1.5px] border-[#016A2F] rounded-2xl items-center w-full h-[400px] md:max-w-[45%] lg:max-w-[30%]">
            <div className="bg-[#01B14F] flex justify-center w-[60px] h-[60px] rounded-2xl">
              <Image src={serv} alt="serv" className="" />
            </div>

            <h3 className="mt-10 text-2xl text-center">Advisory Services:</h3>
            <p className="text-[#4F4F4F] text-sm text-center my-5">
              <li className="w-11/12">
                Information Security Management Systems (ISO 27001)Business
              </li>
              <li>Continuity Management Systems (ISO 22301)Information</li>
              <li>Technology Service Management (ISO)</li>
            </p>

            <h6 className="text-[#01B14F] text-lg font-bold text-center">
              See More
            </h6>
          </div>
          <ServCard
            title="Payment gateway solution and integration"
            text="We have developed a secure and reliable gateway solution for handling online transactions, enabling businesses to accept payments from customers via various methods such as credit cards, debit cards, and e-wallets. "
          />
        </div>
      </section>
    </div>
  );
};

export default Service;

import fraud from "@/public/assets/service/fraud.svg";
import advisory from "@/public/assets/service/advisory.svg";
import analytics from "@/public/assets/service/analytics.svg";
import OrderCard from "@/components/Services/OrderCard";
import Image from "next/image";

const OrderTwo = () => {
  return (
    <div className="w-[88%] mx-auto ">
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-20 my-20">
        <OrderCard
          title="Fraud prevention and enhancing security"
          image={fraud}
          text="We assist businesses in enhancing the efficiency and security of their payment processes, all while elevating the customer experience, by detecting, preventing, and responding to fraud through a unified perspective on payment data."
        />
        <div className="">
          <Image src={advisory} alt="advisory" />
          <h5
            className="my-7 text-3xl font lg:w-11/12"
            style={{ fontFamily: "DMSansextra" }}
          >
            Advisory Services:
          </h5>
          <ul className="text-dark md:text-xl lg:w-9/12 ml-4 list-disc list-inside">
            <li>Information Security Management Systems (ISO 27001)Business</li>
            <li>Continuity Management Systems (ISO 22301)Information</li>
            <li>Technology Service Management (ISO 20000)Payment Card</li>
            <li>
              Industry Data Security Standard (PCI DSS)Data Privacy Impact
            </li>
            <li>Assessment (DPIA)Quality Management System ISO 9001Health</li>
            <li>Safety Management System, ISO 45001</li>
          </ul>
        </div>
      </div>
      <div className="md:flex justify-between items-center py-8">
        <section className="md:w-[48%]">
          <Image src={analytics} alt="analytics" className="w-full" />
        </section>
        <section className="md:w-[48%] mt-10 md:mt-0">
          <h4 className="text-3xl mb-7" style={{ fontFamily: "DMSansextra" }}>
            Customized analytics and reporting
          </h4>
          <p className="text-dark md:text-xl mt-5 lg:w-10/12">
            We assist businesses in enhancing the efficiency and security of
            their payment processes, all while elevating the customer
            experience, by detecting, preventing, and responding to fraud
            through a unified perspective on payment data.
          </p>
        </section>
      </div>
    </div>
  );
};

export default OrderTwo;

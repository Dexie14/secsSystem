import vision from "@/public/assets/about/vision.svg";
import Image from "next/image";

const Vision = () => {
  return (
    <div className="w-[88%] mx-auto md:flex justify-between items-center py-10">
      <section className="md:w-[48%]">
        <Image src={vision} alt="vision" className="" />
      </section>
      <section className="md:w-[48%]">
        <h4 className="bg-white rounded-3xl border-2 border-border px-3 py-1 text-[#002310] text-3xl w-[120px] text-center">Vision</h4>
        <p className="text-dark lg:text-3xl text-xl mt-5 lg:w-11/12">
          Our dedication lies in establishing ourselves as a frontrunner on the
          global stage in the fintech industry, achieved through the creation of
          competitive values and the delivery of technical solutions for our
          partners.
        </p>
      </section>
    </div>
  );
};

export default Vision;

import vision from "@/public/assets/about/vision.svg";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="w-[88%] mx-auto flex md:flex-row flex-col-reverse justify-between items-center py-10">
      <section className="md:w-[48%]">
        <h4 className="bg-white rounded-3xl border-2 border-border px-3 py-1 text-[#002310] text-3xl w-[120px] text-center">
          Mission
        </h4>
        <div className="flex flex-col gap-5 items-center mt-5">
          <p className="bg-[#51B76E] px-3 py-3 text-white text-xl rounded-lg">
            Our commitment lies in crafting payment solutions that are both
            smart and robust, with a focus on designing, developing, and
            delivering them effectively.
          </p>
          <p className="bg-[#51B76E] px-3 py-3 text-white text-xl rounded-lg">
            We take pride in our innovation, actively crafting payment solutions
            that hold significance in the realm of engineering.
          </p>
          <p className="bg-[#51B76E] px-3 py-3 text-white text-xl rounded-lg">
            Trust and a mutually beneficial mindset form the foundation of our
            approach to work.
          </p>
          <p className="bg-[#51B76E] px-3 py-3 text-white text-xl rounded-lg">
            We engage in collaboration with our partners, fostering a
            cooperative atmosphere.
          </p>
        </div>
      </section>
      <section className="md:w-[48%]">
        <Image src={vision} alt="vision" className="" />
      </section>
    </div>
  );
};

export default Mission;

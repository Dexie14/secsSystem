import Image from "next/image";
import career from "@/public/assets/career/careerHero.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#EDFFF5] py-20">
      <div className="w-[88%] mx-auto md:flex justify-between items-center">
        <div className="md:w-[55%] mb-20 md:mb-0">
          <h4 className="bg-white rounded-[30px] border-[1.5px] border-border px-4 py-2 text-[#002310] text-xl w-[160px] text-center">
            Join our Team
          </h4>
          <h2
            style={{ fontFamily: "DMSans" }}
            className="lg:text-4xl md:text-2xl text-3xl text-primary mt-14 xl:w-10/12"
          >
            Are you interested in becoming a part of a dynamic
            <span className="text-[#01B14F]"> team of experts </span>
            committed to transforming the landscape of the payment industry?
          </h2>
          <div className="mx-auto w-1/2 md:mx-0 md:w-full mt-7">
            <Link href="#contactUs">
              <button className="bg-button rounded-3xl py-3 px-6 text-white w-full md:w-[35%]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[40%] w-10/12 mx-auto md:mx-0">
          <Image src={career} alt="career" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

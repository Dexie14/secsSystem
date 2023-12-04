import Image from "next/image";
import HeroImg from "@/public/assets/home/heroImage.svg";
import frame from "@/public/assets/home/FrameHero.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-background lg:relative md:static ">
      <section className="md:flex justify-between items-center w-11/12 mx-auto py-10">
        <div className="md:w-[55%] mb-20 md:mb-0">
          <h2
            style={{ fontFamily: "DMSans" }}
            className="text-center sm:text-left lg:text-5xl md:text-4xl text-3xl font-DM_SanS text-primary font-bold leading-[50.80px]"
          >
            We build world-class digital payment solutions
          </h2>
          <p className="my-8 text-center sm:text-left md:w-[88%] text-base lg:text-xl text-[#4F4F4F] font-medium">
            Secsystems is a proficient technology firm, renowned for its
            expertise in delivering cutting-edge digital payment solutions,
            pioneering product development, and top-tier project management
            services.
          </p>
          <div className="mx-auto w-1/2 md:mx-0 md:w-full">
          <Link href="#contactUs">
          <button  className="bg-button rounded-3xl py-3 px-6 text-white w-full md:w-[35%]">
            Contact Us
          </button>
          </Link>
          </div>
        </div>
        <div className="md:w-1/2 pb-20 relative lg:static">
          <div>
            <Image src={HeroImg} alt="Hero" className="z-10 relative"/>
          </div>
          <div>
            <Image
              src={frame}
              alt="frame"
              className="absolute right-0 bottom-0 z-0"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;

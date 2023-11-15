import serv from "@/public/assets/home/serv.svg";
import Image from "next/image";

const ServCard = ({title, text}) => {
  return (
    <div className="py-8 px-3 flex flex-col justify-center bg-white border-[1.5px] border-[#016A2F] rounded-2xl items-center md:max-w-[45%] lg:max-w-[30%]">
      <div className="bg-[#01B14F] flex justify-center w-[60px] h-[60px] rounded-2xl">
        <Image src={serv} alt="serv" className=""/>
      </div>

      <h3 className="mt-10 text-2xl text-center">{title}</h3>
      <p className="text-[#4F4F4F] text-sm text-center my-5">
        {text}
      </p>

      <h6 className="text-[#01B14F] text-lg font-bold text-center">See More</h6>
    </div>
  );
};

export default ServCard;

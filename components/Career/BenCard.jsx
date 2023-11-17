import serv from "@/public/assets/home/serv.svg";
import Image from "next/image";

const BenCard = ({text}) => {
  return (
    <div className="py-6 px-2 flex flex-col justify-center bg-white border-[1.5px] border-[#01B14F] rounded-2xl items-center h-[300px] sm:max-w-[45%] lg:max-w-[30%]">
      <div className="bg-[#01B14F] flex justify-center w-[60px] h-[60px] rounded-2xl">
        <Image src={serv} alt="serv" className=""/>
      </div>
      <p className="text-[#4F4F4F] text-sm text-center my-5">
        {text}
      </p>
    </div>
  );
};

export default BenCard;

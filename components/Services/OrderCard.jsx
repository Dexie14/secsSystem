import Image from "next/image";
import pos from "@/public/assets/service/pos.svg";

const Order = ({ image, title, text }) => {
  return (
    <div className="">
      <Image src={image} alt="pos" />
      <h5 className="my-7 text-3xl font lg:w-11/12" style={{ fontFamily: "DMSansextra" }}>
        {title}
      </h5>
      <p className="text-dark md:text-xl  lg:w-10/12">{text}</p>
    </div>
  );
};

export default Order;

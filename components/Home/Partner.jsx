
import Image from "next/image";
import bestaf from "@/public/assets/logos/bestaf.png"
import budpay from "@/public/assets/logos/budpay.png"
import kudi from "@/public/assets/logos/kudi.png"
import sayswitch from "@/public/assets/logos/sayswitch.png"
import yes from "@/public/assets/logos/yes.jpg"

const Partner = () => {
  return (
    <div className="my-20 w-11/12 mx-auto">
      <h2 className="text-4xl text-center" style={{ fontFamily: "DMSans" }}>
        Our Partners
      </h2>
        
        <section className="grid lg:grid-cols-5 grid-cols-3 items-center justify-items-center place-content-center gap-5 my-20">
        <Image src={yes} alt="serv" className="yes" style={{height:"auto", width:"150px"}}/>
        <Image src={bestaf} alt="serv" className="bestaf" style={{height:"auto", width:"150px"}}/>
        <Image src={budpay} alt="serv" className="budpay" style={{height:"auto", width:"150px"}}/>
        <Image src={kudi} alt="serv" className="kudi" style={{height:"auto", width:"150px"}}/>
        <Image src={sayswitch} alt="serv" className="sayswitch" style={{height:"auto", width:"150px"}}/>
        </section>
    </div>
  );
};

export default Partner;

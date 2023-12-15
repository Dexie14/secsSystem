"use client";



const FormContact = () => {
  

  return (
    <div className=" bg-[url(/assets/home/callImage.svg)] bg-no-repeat bg-cover overflow-x-hidden py-24">
      <div className="w-11/12 mx-auto md:flex gap-10 items-center" id="contactUs">
        <section className="md:w-[40%]">
          <h1
            style={{ fontFamily: "DMSans" }}
            className="text-white xl:text-5xl md:text-4xl text-3xl pb-10"
          >
            Ready to take your career to the next level at SecsSystems
          </h1>
          <div className="w-1/2 md:w-full">
            <button className="bg-white rounded-3xl py-3 px-6 text-xl text-[#01B14F] w-[200px]">
            <a href = "mailto: enquiries@secsystems.org"> Mail us now </a>
            </button>
          </div>
        </section>
        <section className="md:w-1/2 mt-10 md:mt-0">
          <form>
            <input
              type="text"
              placeholder="Name"
              className="px-5 py-2 bg-white mb-5 rounded placeholder:text-[#828282] w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-5 py-2 bg-white mb-5 rounded placeholder:text-[#828282] w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-5 py-2 bg-white mb-5 rounded placeholder:text-[#828282] w-full"
            />
            <input
              type="text"
              placeholder="Address"
              className="px-5 py-2 bg-white mb-5 rounded placeholder:text-[#828282] w-full"
            />

            <button
              type="submit"
              className="bg-[#BDFFDA] text-[#003518] rounded px-3 py-2 w-full"
              style={{ fontFamily: "DMSans" }}
            >
              Submit Now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FormContact;

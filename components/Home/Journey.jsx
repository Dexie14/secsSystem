const Journey = () => {
  return (
    <div className="w-11/12 py-10 px-3 mx-auto mb-20">
      <h3 style={{ fontFamily: "DMSans" }} className="text-4xl text-primary">
        Our Journey So Far
      </h3>
      <p className="text-xl text-[#4F4F4F] md:w-[47%] my-5 ">
        We've been helping businesses navigate the constantly shifting terrain
        of electronic payments with our highly skilled professionals.
      </p>

      <section className="grid gap-12 md:grid-cols-2 mt-10 xl:grid-cols-3 grid-cols-1">
        <div className="bg-[#DBFFEB] rounded-2xl py-4 px-2">
          <h5 className="text-2xl w-10/12 mt-3">
            Highly skilled professionals with a wealth of experience.
          </h5>
          <p className="text-[#4F4F4F] text-sm mt-4">
            Our team has taken on the responsibility of developing and
            maintaining some of the largest merchant acquisition platforms in
            Nigeria and beyond.
          </p>
        </div>
        <div className="bg-[#DBFFEB] rounded-2xl py-4 px-2">
          <h5 className="text-2xl w-10/12 mt-3">
            With more than 15 years of unwavering expertise in EFT,
          </h5>
          <p className="text-[#4F4F4F] text-sm mt-4">
            Our expertise spans EFT (Electronic fund transfer), web engineering,
            backend engineering, infrastructure engineering, and quality
            assurance, forming a strong foundation in these domains.
          </p>
        </div>
        <div className="bg-[#DBFFEB] rounded-2xl py-4 px-2">
          <h5 className="text-2xl w-9/12 mt-3">
            Highest quality guarantee, delivering maximum satisfaction.
          </h5>
          <p className="text-[#4F4F4F] text-sm mt-4">
            Leveraging our web engineering expertise, we excel at crafting
            payment portals that are not only highly responsive and
            user-friendly but also finely tuned for maximizing conversions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Journey;

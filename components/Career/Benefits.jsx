import BenCard from "./BenCard";

const Benefits = () => {
  return (
    <div className="w-[88%] mx-auto py-10">
      <h2 className="text-center text-4xl mb-5" style={{ fontFamily: "DMSans" }}>
        Benefits and perks
      </h2>
      <p className="text-dark text-center  sm:w-8/12 mx-auto">
        At SecsSystems, we operate with both intelligence and enthusiasm. Our
        commitment is to cultivate a dynamic and supportive workspace where
        individuals can thrive, delivering their utmost and unlocking their full
        capabilities.
      </p>

      <section className="my-10">
        <div className="flex flex-wrap gap-12 items-center justify-center">
          <BenCard text="Explore exciting remuneration packages and adaptable work schedules within our offerings." />
          <BenCard text="Embark on an enriching journey with the chance to contribute to dynamic projects and create a tangible influence within your chosen field." />
          <BenCard text="At the core of our ethos lies a profound appreciation for collaboration, a celebration of creativity, and an unwavering commitment to continuous improvement." />
        </div>
      </section>
    </div>
  );
};

export default Benefits;

import JobCard from "./JobCard";


const EngJob = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-4 gap-y-2 gap-x-4 md:grid-cols-3 min-[500px]:grid-cols-2 grid-cols-1 ">
        <JobCard title="Mid-Level Backend Engineer" text="Fulltime, Onsite" />
        <JobCard title="Mid-Level Backend Engineer" text="Fulltime, Onsite" />
        <JobCard title="Mid-Level Backend Engineer" text="Fulltime, Onsite" />
        <JobCard title="Mid-Level Backend Engineer" text="Fulltime, Onsite" />
        <JobCard title="Mid-Level Backend Engineer" text="Fulltime, Onsite" />
      </section>
    </div>
  );
};

export default EngJob;

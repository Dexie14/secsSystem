import React from "react";

const JobCard = ({ title, text }) => {

    // sm:max-w-[45%] lg:max-w-[30%]
  return (
    <div className="py-4 px-4 bg-white border-[1.5px] border-[#01B14F] rounded-2xl h-[170px] ">
      <h3
        className="text-[#333] text-xl font-semibold"
        style={{ fontFamily: "DMSans" }}
      >
        {title}
      </h3>
      <p className="my-5 text-[#333] text-sm">{text}</p>
      <div className="flex gap-7">
        <p className="text-button text-sm" style={{ fontFamily: "DMSans" }}>
          {" "}
          View Job
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M16.0032 9.53689L7.39663 18.1435L5.98242 16.7293L14.589 8.12268H7.00324V6.12268H18.0032V17.1227H16.0032V9.53689Z"
            fill="#01B14F"
          />
        </svg>
      </div>
    </div>
  );
};

export default JobCard;

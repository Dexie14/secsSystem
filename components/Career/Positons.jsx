"use client";

import React, { useState } from "react";
import AllJob from "./AllJob";
import EngJob from "./EngJob";

const Positons = () => {
  const [activeNav, setActiveNav] = useState("All");

  return (
    <div className="w-[88%] mx-auto py-10">
      <h2 className="text-4xl mb-8" style={{ fontFamily: "DMSans" }}>
        Open positions
      </h2>

      <div className="sm:flex justify-between cursor-pointer w-full">
        <div className="flex justify-between sm:w-[34%]">
          <h6
            onClick={() => setActiveNav("All")}
            className={` pt-2 border-b-[1.5px] border-[#BDBDBD] mx-auto  w-full flex justify-center pb-1 ${
              activeNav === "All"
                ? " border-button border-b-2"
                : "border-[#BDBDBD]"
            }`}
          >
            All
          </h6>
          <h6
            onClick={() => setActiveNav("Engineering")}
            className={` pt-2 border-b-[1.5px] border-[#BDBDBD] mx-auto  w-full flex justify-center pb-1 ${
              activeNav === "Engineering"
                ? " border-button border-b-2"
                : "border-[#BDBDBD]"
            }`}
          >
            Engineering
          </h6>
        </div>
        <div className="flex justify-between sm:w-[34%]">
          <h6
            onClick={() => setActiveNav("Product")}
            className={`pt-2  border-b-[1.5px] border-[#BDBDBD] mx-auto  w-full flex justify-center pb-1 ${
              activeNav === "Product"
                ? " border-button border-b-2"
                : "border-[#BDBDBD]"
            }`}
          >
            Product
          </h6>
          <h6
            onClick={() => setActiveNav("Marketing")}
            className={`pt-2 border-b-[1.5px] border-[#BDBDBD] mx-auto  w-full flex justify-center pb-1 ${
              activeNav === "Marketing"
                ? " border-button border-b-2"
                : "border-[#BDBDBD]"
            }`}
          >
            Marketing
          </h6>
        </div>
        <div className="flex justify-between sm:w-[34%]">
          <h6
            onClick={() => setActiveNav("Sales")}
            className={`pt-2 border-b-[1.5px] border-[#BDBDBD] mx-auto  w-full flex justify-center pb-1 ${
              activeNav === "Sales"
                ? " border-button border-b-2"
                : "border-[#BDBDBD]"
            }`}
          >
            Sales{" "}
          </h6>
          <h6
            onClick={() => setActiveNav("Administration")}
            className={`pt-2 border-b-[1.5px] border-[#BDBDBD] mx-auto  w-full flex justify-center pb-1 ${
              activeNav === "Administration"
                ? " border-button border-b-2"
                : "border-[#BDBDBD]"
            }`}
          >
            Administration{" "}
          </h6>
        </div>
      </div>

      <section className="my-10">
        {activeNav === "All" && <AllJob />}
        {activeNav === "Engineering" && <EngJob />}
        {activeNav === "Product" && <EngJob />}
        {activeNav === "Marketing" && <EngJob />}
        {activeNav === "Sales" && <EngJob />}
        {activeNav === "Administration" && <EngJob />}
      </section>
    </div>
  );
};

export default Positons;

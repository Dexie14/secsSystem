"use client"
import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaBars } from 'react-icons/fa';
import logo from "@/public/assets/home/logo.svg";

const Navbar = () => {

    const [open , setOpen] = useState(false)
    const showNav = () => setOpen(!open);


  return (
    <header className=" py-8 bg-[#EDFFF5]">
      <section className="w-10/12 mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image src={logo} alt="logo" />
          <h6 className="text-primary text-xl font-semibold">SecsSystems</h6>
        </div>
        <div className="md:flex gap-10 hidden justify-between items-center">
          <nav className="flex justify-between gap-12"> 
            <h6 className="font-medium text-[#4F4F4F]">About</h6>
            <h6 className="font-medium text-[#4F4F4F]">Services</h6>
            <h6 className="font-medium text-[#4F4F4F]">Career</h6>
          </nav>
          <div>
            <button className="bg-[#01B14F] rounded-3xl py-3 px-6 text-white">Contact Us</button>
          </div>
        </div>
        {!open ? (
          <button className="md:hidden cursor-pointer" onClick={showNav}>
            <FaBars height={15}/>
          </button>
        ) : (
          <button className="md:hidden cursor-pointer" onClick={showNav}>
            <FaTimes />
          </button>
        )}

      </section>
    </header>
  );
};

export default Navbar;

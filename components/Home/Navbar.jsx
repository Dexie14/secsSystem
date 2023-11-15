"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "@/public/assets/home/logo.svg";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showNav = () => setOpen(!open);

  const pathname = usePathname();

  const title = pathname.split("/")[1];

  return (
    <header
      className=" py-8 bg-background relative top-0 shadow"
      style={{ background: title === "about" ? "#FFF" : "" }}
    >
      <section className="w-10/12 mx-auto flex justify-between items-center">
        <Link href="/" className="no-underline">
          <div className="flex gap-3 items-center">
            <Image src={logo} alt="logo" />
            <h6 className="text-primary text-xl font-semibold">SecsSystems</h6>
          </div>
        </Link>
        <div className="md:flex gap-10 hidden justify-between items-center top-0">
          <nav className="flex justify-between gap-12">
            <Link href="/about" className="no-underline">
              <h6
                className="font-medium text-[#4F4F4F]"
                style={{
                  color: title === "about" ? "#01B14F" : "#4F4F4F",
                }}
              >
                About
              </h6>
            </Link>
            <h6 className="font-medium text-[#4F4F4F]">Services</h6>
            <h6 className="font-medium text-[#4F4F4F]">Career</h6>
          </nav>
          <div>
            <button className="bg-button rounded-3xl py-3 px-6 text-white">
              Contact Us
            </button>
          </div>
        </div>
        {!open ? (
          <button className="md:hidden cursor-pointer" onClick={showNav}>
            <FaBars height={15} />
          </button>
        ) : (
          <button className="md:hidden cursor-pointer" onClick={showNav}>
            <FaTimes />
          </button>
        )}

        {open && (
          <section
            className="flex flex-col justify-center mx-auto left-0 right-0 items-center w-[100%] absolute top-[100%] bg-background p-8 border-2 border-[#05CE9126]"
            style={{
              transform: open ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.95s ease-in-out",
            }}
          >
            <nav className="flex flex-col gap-14 justify-between items-center w-full mb-[50px]">
              <Link href="/about" className="no-underline">
                <h6
                  className="font-medium text-[#4F4F4F]"
                  style={{
                    color: title === "about" ? "#01B14F" : "#4F4F4F",
                  }}
                >
                  About
                </h6>
              </Link>
              <h6 className="font-medium text-[#4F4F4F]">Services</h6>
              <h6 className="font-medium text-[#4F4F4F]">Career</h6>
            </nav>
            <div className="flex flex-col items-center gap-6 justify-between w-full">
              <Link href="/login" className="no-underline">
                <button className="bg-button rounded-3xl py-3 px-6 text-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </section>
        )}
      </section>
    </header>
  );
};

export default Navbar;

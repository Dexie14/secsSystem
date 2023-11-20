"use client";

import file from "@/public/assets/career/file.svg";
import Image from "next/image";
import { useState } from "react";

const Form = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleFileChange = (event) => {
    // console.log(event.target.files, "event");
    const file = event.target.files[0];

    // Check if the file size is within the limit (10MB)
    if (!file) {
      setErrorMessage("Please choose a file.");
      toggleModal();
    } else if (file.size > 10 * 1024 * 1024) {
      setErrorMessage(
        "File size exceeds the 10MB limit. Please choose a smaller file."
      );
      toggleModal();
    } else {
      setErrorMessage("");
      setIsModalOpen(false);
      setSelectedFile(file);
    }
  };

  const handleFileDelete = () => {
    setSelectedFile(null);
  };

  return (
    <div className=" bg-[url(/assets/home/callImage.svg)] bg-no-repeat bg-cover overflow-x-hidden py-24">
      <div className="w-11/12 mx-auto md:flex gap-10 items-center">
        <section className="md:w-[40%]">
          <h1
            style={{ fontFamily: "DMSans" }}
            className="text-white xl:text-5xl md:text-4xl text-3xl pb-10"
          >
            Ready to take your career to the next level at SecsSystems
          </h1>
          <div className="w-1/2 md:w-full">
            <button className="bg-white rounded-3xl py-3 px-6 text-xl text-[#01B14F] w-[200px]">
              Call us now
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
            <input
              type="text"
              placeholder="Role you want to apply for"
              className="px-5 py-2 bg-white mb-5 rounded placeholder:text-[#828282] w-full"
            />

            <div className="bg-white flex flex-col items-center justify-center py-5 rounded mb-5">
              <input
                id="resume"
                type="file"
                className="hidden"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={handleFileChange}
              />
              <label htmlFor="resume" className="cursor-pointer" type="button">
                {selectedFile ? (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt={selectedFile.name}
                      className="object-cover h-20 w-full rounded-md bg-[#BDFFDA]"
                    />
                    <button
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-md"
                      onClick={handleFileDelete}
                    >
                      X
                    </button>
                  </div>
                ) : (
                  <Image src={file} alt="file" />
                )}
              </label>
              <p className="text-xl text-[#828282] my-2">Upload Resume</p>
              <p className="text-[#828282] text-sm">Maximum file 10MB</p>
            </div>

            {isModalOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="flex align-bottom bg-white rounded-lg text-left justify-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white p-4">
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                    <button
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                      Close Modal
                    </button>
                  </div>
                </div>
                <div
                  className="w-full h-full  backdrop-blur-[1px] bg-white/25 pt-4 absolute top-0 left-0 -z-10"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                />
              </div>
            )}

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

export default Form;

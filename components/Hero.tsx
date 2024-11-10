import { Details } from "@/utils/general";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-screen h-[69px] bg-[#CEFEFF] flex">
        <h3 className="m-auto text-center text-sm sm:text-base">
          Learn coding at the nearby{" "}
          <span className="text-[#1C408E]">Coding Pro</span> Institute.{" "}
          <span className="text-[#1C408E] underline cursor-pointer">
            Enquire now
          </span>
        </h3>
      </div>

      <nav className="flex flex-col md:flex-row justify-between w-full md:w-[90%] h-[95px] mx-auto items-center px-4 md:px-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={65}
          className="md:w-[300px] md:h-[95px]"
        />
        <ul className="hidden md:flex h-[23px] gap-4 md:gap-10 justify-center items-center mt-4 md:mt-0">
          <li className="text-sm md:text-lg">About us</li>
          <li className="text-sm md:text-lg">Virtual Labs</li>
          <li className="text-sm md:text-lg">Programs</li>
          <li className="text-sm md:text-lg">For colleges</li>
        </ul>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="text-[#2B95ED] border-[#2B95ED] border-2 px-4 md:px-6 py-1 rounded-[10px] text-sm md:text-base">
            Log in
          </button>
          <button className="bg-[#2B95ED] text-white px-6 md:px-10 py-2 rounded-[10px] text-sm md:text-base">
            Register
          </button>
        </div>
      </nav>

      <section className="flex flex-col md:flex-row w-[90%] md:w-[86%] mt-10 mx-auto gap-4 md:gap-10 items-center relative">
        <Image
          src="/mac.png"
          alt="Mac"
          width={300}
          height={250}
          className="md:w-[626px] md:h-[484px]"
        />
        <Image
          src="/blank.png"
          className="absolute top-0 w-[300px] md:w-[626px] h-[200px] md:h-[351px]"
          alt="blank"
          height={200}
          width={300}
        />
        <div>
          <h1 className="text-3xl md:text-[72px] font-semibold leading-tight md:leading-[82px] text-[#4C5856] -mt-4 md:-mt-14 text-center md:text-left">
            Where The World Learns To Code
          </h1>
          <div className="flex flex-col md:flex-row w-full md:w-[604px] gap-4 md:gap-5 mt-5">
            <div className="flex w-full md:w-[289px] h-auto md:h-[263px] rounded-[10px] border-2 shadow-lg shadow-gray-500/50 border-[#2B95ED] items-center justify-center flex-col p-4">
              <Image
                src="/university (1).png"
                alt="universityLogo"
                height={55}
                width={56}
              />
              <h3 className="text-[#1C408E] font-bold text-center mt-2">
                Campus Training
              </h3>
              <p className="text-[#4C5856] mt-2 text-xs md:text-sm text-center">
                Designed for college students with a focus on xyz, xyz, xyz
                Lorem ipsum dolor
              </p>
              <button className="mt-4 md:mt-7 flex rounded-lg bg-[#2B95ED] py-2 px-6 text-white text-sm hover:bg-[#9b86e8] hover:scale-100 duration-150">
                Explore{" "}
                <Image
                  src="/v6-icon.png"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </button>
            </div>

            <div className="flex w-full md:w-[289px] h-auto md:h-[263px] rounded-[10px] border-2 shadow-lg shadow-gray-500/50 border-[#2B95ED] items-center justify-center flex-col p-4">
              <Image
                src="/office.png"
                alt="officeLogo"
                height={55}
                width={56}
              />
              <h3 className="text-[#1C408E] font-bold text-center mt-2">
                Professional Training
              </h3>
              <p className="text-[#4C5856] mt-2 text-xs md:text-sm text-center">
                Designed for college students with a focus on xyz, xyz, xyz
                Lorem ipsum
              </p>
              <button className="mt-4 md:mt-7 flex rounded-lg bg-[#2B95ED] py-2 px-6 text-white text-sm hover:bg-[#9b86e8] hover:scale-100 duration-150">
                Explore{" "}
                <Image
                  src="/v6-icon.png"
                  alt="arrow"
                  width={20}
                  height={20}
                  className="ml-2"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap w-[90%] md:w-[86%] mt-10 mx-auto gap-4 md:gap-12 items-center relative">
        {Details.map((key, index) => (
          <div
            key={index}
            className="border-2 border-[#2B95ED] w-full md:w-[280px] h-auto md:h-[122px] rounded-[8px] flex items-center gap-4 p-4"
          >
            <Image
              src={key.image}
              alt="Logo"
              width={60}
              height={60}
              className="md:w-[89.6px] md:h-[80px]"
            />
            <div>
              <h1 className="text-[#2B95ED] font-bold text-xl md:text-[30px]">
                {key.numbers}
              </h1>
              <h1 className="text-[#2B95ED] font-bold text-xl md:text-[30px]">
                {key.types}
              </h1>
            </div>
          </div>
        ))}
        <Image
          className="absolute -bottom-10 md:-bottom-16 right-4 md:right-14"
          src="/Ornament 107.jpg"
          alt="ornament"
          height={30}
          width={300}
        />
      </section>
    </div>
  );
};

export default Hero;

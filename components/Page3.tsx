import { Practices } from "@/utils/general";
import Image from "next/image";
import React from "react";

const Page3 = () => {
  return (
    <div className="pt-20 px-4 md:pl-10 relative items-center justify-center">
      <Image
        className="absolute left-1/2 transform -translate-x-1/2 -mt-16 md:-ml-[28rem] md:-mt-[3.4rem] z-10 w-20 h-20 md:w-[180px] md:h-[180px]"
        src="/ornament 115.jpg"
        alt="ornament"
        height={180}
        width={180}
      />
      <Image
        className="absolute left-0 top-32 z-20 w-[200px] md:w-[454px] h-auto"
        src="/sl_031420_28950_12 3.png"
        alt="background"
        height={1092}
        width={454}
      />
      <h1 className="relative text-center text-[24px] md:text-[50px] max-w-full md:max-w-[1020px] h-auto md:h-[144px] mx-auto z-50 leading-snug md:leading-normal mt-20 md:mt-0 px-4">
        Check Out Our <span className="text-[#008D8F]">Holistic Programs </span>
        Designed To Help You Reach Your{" "}
        <span className="text-[#008D8F]">Goals</span>
      </h1>

      <Image
        src="/ornament 86.jpg"
        alt="ornament"
        height={170}
        width={155}
        className="absolute right-16 md:right-72 top-60 z-10 w-14 h-14 md:w-[155px] md:h-[170px]"
      />
      <Image
        src="/ornament 87.jpg"
        alt="ornament"
        height={170}
        width={155}
        className="absolute right-16 md:right-72 -bottom-10 z-0 w-14 h-14 md:w-[155px] md:h-[170px]"
      />
      <div className="relative w-full md:w-[60%] md:ml-52 mt-24 md:mt-10 z-50 flex flex-col gap-10">
        {Practices.map((i) => (
          <div
            key={i.imageUrl}
            className="relative w-full md:w-[945px] h-auto md:h-[371px] rounded-[16px] flex flex-col md:flex-row gap-5 md:gap-10 p-4 shadow-[0px_4px_6px_rgba(0,0,0,0.1)]"
          >
            <Image
              src={i.imageUrl}
              alt={i.title}
              height={400}
              width={400}
              className="w-full md:w-[400px] h-auto"
            />
            <div className="flex flex-col gap-2 md:gap-5">
              <h1 className="text-[18px] md:text-[20px] font-bold">
                {i.title}
              </h1>
              <h3 className="text-[#5B5B5B] text-[18px] md:text-[22px]">
                {i.for}
              </h3>
              <h5 className="text-[#3B3A3A] text-[12px] md:text-[20px]">
                {i.para}
              </h5>
              <button className="absolute bottom-4 md:bottom-6 right-4 flex rounded-lg bg-[#2B95ED] hover:bg-[#9b86e8] py-2 md:py-3 px-4 md:px-6 text-white md:mt-10 text-sm w-[6rem] md:w-[8rem]">
                Explore
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
        ))}
      </div>
    </div>
  );
};

export default Page3;

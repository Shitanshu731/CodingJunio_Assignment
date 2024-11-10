import { courses } from "@/utils/general";
import Image from "next/image";
import React from "react";

export const Images = ["/ministry.png", "/nsdc.png", "/startup.png"];

const Page2 = () => {
  return (
    <div>
      {/* First Section */}
      <section className="bg-[#C5E5FF33] w-full h-auto md:h-[208px] mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-5 px-4">
        {Images.map((src, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index < 2 ? "border-b border-black md:border-r md:border-b-0" : ""
            } ${index < 2 ? "pr-4 md:pr-8" : ""}`}
          >
            {index === 1 && (
              <h3 className="text-base md:text-lg font-semibold text-center text-[#53607B] mb-4">
                RECOGNIZED BY
              </h3>
            )}
            <Image
              src={src}
              alt={`Image ${index}`}
              height={130}
              width={361}
              className={`${index === 0 || index === 2 ? "mt-6 md:mt-10" : ""}`}
            />
          </div>
        ))}
      </section>

      {/* Second Section */}
      <section className="bg-gradient-to-r from-[#2B95ED] to-[#185587] w-full min-h-screen px-4 md:px-36 gap-4 md:gap-10 py-5">
        <h1 className="text-white text-3xl md:text-5xl mt-10 md:mt-20 text-center md:text-left">
          What sets us apart?
        </h1>

        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 mt-10">
          {courses.map((i) => (
            <div
              key={i.title}
              className="bg-white w-full md:w-[372px] h-auto md:h-[280px] rounded-[16px] p-6 md:pl-7 md:pt-4 text-center md:text-left"
            >
              <Image
                src={i.image}
                alt={i.title}
                height={118}
                width={118}
                className="mx-auto md:ml-0 mb-2"
              />
              <h3 className="text-[#2B95ED] mb-2 text-lg md:text-[20px] font-bold">
                {i.title}
              </h3>
              <p className="text-sm max-w-full md:max-w-56">{i.para}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page2;

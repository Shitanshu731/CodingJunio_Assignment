import Image from "next/image";
import React from "react";

const Page4 = () => {
  return (
    <div className="pt-20 px-4 items-center justify-center">
      <div className="flex items-center justify-center w-[80%] mx-auto max-md:gap-10">
        <Image
          className="max-md:w-[80px]"
          src="/Ornament 117.jpg"
          alt="ornament"
          height={158}
          width={135}
        />
        <h1 className="text-[44px] text-center max-md:text-[15px] ">
          Our Efforts To <span className="text-[#008D8F]">Innovate</span> Have
          Been <span className="text-[#008D8F]">Recognized</span> And{" "}
          <span className="text-[#008D8F]">Appreciated</span>
        </h1>
        <Image
          className="max-md:w-[80px]"
          src="/Ornament 119.jpg"
          alt="ornament"
          height={158}
          width={135}
        />
      </div>
      <div className="flex mt-20 relative">
        <Image
          className="mt-32"
          src="/Gamers.png"
          alt="GamersBgShape"
          height={734}
          width={1784}
        />
        <Image
          className="top-80  ml-[2rem] absolute  z-10 cursor-pointer hover:scale-150 duration-100 max-md:hover:scale-75 max-md:w-10 max-md:top-[18.7rem]"
          src="/leftArrow.png"
          alt="GamersBgShape"
          height={50}
          width={50}
        />
        <div className="absolute top-20 ml-48 max-md:w-60 max-md:ml-[2rem] max-md:top-20">
          <Image
            src="/Rectangle 9443.png"
            alt="Rectangle"
            height={398}
            width={701}
          />
          <Image
            className="absolute top-5 "
            src="/Mask group.png"
            alt="Rectangle"
            height={378}
            width={676}
          />
        </div>
        <h1 className="absolute z-10 text-[23px] top-36  ml-[56rem] text-white w-[20rem] text-left max-md:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum
        </h1>
        <Image
          className="top-64  ml-[97rem] absolute  z-10 cursor-pointer hover:scale-150 max-md:hover:scale-75 duration-100 max-md:ml-[27rem] max-md:w-10 max-md:top-[18.7rem]"
          src="/rightArrow.png"
          alt="GamersBgShape"
          height={50}
          width={50}
        />
      </div>
      <div className="flex relative mt-10">
        <h1 className="absolute z-10 text-[23px] -top-[10rem]   ml-[16rem] text-white w-[26rem] text-right max-md:hidden">
          Honored by Shri Dharmendra Pradhan ji Union Minister for Education
          Govt. of India - 2023
        </h1>
        <div>
          <Image
            className="absolute -top-80  ml-[42rem] max-md:ml-[10rem] max-md:w-60 max-md:-top-32 "
            src="/partner.png"
            alt="Rectangle"
            height={378}
            width={676}
          />
        </div>
      </div>
    </div>
  );
};

export default Page4;

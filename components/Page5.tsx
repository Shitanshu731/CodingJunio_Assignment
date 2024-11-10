import Image from "next/image";
import React from "react";

const Page5 = () => {
  return (
    <div className="pt-20 px-4 items-center justify-center z-50">
      <div className="text-center mt-20">
        <p className="text-[2rem] text-[#4C5856] z-60">
          We know just education is not enough anymore
        </p>
        <h1 className="text-[3.4rem] text-[#4C5856]">
          So We’ve Got The <span className="text-[#008D8F]">Best Mentors</span>{" "}
          For You.
        </h1>
      </div>

      <div className="py-10 px-20 mt-20 flex justify-between relative mx-auto max-md:flex-col max-md:gap-5">
        <Image
          className="absolute -top-[8.2rem] z-0 max-md:hidden"
          src="/Ornament 94.jpg"
          alt="frame"
          height={100}
          width={100}
        />
        <Image
          className="absolute -top-[6.2rem] ml-28 -z-0 max-md:hidden"
          src="/Ornament 96.jpg"
          alt="frame"
          height={150}
          width={150}
        />
        <Image
          className="absolute -top-[4.2rem] right-6 z-0 max-md:hidden"
          src="/Ornament 99.jpg"
          alt="frame"
          height={300}
          width={300}
        />
        <Image
          className="absolute top-[20.2rem] -ml-20 z-0 max-md:hidden"
          src="/Ornament 100.jpg"
          alt="frame"
          height={300}
          width={300}
        />
        <Image
          className="z-0"
          src="/lady.png"
          alt="frame"
          height={643}
          width={405}
        />
        <Image src="/man2.png" alt="frame" height={643} width={405} />
        <Image
          className="z-0"
          src="/lady.png"
          alt="frame"
          height={643}
          width={405}
        />
      </div>
    </div>
  );
};

export default Page5;

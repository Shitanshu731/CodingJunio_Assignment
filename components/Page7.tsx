import Image from "next/image";
import React from "react";

const Page7 = () => {
  return (
    <div className="pt-20 px-60 mt-20 items-center flex gap-5 justify-between max-md:flex-col">
      <section className="max-md:hidden">
        <Image
          src="/Phone.png"
          className="-ml-10 z-10 "
          alt="Phone"
          height={882}
          width={487}
        />
      </section>
      <section className="md:relative flex flex-col gap-10 max-md:pb-20">
        <div className="md:absolute md:-mt-40 md:w-[700px]">
          <h1 className="text-[3rem] font-semibold text-[#4C5856] max-md:text-[2rem] max-md:w-96">
            Wanna See More ?
          </h1>
          <h1 className="text-[3rem] font-semibold text-[#4C5856] max-md:text-[2rem]">
            Join Us !
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <Image src="/Frame2.png" alt="Ornament" height={243} width={41} />
            <Image src="/Frame1.png" alt="Ornament" height={226} width={145} />
          </div>
          <div className="flex gap-2">
            <Image src="/Frame3.png" alt="Ornament" height={243} width={41} />
            <Image src="/Frame4.png" alt="Ornament" height={226} width={145} />
          </div>
        </div>
      </section>
      <section className="flex flex-col max-md:hidden">
        <Image src="/Ornament 88.jpg" alt="Ornament" height={300} width={144} />
        <Image src="/Ornament 88.jpg" alt="Ornament" height={300} width={144} />
      </section>
    </div>
  );
};

export default Page7;

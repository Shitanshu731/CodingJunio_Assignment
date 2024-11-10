import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-[url('/bottom.png')] bg-cover bg-center h-full w-full p-10 justify-evenly max-md:flex-col max-md:gap-5">
      <section>
        <Image src="/Footer1.png" alt="footer" height={457} width={612} />
      </section>
      <section className="md:border-l-2 md:border-[rgba(255,255,255,0.3)] md:pl-10">
        <Image src="/Footer2.png" alt="footer" height={315} width={682} />
      </section>
    </div>
  );
};

export default Footer;

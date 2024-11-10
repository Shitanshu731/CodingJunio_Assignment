import Image from "next/image";
import React from "react";

const Offerings = () => {
  return (
    <div className="mt-40 relative z-0">
      <Image
        src="/Offering.png"
        alt="offerinf"
        height={216}
        width={1048}
        className="mx-auto"
      />
      <Image
        src="/students.png"
        alt="offerinf"
        height={416}
        width={614}
        className="mx-auto z-50"
      />
      <Image
        src="/Ornament 122.jpg"
        alt="offerinf"
        height={201}
        width={80}
        className="absolute right-20 top-[30rem] max-md:hidden"
      />
      <Image
        src="/offeringFrame.png"
        alt="offerinf"
        height={1299}
        width={1699}
        className="mx-auto"
      />
      <Image
        src="/Line 125.png"
        alt="offerinf"
        height={10}
        width={10}
        className="absolute mx-auto  top-[45rem] max-md:hidden left-[54rem] z-0"
      />
      <Image
        src="/Offering3.png"
        alt="offerinf"
        height={128}
        width={1728}
        className=" mx-auto"
      />
    </div>
  );
};

export default Offerings;

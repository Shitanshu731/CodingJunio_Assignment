import Image from "next/image";
import React from "react";
export const News = [
  {
    url: "/News1.png",
    index: 1,
  },
  {
    url: "/News2.png",
    index: 2,
  },
  {
    url: "/News3.png",
    index: 3,
  },
];

const Page6 = () => {
  return (
    <div className="pt-20 px-4 items-center justify-center relative ">
      <h1 className="text-center mx-auto  text-[3.5rem] text-[#4C5856] ">
        We’ve Also Been in <span className="text-[#008D8F]">News!</span>
      </h1>
      <Image
        src="/Ornament 103.jpg"
        alt="Ornament"
        height={289}
        width={300}
        className="z-0 mt-4 ml-9 absolute"
      />
      <Image
        src="/Ornament 105.jpg"
        alt="Ornament"
        height={180}
        width={173}
        className="z-0 mt-8 right-12 absolute"
      />
      <Image
        src="/Ornament 104.jpg"
        alt="Ornament"
        height={289}
        width={300}
        className="z-0 mt-[25rem] right-[23rem] absolute"
      />
      <div className="flex justify-between w-[90%] mx-auto mt-20 max-md:flex-col">
        {News.map((i) => (
          <Image
            className="z-10"
            key={i.index}
            src={i.url}
            alt={i.url}
            height={512}
            width={396}
          />
        ))}
      </div>
    </div>
  );
};

export default Page6;

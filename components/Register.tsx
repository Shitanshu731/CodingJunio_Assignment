import Image from "next/image";
import React from "react";

const Register = () => {
  return (
    <div className="pt-20 px-10 mt-20 items-center flex gap-5 justify-between max-md:flex-col pb-20 max-md:px-5 max-sm:pt-10 max-sm:mt-10 max-sm:gap-4">
      <div className="relative">
        <Image
          src="/Ornament 110.jpg"
          alt="Ornament"
          height={200}
          width={200}
          className="absolute -top-20 ml-20 max-md:hidden"
        />
        <Image
          src="/Ornament 108.jpg"
          alt="Ornament"
          height={100}
          width={100}
          className="absolute top-5 right-10 max-md:hidden"
        />
        <section className="relative shadow-[4px_4px_6px_rgba(0,0,0,0.4)] flex gap-10 p-20 rounded-lg w-full max-md:flex-col max-md:p-5 max-sm:p-5 max-sm:gap-6">
          <Image
            src="/Ornament 109.jpg"
            alt="Ornament"
            height={150}
            width={150}
            className="absolute z-10 top-10 left-[34rem] max-md:hidden"
          />
          <Image
            src="/Programmer.png"
            alt="Image"
            height={408}
            width={671}
            className="w-full max-md:mx-auto z-50"
          />
          <div className="flex flex-col gap-12 max-md:gap-6 max-sm:gap-4 w-full">
            <h1 className="text-[3rem] text-[#2B95ED] max-md:text-[2.5rem] max-sm:text-[1.8rem] text-left max-sm:w-full md:w-[30rem]">
              Find Out More Reasons To Stay
            </h1>
            <input
              type="text"
              placeholder="Full Name"
              className="border-2 w-full max-w-xs p-4 rounded-[14px] max-sm:p-3"
            />
            <input
              type="text"
              placeholder="Mobile no."
              className="border-2 w-full max-w-xs p-4 rounded-[14px] max-sm:p-3"
            />
            <input
              type="text"
              placeholder="City"
              className="border-2 w-full max-w-xs p-4 rounded-[14px] max-sm:p-3"
            />
            <div className="flex gap-2 max-md:flex-col max-md:items-start">
              <input type="checkbox" />
              <p className="text-left text-[#4F4F4F] text-lg max-sm:text-xs">
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and default Notification Settings
              </p>
            </div>
            <button className="w-full max-w-xs rounded-[16px] mx-auto px-5 py-4 bg-[#2B95ED] text-white max-sm:px-4 max-sm:py-3">
              Enquire Now
            </button>
            <div className="mx-auto text-xl">
              Already Have An Account?{" "}
              <span className="underline">Sign In</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import Link from "next/link";
import clampLogo from "@/public/images/clampLogo.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <>
    <div className="navbar sm:container sm:mx-auto flex flex-row justify-between items-center py-8 px-12" >
     <div className="clamp-logo">
        <Image src={clampLogo} alt={""}></Image>
    </div>   
     <div className="flex flex-row gap-x-16 font-syne text-base font-bold text-product-green">
        <div>FEATURES</div>
        <div>FAQS</div>
        <div>INDEXES</div>
    </div>   
     <div className="">
    <button className="border-2 text-lg text-product-green font-poppins font-medium px-3 drop-shadow-sm py-2 border-product-green bg-product-yellow rounded-lg">Connect</button>    
    </div>   
     </div>
    </>
  );
};
export default Navbar;

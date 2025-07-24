import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full h-8 justify-center gap-x-7 items-center text-xs md:mb-10 mb-15">
      <Link href="/" className="w-fit">
        <span className="antialiased font-bold mr-1">KANZ</span>
        <span>| shop{new Date().getFullYear()}</span>
      </Link>

      <div className="flex justify-between h-75/100 gap-x-5">
        <a href="https://www.instagram.com/kanz2wear?igsh=ZjZhdThhdjdkN3Fs" className="h-full">
          <Image 
          src="/logos/instagram-logo.svg" 
          alt="Instagram Logo" 
          className="h-full" 
          width={40}
          height={40}
          />
        </a>
        <a href="https://www.tiktok.com/@kanz_2_wear1?_t=ZS-8yFZD5aOO8Y&_r=1" className="h-full">
          <Image 
          src="/logos/tiktok-logo.svg" 
          alt="TikTok Logo" 
          className="h-full" 
          width={40}
          height={40}
          />
          
        </a>
      </div>
    </div>
  );
};

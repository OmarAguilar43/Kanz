import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full h-8 justify-center items-center gap-x-3 text-xs md:mb-10 mb-15">
      <Link href="/" className="w-fit pr-5 border-r border-r-white">
        <span className="antialiased font-bold">KANZ</span>
      </Link>

      <div className="flex justify-between w-auto h-70/100 bg-red-500lolo">
        <a
          href="https://www.instagram.com/kanz2wear?igsh=ZjZhdThhdjdkN3Fs"
          className="h-full"
        >
          <Image
            src="/logos/instagram-logo.svg"
            alt="Instagram Logo"
            className="h-full"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.tiktok.com/@kanz_2_wear1?_t=ZS-8yFZD5aOO8Y&_r=1"
          className="h-full"
        >
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

"use client";
import Image from "next/image";


export default function Diaper() {
  return (
   <div className="flex justify-center items-center gap-4 xs:gap-2 flex-wrap">
            <div className="pampers">
              <Image
                src="/pampers.png"
                alt="Logo Pampers"
                width={160}
                height={100}
                className="w-24 h-auto lg:w-32 md:w-32 sm:w-28 xs:w-20 xxs:w-14" 
              />
            </div>
            <div className="huggies">
              <Image
                src="/huggies.png"
                alt="Logo Huggies"
                width={160}
                height={100}
                className="w-24 h-auto lg:w-32 md:w-32 sm:w-28 xs:w-20 xxs:w-14"
              />
            </div>
            <div className="babysec">
              <Image
                src="/babysec.png"
                alt="Logo BabySec"
                width={160}
                height={100}
                className="w-24 h-auto lg:w-32 md:w-32 sm:w-28 xs:w-20 xxs:w-14"
              />
            </div>
          </div>
  );
}

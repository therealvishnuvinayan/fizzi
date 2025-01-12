import React from "react";
import { FizziLogo } from "@/components/FizziLogo";
import Image from "next/image";
import { Bounded } from "@/components/Bounded";
import Button from '@/components/Button';

type Props = {};

const Hero = (props: Props) => {
  return (
    <Bounded>
      <div className="grid">
        <div className="-mb-28 flex justify-center py-4">
          <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
        </div>
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <div className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
              Live Gutsy
            </div>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              Soda Perfected
            </div>
            <div className="hero-body text-2xl font-normal text-sky-950">
              3-5g sugar. 9g fiber. 5 delicious flavors.
            </div>
            <Button className="hero-button mt-12" buttonLink="" buttonText="SHOP NOW" />
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src="/assets/all-cans-bunched.png"
            alt="Fizzi Cans"
            width={500}
            height={300}
            priority
          />
          <div>Try all five flavors</div>
          <div>
            Our soda is made with real fruit juice and a touch of cane sugar. We
            never use artificial sweeteners or high fructose corn syrup. Try all
            five flavors and find your favorite!
          </div>
        </div>

        <div>
          <div>DIVE</div>
          <div>INTO</div>
          <div>BETTER</div>
          <div>HEALTH</div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;

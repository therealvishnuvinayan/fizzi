"use client";

import { FizziLogo } from "@/components/FizziLogo";
import Image from "next/image";
import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const introTl = gsap.timeline();
    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-header-word", {
        scale: 3,
        opacity: 0,
        ease: "power4.in",
        delay: 0.3,
        stagger: 1,
      })
      .from(".hero-subheading", { opacity: 0, y: 30 }, "+=.8")
      .from(".hero-body", { opacity: 0, y: 10 })
      .from(".hero-button", { opacity: 0, y: 10, duration: 0.06 });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
      },
    });

    scrollTl
      .fromTo(
        "body",
        { backgroundColor: "#FDE047" },
        { backgroundColor: "#D9F99D", overwrite: "auto" },
        1,
      )
      .from(".text-side-heading .split-char", {
        scale: 1.3,
        y: 40,
        rotate: -25,
        opacity: 0,
        stagger: 0.1,
        ease: "back.inOut(3)",
        duration: 0.5,
      })
      .from(".text-side-body", { y: 20, opacity: 0 });
  });

  return (
    <Bounded className="hero opacity-0">
      <div className="grid">
        <div className="-mb-28 flex justify-center py-4">
          <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
        </div>
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <div className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text="Live Gutsy"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </div>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              Soda Perfected
            </div>
            <div className="hero-body text-2xl font-normal text-sky-950">
              3-5g sugar. 9g fiber. 5 delicious flavors.
            </div>
            <Button
              className="hero-button mt-12"
              buttonLink=""
              buttonText="SHOP NOW"
            />
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src="/assets/all-cans-bunched.png"
            alt="Fizzi Cans"
            width={500}
            height={300}
            priority
            className="w-full md:hidden"
          />
          <div className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
            <TextSplitter text="Try all five flavors" />
          </div>
          <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
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

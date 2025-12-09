import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useState } from "react";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useGSAP(() => {
    gsap.set("#image-frame", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      borderRadius: "0% 0% 0% 0%",
    });

    gsap.to("#image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      scale: 0.5,
      opacity: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#image-frame",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden bg-black">
      {!imageLoaded && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <div className="three-body">
            <div className="three-body__dot bg-orange-500"></div>
            <div className="three-body__dot bg-orange-500"></div>
            <div className="three-body__dot bg-orange-500"></div>
          </div>
        </div>
      )}

      <div
        id="image-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden bg-black"
      >
        <div>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/01f7a238-0c77-434c-be43-fdabf9baf501/d4j4oln-8a1daa58-c16f-43cf-a076-be911d9fa2d5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8wMWY3YTIzOC0wYzc3LTQzNGMtYmU0My1mZGFiZjliYWY1MDEvZDRqNG9sbi04YTFkYWE1OC1jMTZmLTQzY2YtYTA3Ni1iZTkxMWQ5ZmEyZDUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yumazHjueWW-snz0mlOmA3p-9U13nw10Dk9CWIf2jno"
            alt="Hero"
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoad={handleImageLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-orange-500 mix-blend-difference">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-orange-500">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-white">
              Survive the Warzone <br /> Join the Battle, <br /> Conquer the Future.
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-orange-600 text-white flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-orange-100">
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default Hero;
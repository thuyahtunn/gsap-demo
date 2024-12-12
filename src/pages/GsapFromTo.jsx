import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        borderRadius: 0,
        rotation: 0,
      },
      {
        x: 350,
        rotation: 360,
        borderRadius: 100,
        duration: 2,
        ease: "bounce.out",
      }
    );
  }, []);
  return (
    <div className=" flex flex-col gap-28">
      <h1 className=" text-2xl font-bold font-sans text-gray-100">
        GSAP FROM TO Method
      </h1>
      <div id="red-box" className=" w-20 h-20 bg-red-500 rounded-lg"></div>
    </div>
  );
};

export default GsapFromTo;

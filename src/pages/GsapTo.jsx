import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapTo = () => {
  useGSAP(() => {
    gsap.from("#blue-box", {
      x: 250,
      duration: 1,
      rotation: 360,
    });
  }, []);
  return (
    <div className=" flex flex-col gap-28">
      <h1 className=" text-2xl font-bold font-sans text-gray-100">
        GSAP TO Method
      </h1>
      <div id="blue-box" className=" w-20 h-20 bg-blue-500 rounded-lg"></div>
    </div>
  );
};

export default GsapTo;

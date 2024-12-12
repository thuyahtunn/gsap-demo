import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const GsapTimeline = () => {
  const tl = gsap.timeline({ repeat: 1, repeatDelay: 1, yoyo: true });
  const handleBtn = () => {
    if (tl.paused()) {
      tl.play();
    } else {
      tl.pause();
    }
  };
  useGSAP(() => {
    tl.to("#blue-box", {
      x: 250,
      borderRadius: "100%",
      rotation: 360,
      duration: 2,
      ease: "back.inOut",
    });
    tl.to("#blue-box", {
      y: 150,
      borderRadius: "100%",
      scale: 2,
      duration: 2,
      ease: "back.inOut",
      rotation: 360,
    });
    tl.to("#blue-box", {
      x: 500,
      scale: 1,
      borderRadius: "8px",
      rotation: 360,
      duration: 2,
      ease: "back.inOut",
    });
  }, []);
  return (
    <div className=" flex flex-col gap-28">
      <h1 className=" text-2xl font-bold font-sans text-gray-100">
        GSAP TO Method
      </h1>
      <button
        onClick={handleBtn}
        className=" border select-none px-5 py-2.5 bg-gray-200 rounded text-gray-50)"
      >
        Play/Pause
      </button>
      <div id="blue-box" className=" w-20 h-20 bg-blue-500 rounded-lg"></div>
    </div>
  );
};

export default GsapTimeline;

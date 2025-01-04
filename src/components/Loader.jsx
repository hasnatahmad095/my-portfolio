import React, { useEffect, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const Loader = ({ onAnimationComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const loaderDuration = 3;
    const counter = { value: 0 };

    const updateLoaderText = () => {
      const progress = Math.round(counter.value);
      document.querySelector(".number-load").textContent = progress;
    };

    const endLoaderAnimation = () => {
      setAnimationComplete(true);
      onAnimationComplete();
    };

    // Custom easing curve
    const customEase =
      "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";

    // GSAP timeline with ticker to ensure it keeps running even if the tab is inactive
    gsap.ticker.lagSmoothing(0);
    const tl = gsap.timeline({
      onComplete: endLoaderAnimation,
    });

    tl.addLabel("start")
      .to(".text-block-2", { opacity: 1, duration: 0.5 })
      .to(".number-load", { opacity: 1, duration: 0.5 }, "start")
      .to(
        counter,
        {
          value: 100,
          onUpdate: updateLoaderText,
          duration: loaderDuration,
          ease: CustomEase.create("custom", customEase),
        },
        "start"
      )
      .to(
        ".loader-line",
        {
          duration: loaderDuration,
          width: "65%",
          ease: CustomEase.create("custom", customEase),
        },
        "start"
      );

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete]);

  return (
    <div className="loader font-primary z-[1000] w-full h-screen text-neutralLight flex flex-col justify-center items-center p-[2.8em] fixed top-0 bottom-auto left-0 right-0 overflow-hidden">
      <div className="loader-wrapper w-full flex justify-between items-center overflow-hidden">
        <div style={{ opacity: 0 }} className="text-block-2">
          Full-Stack Developer <br /> &amp; Designer
        </div>
        <div
          style={{ opacity: 1 }}
          className="loading-percentage-wrapper flex overflow-hidden"
        >
          <div className="number-load py-[10px] text-[5em]">0</div>
          <div className="percentage-load py-[10px] text-[5em]">%</div>
        </div>
        <div style={{ opacity: 0 }} className="text-block-2 text-right">
          Hasnat Ahamd
          <br />
          Portfolio 2025
        </div>
      </div>
      <div className="loader-line w-[0%] h-[1.5px] bg-neutralLight overflow-hidden"></div>
    </div>
  );
};

export default Loader;

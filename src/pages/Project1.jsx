import React, { useEffect, useRef } from "react";
import transition from "../transtion";
import { data } from "./projectdata/projectData";
import { Link, useParams } from "react-router-dom";
import "./new.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Footer from "../sections/Footer";
import NavbarProject from "../components/NavbarProject";

gsap.registerPlugin(ScrollTrigger);

const Project1 = () => {
  React.useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- lenis integration for smooth scroll
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // ---------- card parallax effect
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        gsap.to(card.querySelector(".card-cover"), {
          yPercent: 35,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const params = useParams();

  let imgData = data[params.id].projectImg.map((item, index) => {
    return (
      <main
        key={index}
        className="w-full min-h-[50vh] sm:min-h-[70vh] md:min-h-screen overflow-hidden flex justify-center items-center  relative card mb-0 xxsm:mb-8 xsm:mb-14 lg:mb-20"
      >
        <div className="absolute z-[1] overflow-hidden card-cover-container flex items-center justify-center">
          <img
            src={item}
            className="w-full object-cover object-center card-cover"
            alt=""
          />
        </div>
      </main>
    );
  });

  // Reference for the main container where the effect will be applied
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize Grained.js after the component mounts
    if (window.grained) {
      window.grained("#main-width", {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.03,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1,
      });
    }
  }, []);

  return (
    <div id="main-width" className="bg-primaryDark" ref={mainRef}>
      <NavbarProject />
      <section className="h-auto  font-primary  text-neutralLight  flex justify-center items-center flex-col py-20 xsm:py-24 md:py-32 px-4 md:px-16 lg:px-24">
        <h1 className="text-[4rem] xsm:text-[4.5rem] md:text-[5.5rem] lg:text-[8rem] text-center">
          {data[params.id].name}
        </h1>
        <h4 className="text-[1rem] xsm:text-[1.3rem] md:text-[1.6rem] italic font-secondry">
          {data[params.id].tool}
        </h4>
        <a
          href={data[params.id].link}
          target="_blank"
          className="mt-14 text-[.9rem] xsm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] tracking-[2px] hover:tracking-[4px] transition-all duration-500 underline mb-8 xxsm:mb-12 xsm:mb-16 sm:mb-20 md:mb-28 lg:mb-28"
        >
          Preview site
        </a>
        {imgData}

        <div className="flex justify-center items-center w-full mt-20">
          <Link
            to="/"
            className="rounded-full border md:border-2 px-10 py-2 text-xl sm:px-12  sm:text-2xl md:px-14 md:text-3xl text-neutralLight hover:text-primaryDark border-neutralLight view-button relative overflow-hidden"
          >
            <span className="z-10 relative">Back To Home</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default transition(Project1);

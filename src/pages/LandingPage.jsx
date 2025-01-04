import React, { useEffect, useRef } from "react";
import HeroSec from "../sections/HeroSec";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import LogoMarquee from "../sections/LogoMarquee";
import LinkHover from "../sections/LinkHover";
import Moto from "../sections/Moto";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";
import FixedIcons from "../components/FixedIcons";
import ContactForm from "../components/ContactForm";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
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
    <>
      <div id="main-width" className="bg-primaryDark" ref={mainRef}>
        <Navbar />
        <FixedIcons />
        <HeroSec />
        <AboutMe />
        <Skills />
        <LogoMarquee />
        <LinkHover />
        <Moto />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

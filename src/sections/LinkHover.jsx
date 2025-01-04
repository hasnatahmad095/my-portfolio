import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../link.css";
import { Link, useLocation } from "react-router-dom";

import img1 from "../assets/images/phone.jpg";

import tour2 from "../assets/images/project-img/tour-2.jpg";

import chat2 from "../assets/images/project-img/chat-3.jpg";

import ai1 from "../assets/images/project-img/ai-1.jpg";

const MenuItem = ({ imageUrl, text, link }) => {
  const imageRef = useRef(null);
  const itemRef = useRef(null);
  const textRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const imageWrapper = imageRef.current;
    const item = itemRef.current;
    const textElement = textRef.current;

    const onMouseEnter = () => {
      if (imageWrapper) {
        gsap.set(imageWrapper, {
          scale: 0.8,
          xPercent: 25,
          yPercent: 50,
          rotation: -15,
        });

        gsap.to(imageWrapper, {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          rotation: 0,
        });
      }

      gsap.to(textElement, {
        color: "#c24628",
      });
    };

    const onMouseLeave = () => {
      if (imageWrapper) {
        gsap.to(imageWrapper, {
          opacity: 0,
          yPercent: -50,
          xPercent: 25,
          scale: 0.8,
          rotation: -15,
        });
      }

      gsap.to(textElement, {
        color: "#e6e3d8",
      });
    };

    const onMouseMove = ({ clientX, clientY }) => {
      let yOffset = 0;

      if (imageWrapper) {
        const imageWrapperBounds = imageWrapper.getBoundingClientRect();
        const itemBounds = item.getBoundingClientRect();
        yOffset = itemBounds.top / imageWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 5, -10, 10, yOffset);

        gsap.to(imageWrapper, {
          duration: 1.25,
          x:
            Math.abs(clientX - itemBounds.left) -
            imageWrapperBounds.width / 1.55,
          y:
            Math.abs(clientY - itemBounds.top) -
            imageWrapperBounds.height / 2 -
            yOffset,
        });
      }
    };

    if (item) {
      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
      item.addEventListener("mousemove", onMouseMove);

      return () => {
        item.removeEventListener("mouseenter", onMouseEnter);
        item.removeEventListener("mouseleave", onMouseLeave);
        item.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, [location]);

  return (
    <div className="menu__item w-full" ref={itemRef}>
      <div className="menu__item-image_wrapper" ref={imageRef}>
        <div className="menu__item-image_inner">
          <img src={imageUrl} alt="" className="menu__item-image" />
        </div>
      </div>
      <ul
        className="menu__item-text text-[55px] text-neutralLight leading-[60px] xsm:text-[70px] xsm:leading-[70px] md:text-[80px] md:leading-[80px] lg:text-[100px] lg:leading-[100px] w-full"
        ref={textRef}
      >
        <li className="menu__item-innertext relative text-neutralLight list-none px-4 md:px-32 lg:px-44 border-t border-neutralLight/10 hover:text-primaryDark before-item duration-500 hover:cursor-[url('../assets/images/hover-cursor.gif')]">
          <Link to={link} className="hover-item z-10 relative">
            {text}
          </Link>
        </li>
      </ul>
    </div>
  );
};

const LinkHover = () => {
  useEffect(() => {
    // gsap
    //   .timeline()
    //   .set(".menu", { autoAlpha: 1 })
    //   .from(".menu__item-text span", {
    //     delay: 1,
    //     duration: 0.05,
    //     xPercent: 25,
    //     yPercent: 125,
    //     stagger: 0.095,
    //     skewY: gsap.utils.wrap([-8, 8]),
    //     ease: "expo.out",
    //   })
    //   .set(".menu", { pointerEvents: "all" });

    gsap.defaults({
      duration: 0.55,
      ease: "expo.out",
    });
  }, []);

  return (
    <div
      id="work"
      key="linkHover"
      className="h-auto relative  flex items-start justify-center flex-col font-primary text overflow-hidden"
    >
      <h6 className="tracking-[.4rem] mb-4 lg:mb-10 font-bold px-4 md:px-32 lg:px-44 text-neutralLight">
        Recent Projects
      </h6>
      <nav className="menu w-full">
      {/* Lumivu */}
        <MenuItem imageUrl={img1} text="Pixl" link="Lumivu" />
        {/* Travel */}
        <MenuItem imageUrl={tour2} text="Fine Peace" link="TravelVoyage" />
        {/* Whisperr */}
        <MenuItem imageUrl={chat2} text="Jeff Staple" link="Whisperr" />
        {/* CelestaGen */}
        <MenuItem imageUrl={ai1} text="Seventh Move" link="CelestaGen" />
      </nav>
      <div className="flex justify-center items-center w-full mt-20">
        <a
          href="https://github.com/hasnatahmad095?tab=repositories"
          target="_blank"
          className="rounded-full border md:border-2 px-10 py-2 text-xl sm:px-12  sm:text-2xl md:px-14 md:text-3xl text-neutralLight hover:text-primaryDark border-neutralLight view-button relative overflow-hidden"
        >
          <span className="z-10 relative">See More</span>
        </a>
      </div>
    </div>
  );
};

export default LinkHover;

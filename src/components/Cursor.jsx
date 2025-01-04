// import { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";

// const Cursor = () => {
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;

//     // Add event listeners to track mouse movement
//     const onMouseMove = (e) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.2,
//         ease: "power3.out",
//       });
//     };

//     const onMouseEnter = () => {
//       gsap.to(cursor, {
//         scale: 1.5,
//         duration: 0.2,
//         ease: "power3.out",
//       });
//     };

//     const onMouseLeave = () => {
//       gsap.to(cursor, {
//         scale: 1,
//         duration: 0.2,
//         ease: "power3.out",
//       });
//     };

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseenter", onMouseEnter);
//     document.addEventListener("mouseleave", onMouseLeave);

//     return () => {
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseenter", onMouseEnter);
//       document.removeEventListener("mouseleave", onMouseLeave);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="custom-cursor fixed left-0 top-0 w-[20px] h-[20px] bg-secondaryAccent rounded-full z-[100] pointer-events-none mix-blend-difference hidden md:block"
//     ></div>
//   );
// };

// export default Cursor;

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Mouse move event to follow the cursor
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    // Scale the cursor on hover over specific elements
    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 8,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    // Add event listeners to document
    document.addEventListener("mousemove", onMouseMove);

    // Attach enter/leave events only to elements with the data-hover attribute
    const hoverElements = document.querySelectorAll("[data-hover]");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed left-0 top-0 w-[30px] h-[30px] bg-secondaryAccent rounded-full z-[100] pointer-events-none mix-blend-difference hidden md:block"
    ></div>
  );
};

export default Cursor;

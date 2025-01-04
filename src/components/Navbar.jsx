import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-1.svg";
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <motion.nav
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className={
          navbar
            ? "h-20 md:h-24 flex items-center uppercase justify-between px-4 md:px-12 md:py-2 fixed top-0 w-full text-neutralDark font-secondry font-bold text-[10px] sm:text-[12px] z-50  bg-opacity-[.9]"
            : "h-20 md:h-24 flex items-center uppercase justify-between px-4 md:px-12 md:py-2 fixed top-0 w-full text-neutralDark font-secondry font-bold text-[10px] sm:text-[12px] z-50"
        }
      >
        <div className="h-9 w-9">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="text-right flex flex-col gap-y-1">
          <li>
            <LinkRoll
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              About
            </LinkRoll>
          </li>
          <li>
            <LinkRoll
              to="work"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              Work
            </LinkRoll>
          </li>
          <li>
            <LinkRoll
              to="contact-form"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer"
            >
              Contact
            </LinkRoll>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;

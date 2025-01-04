import { BiLogoDribbble, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-1.svg";
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { useEffect, useState } from "react";

const NavbarProject = () => {
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
        // className="h-20 md:h-24 flex items-center uppercase justify-between px-4 md:px-12 md:py-2 fixed top-0 w-full text-neutralDark font-secondry font-bold text-[10px] sm:text-[12px] z-50"
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
        <ul className="text-right flex gap-y-1">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="text-neutralLight flex gap-5 sm:gap-9 text-[1rem] sm:text-[1.2rem] z-50"
          >
            <a href="https://github.com/hasnatahmad095" target="blank">
              <BiLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/hasnat-ahmad-aa4845250/" target="blank">
              <BiLogoLinkedin />
            </a>
            
          </motion.div>
        </ul>
      </motion.nav>
    </>
  );
};

export default NavbarProject;

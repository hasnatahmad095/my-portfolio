import { BiLogoDribbble, BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const FixedIcons = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="hidden fixed left-12 bottom-12 text-neutralLight md:flex flex-col gap-9 text-[1.2rem] z-50"
      >
        <a href="https://github.com/hasnatahmad095" target="blank">
          <BiLogoGithub />
        </a>
        <a href="https://www.linkedin.com/in/hasnat-ahmad-aa4845250/" target="blank">
          <BiLogoLinkedin />
        </a>
      </motion.div>
    </>
  );
};

export default FixedIcons;

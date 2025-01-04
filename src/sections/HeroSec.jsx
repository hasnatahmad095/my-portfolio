import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const HeroSec = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-[100dvh] relative text-neutralLight flex items-center justify-center flex-col text-center font-primary"
      >
        <div className="mt-20" data-hover>
          <motion.h6
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="tracking-[.4rem] mb-2 lg:mb-4 font-bold"
          >
            Hasnat Ahmad
          </motion.h6>
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="mainText uppercase"
          >
            {/* Front-End <br />
            <span className="text-secondaryAccent">Developer</span>
            <br />& Designer */}
            MERN Stack <br />
            <span className="text-secondaryAccent">Developer</span>
            <br />& Designer
          </motion.h1>
        </div>
      </section>
    </>
  );
};

export default HeroSec;

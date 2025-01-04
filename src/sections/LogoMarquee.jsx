import Marquee from "react-fast-marquee";
import LogoCard from "../components/LogoCard";
import { logoData1, logoData2 } from "../components/logoData";

const LogoMarquee = () => {
  return (
    <>
      <section className="h-auto pb-36 sm:pb-48  font-primary text-neutralLight flex flex-col text-center justify-center items-center">
        <h6 className="tracking-[.4rem] mb-4 lg:mb-8 font-bold">Skills</h6>
        <Marquee pauseOnHover speed={30} gradient gradientColor={"#0d0d0d"}>
          {logoData1.map((item, index) => {
            return (
              <div key={index} className="mx-4 relative ">
                <LogoCard {...item} />
              </div>
            );
          })}
        </Marquee>
        <Marquee
          pauseOnHover
          speed={30}
          gradient
          gradientColor={"#0d0d0d"}
          direction="right"
        >
          {logoData2.map((item, index) => {
            return (
              <div key={index} className="mx-4 relative ">
                <LogoCard {...item} />
              </div>
            );
          })}
        </Marquee>
      </section>
    </>
  );
};

export default LogoMarquee;

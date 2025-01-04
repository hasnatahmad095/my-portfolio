import React from "react";
import Marquee from "react-fast-marquee";

const BackToTop = () => {
  return (
    <div className="w-full text-neutralLight bg-secondaryAccent py-4 px-3 text-3xl ">
      <Marquee pauseOnHover speed={30} gradient gradientColor={"#0d0d0d"}>
        <div>Back to top</div>
        <div>Back to top</div>
        <div>Back to top</div>
        <div>Back to top</div>
        <div>Back to top</div>
        <div>Back to top</div>
        <div>Back to top</div>
        <div>Back to top</div>
        <div>Back to top</div>
        <div>Back to top</div>
      </Marquee>
    </div>
  );
};

export default BackToTop;

import triangle from "../assets/images/triangle.svg";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="py-12  relative text-neutralLight flex items-start justify-center flex-col font-primary px-4 md:px-32 lg:px-44"
      >
        <h6 className="tracking-[.4rem] mb-12 font-bold">Connect</h6>
        <div className="w-full grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h5 className="text-[30px] lg:text-[37px] mb-0 sm:mb-20 lg:mb-0 w-[95%] leading-[45px]">
              <div className="flex gap-2 w-full">
                <img src={triangle} width={"12px"} alt="" />
                <div className="hover:text-primaryDark before-item duration-500 relative w-full">
                  <a
                    href="https://github.com/hasnatahmad095"
                    target="blank"
                    className="hover-item z-10 relative"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <img src={triangle} width={"12px"} alt="" />

                <div className="relative hover:text-primaryDark before-item duration-500 w-full">
                  <a
                    href="https://www.linkedin.com/in/hasnat-ahmad-aa4845250/"
                    target="blank"
                    className="hover-item z-10 relative "
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </h5>
          </div>
          <div className="mb-20 lg:mb-0">
            <h5 className="text-[30px] lg:text-[37px] w-[95%] leading-[45px]">
              <div className="flex gap-2 w-full">
                <img src={triangle} width={"12px"} alt="" />
                <div className="relative hover:text-primaryDark before-item duration-500 w-full">
                  <a
                    href="https://stackoverflow.com/users/21266156/hasnat-ahmad"
                    target="blank"
                    className="hover-item z-10 relative"
                  >
                    Stack Overflow
                  </a>
                </div>
              </div>
              <div className="flex gap-2 w-full">
                <img src={triangle} width={"12px"} alt="" />
                <div className="relative hover:text-primaryDark before-item duration-500 w-full">
                  <a
                    href="https://www.instagram.com/hasnatahmad095/"
                    target="blank"
                    className="hover-item z-10 relative"
                  > 
                    Instagram
                  </a>
                </div>
              </div>
            </h5>
          </div>
          <div>
            <div>
              <h6 className="text-[16px]">Email</h6>
              <a
                href="mailto: hasnat4258@gmail.com"
                className="font-body text-[14px]"
              >
                hasnat4258@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <h6 className="text-[16px]">Phone</h6>
              <a href="tel:+9233241761499" className="font-body text-[14px]">
                +92 324 1761 499
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LogoCard = ({ logo, text }) => {
  return (
    <>
      <div className="py-2 xsm:py-5 md:py-8  px-5 sm:px-10 md:px-14 lg:py-6 lg:px-20 bg-transparent">
        <div className="flex justify-center items-center flex-col">
          <div className="w-[32px] h-[32px] xsm:w-[40px] xsm:h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px] mb-4">
            <img className="w-full" src={logo} alt="" />
          </div>
          {/* <h1 className="">{text}</h1> */}
        </div>
      </div>
    </>
  );
};

export default LogoCard;

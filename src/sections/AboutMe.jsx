const AboutMe = () => {
  return (
    <>
      <div className="h-auto sm:min-h-screen  relative text-neutralLight flex items-start justify-center flex-col font-primary px-4 md:px-32 lg:px-44 py-36 sm:py-48">
        <h6 className="tracking-[.4rem] mb-4 lg:mb-8 font-bold">About Me</h6>
        <h2 className="text-[30px] xs:text-[40px] md:text-[45px] lg:text-[55px] lg:leading-[65px] font-body font-bold">
          I&apos;m a{" "}
          <span className="text-secondaryAccent">Developer & Designer</span>{" "}
          hybrid Crafting Engaging Experiences with Visuals and Tech, Delivering
          Value and Delight to Audiences.
        </h2>
      </div>
    </>
  );
};

export default AboutMe;

const Skills = () => {
  return (
    <>
      <div className="h-auto sm:min-h-screen  relative  flex items-start justify-center flex-col font-primary pb-36 sm:pb-48 text">
        <h6 className="tracking-[.4rem] mb-4 lg:mb-10 font-bold px-4 md:px-32 lg:px-44 text-neutralLight">
          What I Do
        </h6>
        <ul className="text-[55px] text-neutralLight leading-[60px] xsm:text-[70px] xsm:leading-[70px] md:text-[80px] md:leading-[80px] lg:text-[100px] lg:leading-[100px] w-full ">
          <li className="relative  px-4 md:px-32 lg:px-44 border-t border-neutralLight/10 hover:text-primaryDark before-item duration-500">
            <span className="hover-item z-10 relative">Web Development</span>
          </li>
          <li className="relative  px-4 md:px-32 lg:px-44 border-t border-neutralLight/10 hover:text-primaryDark before-item duration-500">
            <span className="hover-item z-10 relative">Ui Design</span>
          </li>
          <li className="relative  px-4 md:px-32 lg:px-44 border-t border-neutralLight/10 hover:text-primaryDark before-item duration-500">
            <span className="hover-item z-10 relative">Web Animations</span>
          </li>
          <li className="relative  px-4 md:px-32 lg:px-44 border-t border-b border-neutralLight/10 hover:text-primaryDark before-item duration-500">
            <span className="hover-item z-10 relative">Headless CMS</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Skills;

// import "../project.css";

import SingleProject from "../components/SingleProject";

const Projects = () => {
  return (
    <>
      <section
        id="work"
        className="min-h-screen  relative text-neutralLight font-primary px-4 md:px-32 lg:px-44"
      >
        <h6 className="tracking-[.4rem] mb-4 lg:mb-8 font-bold">Projects</h6>
        <SingleProject
          heading={"Tour Booking Website"}
          para={"Multipage website with minimal design and modern animation"}
        />
        <div className="my-14"></div>
        <SingleProject
          heading={"Ai Image Genrator"}
          para={"Multipage website with minimal design and modern animation"}
        />
      </section>
    </>
  );
};

export default Projects;

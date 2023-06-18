import React from "react";
import about1 from "../../../../assets/About/about1.jpg";
import { Link } from "react-router-dom";
import Container from "../../../../components/Container";
import { Fade } from "react-awesome-reveal";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="lg:flex md:flex gap-12 items-center">
        <div>
          <div className="mb-4">
            <img
              className="rounded-md"
              src={about1}
              alt=""
              height="200"
              width="600"
            />
          </div>
        </div>

        <Fade left>
          <div className="flex flex-col text-left">
            <h3 className="md:text-xl text-lg font-semibold  text-[#E6382E]">
              Who We Are
            </h3>

            <div className="py-3">
              <h2 className="md:text-4xl text-2xl md:font-bold font-semibold">
                BEST DANCE SCHOOL & <br /> STUDIO SINCE 1992
              </h2>
            </div>
            <div className="py-5">
              <p className="text-gray-500 leading-6 font-light md:font-normal">
                This also meant we needed to provide a learning environment run
                by
                <br />
                experienced and successful coaches. However, our most important{" "}
                <br /> goal was to create a welcoming atmosphere and community
                in which <br /> everyone feels a sense of belonging.
              </p>
            </div>
            <Link to={"/about"}>
              <button className="py-4 px-8 rounded-md md:w-48  w-full bg-[#E6382E] transition-all hover:bg-black font-semibold text-white">
                About Us
              </button>
            </Link>
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default WhoWeAre;

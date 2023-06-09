import React from "react";
import about1 from "../../../../assets/About/about1.jpg";
import Heading from "../../../../components/Heading/Heading";
import Button from "../../../../components/Button/Button";
import { Link } from "react-router-dom";
import leftImg from "../../..//../assets/line-pattern-01.png";
import Container from "../../../../components/Container";

const WhoWeAre = () => {
  return (
    <Container>
      <div className="flex gap-12 items-center">
        <div>
          <div>
            <img
              className="rounded-md"
              src={about1}
              alt=""
              height="200"
              width="600"
            />
          </div>
        </div>

        <div className="flex flex-col md:text-left">
          <h3 className="text-xl font-semibold text-[#E6382E]">Who We Are</h3>

          <div className="py-3">
            <h2 className="text-4xl font-bold">
              BEST DANCE SCHOOL & <br /> STUDIO SINCE 1992
            </h2>
          </div>
          <div className="py-5">
            <p className="text-gray-500">
              This also meant we needed to provide a learning environment run by
              <br />
              experienced and successful coaches. However, our most important{" "}
              <br /> goal was to create a welcoming atmosphere and community in
              which <br /> everyone feels a sense of belonging.
            </p>
          </div>
          <Link to={"/about"}>
            <button className="py-4 px-8 rounded-md bg-[#E6382E] transition-all hover:bg-black font-semibold text-white">
              About Us
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default WhoWeAre;

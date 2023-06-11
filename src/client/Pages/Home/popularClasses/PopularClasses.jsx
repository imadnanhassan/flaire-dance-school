import React from "react";
import Container from "../../../../components/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./classes.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        
      })
      .catch((error) => {
        console.log("Error fetching classess:", error);
      });
  }, []);

  return (
    <div className="bg-[#050101] text-white py-10">
      <Container>
        <div className="md:flex items-end justify-between">
          <div className="md:text-left">
            <div className="py-3 text-[#E6382E] md:text-xl ">
              <strong>OUR CLASS</strong>
            </div>
            <div className="pb-5">
              <h2 className=" font-bold md:text-4xl text-2xl md:font-bold ">
                CHOOSE YOUR DANCE STYLE
              </h2>
            </div>
            <div className="pt-5 pb-4">
              <p className="text-gray-500  text-lg font-light md:font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </div>
          <Link to={"/about"}>
            <button className="py-4 px-8 md:w-48  w-full rounded-md uppercase bg-[#E6382E] transition-all hover:bg-rose-500 font-semibold text-white">
              View All Class
            </button>
          </Link>
        </div>

        <div className="md:grid grid-cols-3 gap-8 py-10">
          {courses.slice(0, 6).map((item) => (
            <ClassCard key={item.id} item={item}></ClassCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;

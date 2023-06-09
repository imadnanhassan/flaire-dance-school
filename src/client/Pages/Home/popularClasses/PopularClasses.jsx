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
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching classess:", error);
      });
  }, []);
  return (
    <div className="bg-[#050101] text-white py-10">
      <Container>
        <div className="flex items-end justify-between">
          <div className="md:text-left">
            <div className="py-3 text-[#E6382E] text-xl ">
              <strong>OUR CLASS</strong>
            </div>
            <div className="pb-5">
              <h2 className="text-4xl font-bold">CHOOSE YOUR DANCE STYLE</h2>
            </div>
            <div className="pt-5">
              <p className="text-gray-600 font-medium text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </div>
          <Link to={"/about"}>
            <button className="py-4 px-8 rounded-md bg-[#E6382E] transition-all hover:bg-rose-500 font-semibold text-white">
              About Us
            </button>
          </Link>
        </div>
        <div>
          Popular Class
          <div>
            {courses.map((item) => (
              <ClassCard key={item.id} item={item}></ClassCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;

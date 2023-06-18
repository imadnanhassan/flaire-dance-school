import React from "react";
import Container from "../../../../components/Container";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/user/instructor"
      )
      .then((response) => {
        setCourses(response.data);
        const data = response.data;
        // const sort = data.sort((a, b) => b.seats - a.seats);
        const sortData = data.slice(0, 6);
      });
  }, []);

  return (
    <>
      <div className="bg-[url('https://i.ibb.co/72rj1Xc/category.png')] bg-center bg-repeat bg-slate-200 py-28 px-14">
        <div className="grid grid-cols-3">
          {courses.map((data) => (
            <PopularInstructorsCard
              key={data._id}
              data={data}
            ></PopularInstructorsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularInstructors;

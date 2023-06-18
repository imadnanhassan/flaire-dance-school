import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import InstructorCard from "./InstructorCard";
import Container from "../../../components/Container";

const Instructor = () => {
  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/user/instructor"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Instructor | Flaire Dance School React App</title>
      </Helmet>
      <div className="bg-[url('https://i.ibb.co/72rj1Xc/category.png')] bg-center bg-repeat bg-slate-200 py-28 px-14">
        <div className="grid grid-cols-3">
          {user.map((data) => (
            <InstructorCard key={data._id} data={data}></InstructorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;

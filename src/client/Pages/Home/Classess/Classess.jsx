import React from "react";
import Container from "../../../../components/Container";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import AllClassCard from "./AllClassCard";
import Loader from "../../../../components/shared/Loader/Loader";

const Classess = () => {
  const [classData, setClassData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/class").then((response) => {
      setClassData(response.data);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
              </div>
            </div>
          </div>

          <div className="md:grid grid-cols-3 gap-8 py-10">
            {classData.map((item) => (
              <AllClassCard key={item._id} item={item}></AllClassCard>
            ))}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Classess;

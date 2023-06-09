import React from "react";
import Container from "../../../components/Container";
import Banner from "../../../components/shared/NavBar/Banner";
import PopularClasses from "./popularClasses/popularClasses";
import Instructors from "./Instructors/Instructors";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Categories from "./Categories/Categories";

const Home = () => {
  return (
    <>
     <Banner></Banner>
      <div className="pt-14">
        <WhoWeAre></WhoWeAre>
        <Categories></Categories>
        <PopularClasses></PopularClasses>
        <Instructors></Instructors>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import Container from "../../../components/Container";
import Banner from "../../../components/shared/NavBar/Banner";
import PopularClasses from "./popularClasses/popularClasses";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Categories from "./Categories/Categories";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
 
  return (
    <>
      <Banner></Banner>
      <div className="pt-14">
        <WhoWeAre></WhoWeAre>
        <Categories></Categories>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
      </div>
    </>
  );
};

export default Home;

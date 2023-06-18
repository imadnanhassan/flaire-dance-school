import React from "react";
import Banner from "../../../components/shared/NavBar/Banner";
import PopularClasses from "./popularClasses/popularClasses";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Categories from "./Categories/Categories";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Flaire Dance School </title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
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

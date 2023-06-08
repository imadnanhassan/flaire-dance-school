import React from "react";
import Container from "../../../components/Container";
import Banner from "../../../components/shared/NavBar/Banner";
import PopularClasses from "./popularClasses/popularClasses";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="pt-14">
        <Container>
          <PopularClasses></PopularClasses>
          
        </Container>
      </div>
    </>
  );
};

export default Home;

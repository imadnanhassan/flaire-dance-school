import React from "react";
import Container from "../../Container";
import Banner from "./Banner";
import Logo from "./Logo/Logo";
import JoinBtn from "./JoinBtn/JoinBtn";
import Menu from "./Menu/Menu";

const NavBar = () => {
  return (
    <>
      <div className="w-full sticky top-0 z-50 ">
        <div className="py-4 border-b-[1px] bg-black ">
          <Container>
            <div>
              <div className="flex justify-between items-center">
                <Logo></Logo>
                <Menu></Menu>
                <JoinBtn></JoinBtn>
              </div>
            </div>
          </Container>
        </div>
      </div>

     
    </>
  );
};

export default NavBar;

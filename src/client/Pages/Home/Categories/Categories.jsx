import React from "react";
import Container from "../../../../components/Container";
import { Link } from "react-router-dom";

const Categories = () => {
  const topCategories = [
    {
      id: 1,
      name: "HIP HOP DANCE",
    },
    {
      id: 2,
      name: "K-POP DANCE",
    },
    {
      id: 3,
      name: "BALLET DANCE",
    },
    {
      id: 4,
      name: "CONTEMPORARY",
    },
    {
      id: 5,
      name: "POLE DANCE",
    },
    {
      id: 6,
      name: "SALSA DANCE",
    },
  ];

  return (
    <div className="py-16 ">
      <div className="bg-[url('https://i.ibb.co/72rj1Xc/category.png')] bg-center bg-repeat bg-slate-200 py-28 px-14">
        <Container>
          <div className="pb-5 ">
            <h2 className="text-[#E6382E] text-3xl font-bold">
              Top Categories
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-16 ">
            {topCategories.map((category) => (
              <div
                className="font-semibold text-xl text-gray-800 bg-white py-8 transition-all hover:shadow-xl shadow-lg hover:text-[#E6382E] cursor-pointer rounded-md "
                key={category.id}
              >
                <Link to={'/'}>
                  <p>{category.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import { Link } from "react-router-dom";

const ClassCard = ({ item }) => {
  const { id, image, name, instructor, description, seats, price } = item;
  return (
    <div>
      <Link to={'/'} className="p-8 max-w-lg   rounded-2xl hover:shadow-sm hover:shadow-rose-400 flex flex-col items-center">
        <img src={image} className="shadow rounded-lg overflow-hidden border" />
        <div className="mt-8 md:text-left">
          <div className="flex flex-col">
            <h4 className="font-semibold text-xl">{instructor}</h4>
            <h4 className="font-bold text-xl">{name}</h4>
            <p className="mt-2 text-gray-600">
              Create Exercises for any subject with the topics you and your
              students care about.
            </p>
          </div>

          <div className="flex items-center justify-between py-2">
        <p>Available seats {seats}</p>
            <p>Price: {price}</p>
          </div>
          
        </div>
      </Link>
    </div>
  );
};

export default ClassCard;

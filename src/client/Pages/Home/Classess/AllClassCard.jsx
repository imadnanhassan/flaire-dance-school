import React from "react";
import useAdmin from "../../../../hook/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../../../provaider/AuthProvider";
import useInstructor from "../../../../hook/useInstructor";
import toast from "react-hot-toast";

const AllClassCard = ({ item }) => {
  const { _id, picture, name, instructor, description, seats, price } = item;
  const { user } = useContext(AuthContext);
  const { isAdmin } = useAdmin(user?.email);
  const { isInstructor } = useInstructor(user?.email);
  const handleSelectClass = () => {
    const selectedClassData = {
      class_id: _id,
      image,
      name,
      instructor,
      student_email: user?.email,
      price,
      user: user?.name,
    };
    fetch(
      "http://localhoast:5000/selectedClass",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClassData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("class addedd successfull");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="group border rounded-md relative">
      <div className="p-8 max-w-lg rounded-2xl flex flex-col items-center">
        <img
          src={picture}
          className="shadow rounded-lg overflow-hidden border group-hover:scale-110 duration-300 transition-all group-hover:opacity-50"
        />
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
        <div className="pt-2 absolute opacity-0 group-hover:opacity-100 top-32 scale-0 group-hover:scale-100 duration-500 transition-all">
          <button
            disabled={isAdmin || isInstructor || seats === 0}
            className="py-2 px-5 rounded-md bg-rose-500 group-hover:bg-rose-600 text-white"
            onClick={handleSelectClass}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClassCard;

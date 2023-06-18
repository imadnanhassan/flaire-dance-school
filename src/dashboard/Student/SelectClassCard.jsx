import React from "react";
import { MdDelete } from "react-icons/md";
const SelectClassCard = ({ data, user,handleSelectedClassDelete }) => {
  const { image, instructor, name, price, student_email, _id } = data;
  return (
    <>
      <tr className="hover:bg-gray-50">
        <th className="flex items-center gap-4 px-6 py-4 font-normal text-gray-900">
          <div className="relative h-20 w-20">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src={image}
              alt=""
            />
            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-700">{user.displayName}</div>
            <div className="text-gray-400">{student_email}</div>
          </div>
        </th>

        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{instructor}</td>
        <td className="px-6 py-4"> ${price}</td>
        <td className="px-6 py-4">
          <button
            className="flex justify-start"
            onClick={() => handleSelectedClassDelete(_id)}
          >
            <MdDelete className="text-xl text-red-500"></MdDelete>
          </button>
        </td>
      </tr>
    </>
  );
};

export default SelectClassCard;

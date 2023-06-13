import React from "react";
import { MdDelete } from 'react-icons/md';
const SelectClassCard = ({ data, user }) => {
  const { image, instructor, name, price, student_email } = data;
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
        {/* <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                  Active
                </span>
              </td> */}
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">{instructor}</td>
        <td className="px-6 py-4"> ${price}</td>
        <td className="px-6 py-4">
          <button className="flex justify-start">
            <MdDelete className="text-xl"></MdDelete>
          </button>
        </td>
      </tr>
    </>
  );
};

export default SelectClassCard;

import React from "react";
import { RxUpdate } from "react-icons/rx";

const MyClassCard = ({ data, user }) => {
  const { className, seats, picture } = data;
  return (
    <tr className="hover:bg-gray-50">
      <th className="flex items-center gap-4 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-20 w-20">
          <img
            className="h-full w-full rounded object-cover object-center"
            src={picture}
            alt=""
          />
        </div>
        {/* <div className="text-sm">
            <div className="font-medium text-gray-700">{className}</div>
            <div className="text-gray-400">{[]}</div>
          </div> */}
      </th>

      <td className="px-6 py-4">{className}</td>

      <td className="px-6 py-4"> {seats}</td>
      <td className="px-6 py-4">{"painding"}</td>

      <td className="px-6 py-4">{"painding"}</td>
      <td className="px-6 py-4">
        <button className="flex justify-start">
          <RxUpdate className="text-xl"></RxUpdate>
        </button>
      </td>
    </tr>
  );
};

export default MyClassCard;

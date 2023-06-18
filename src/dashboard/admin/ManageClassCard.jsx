import React from "react";
import { toast } from "react-hot-toast";
const ManageClassCard = ({ data, refetch }) => {
  const { className, name, email, price, status, seats, picture, _id } = data;

  const handleApproved = (id) => {
    fetch(
      `https://flaire-dance-schol-server-dev-abulhassan.vercel.app/class/approval/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((Userdata) => {
        console.log(Userdata);
        if (Userdata.modifiedCount > 0) {
          toast.success("Your Class is Approved");
          refetch();
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <tr className="hover:bg-gray-50">
      <th className="flex items-center gap-4 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-20 w-20">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src={picture}
            alt=""
          />
          <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
        </div>
      </th>

      <td className="px-6 py-4">{className}</td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4"> ${price}</td>
      <td className="px-6 py-4"> {seats}</td>
      <td className="px-6 py-4"> {status}</td>

      <td
        className="px-6 py-4"
        onClick={() => {
          status === "Pending" && handleApproved(_id);
        }}
      >
        <button disabled={status === "approved"}>Aprove</button>
      </td>
      <td className="px-6 py-4">
        <button>Deny</button>
      </td>
      <td className="px-6 py-4">
        <button>FeedBack</button>
      </td>

      {/* <td className="px-6 py-4">
          <button className="flex justify-start">
            <MdDelete className="text-xl"></MdDelete>
          </button>
        </td> */}
    </tr>
  );
};

export default ManageClassCard;

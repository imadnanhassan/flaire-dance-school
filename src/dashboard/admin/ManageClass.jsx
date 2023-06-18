import React from "react";
import { useQuery } from "react-query";
import ManageClassCard from "./ManageClassCard";
import { Helmet } from "react-helmet";

const ManageClass = () => {
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const res = await fetch(
        "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/allClass"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Manage Class | Flaire Dance School React App</title>
      </Helmet>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Image
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                ClassName
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                InstructorName
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                InstructorEmail
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Seats
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Action
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-gray-900"
              ></th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                FeedBack
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {allClasses.map((data) => (
              <ManageClassCard
                key={data._id}
                data={data}
                refetch={refetch}
              ></ManageClassCard>
            ))}
          </tbody>
        </table>

        <div></div>
      </div>
    </>
  );
};

export default ManageClass;

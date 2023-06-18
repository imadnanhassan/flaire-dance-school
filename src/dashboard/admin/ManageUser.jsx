import React from "react";
import { useQuery } from "react-query";
import ManageUsersCard from "./ManageUsersCard";

const ManageUser = () => {
  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/user"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Profile
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                User name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                User Email
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                User Role
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Make a Admin or Instructor
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {user?.map((data) => (
              <ManageUsersCard
                key={data._id}
                data={data}
                refetch={refetch}
              ></ManageUsersCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;

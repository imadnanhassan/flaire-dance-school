import React, { useEffect, useState } from "react";
import SelectClassCard from "./SelectClassCard";
import { useContext } from "react";
import { AuthContext } from "../../provaider/AuthProvider";

const MySelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [selectClass, setSelectClass] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/selectedClass/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSelectClass(data));
  }, []);
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Student Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Class name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Instructor Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Price
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {selectClass.map((data) => (
              <SelectClassCard
                key={data._id}
                data={data}
                user={user}
              ></SelectClassCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;

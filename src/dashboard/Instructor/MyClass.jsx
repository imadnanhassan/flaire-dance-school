import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../provaider/AuthProvider";
import MyClassCard from "./MyClassCard";
import { Helmet } from "react-helmet";

const MyClass = () => {
  const { user } = useContext(AuthContext);

  const [nyClass, setMyClass] = useState([]);
  useEffect(() => {
    fetch(
      `https://flaire-dance-schol-server-dev-abulhassan.vercel.app/addClass/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>My Class | Flaire Dance School React App</title>
      </Helmet>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Photo
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Class name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Enroll student
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Feedback
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Update
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {nyClass.map((data) => (
              <MyClassCard key={data._id} data={data} user={user}></MyClassCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;

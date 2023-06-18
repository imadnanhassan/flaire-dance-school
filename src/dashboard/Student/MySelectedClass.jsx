import React, { useEffect, useState } from "react";
import SelectClassCard from "./SelectClassCard";
import { useContext } from "react";
import { AuthContext } from "../../provaider/AuthProvider";
import Loader from "../../components/shared/Loader/Loader";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const MySelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  const { data: selectClass = [], refetch } = useQuery({
    queryKey: ["selectedClass"],
    queryFn: async () => {
      const res = await fetch(
        `https://flaire-dance-schol-server-dev-abulhassan.vercel.app/selectedClass/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleSelectedClassDelete = (id) => {
    fetch(
      `https://flaire-dance-schol-server-dev-abulhassan.vercel.app/selectedClass/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data.deletedCount > 0) {
          toast.success(data.message);
          refetch();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Selected Class | Flaire Dance School React App</title>
      </Helmet>
      {loading ? (
        <Loader lable={"Welcome"}></Loader>
      ) : (
        <>
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Student Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Class name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Instructor Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
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
                    handleSelectedClassDelete={handleSelectedClassDelete}
                  ></SelectClassCard>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MySelectedClass;

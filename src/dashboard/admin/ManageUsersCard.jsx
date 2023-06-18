import { toast } from "react-hot-toast";
const ManageUsersCard = ({ data, refetch }) => {
  const handleMakeAdmin = (id) => {
    console.log(id);
    fetch(
      `https://flaire-dance-schol-server-dev-abulhassan.vercel.app/user/admin/${id}`,
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
        refetch();
        if (Userdata.modifiedCount) {
          toast.success("User role updated successfully");
        }
      });
  };

  const handleMakeInstructor = (id) => {
    console.log(id);
    fetch(
      `https://flaire-dance-schol-server-dev-abulhassan.vercel.app/user/instructor/${id}`,
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
        refetch();
        if (Userdata.modifiedCount) {
          toast.success("User role updated successfully");
        }
      });
  };

  const { picture, instructor, name, price, email, _id, role } = data;
  return (
    <tr className="hover:bg-gray-50">
      <th className="flex items-center gap-4 px-6 py-4 font-normal text-gray-900">
        <div className="relative h-20 w-20">
          <img
            className="h-full w-full rounded-full object-cover object-center"
            src={picture}
            alt=""
          />
          {/* <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" /> */}
        </div>
      </th>

      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{role}</td>

      <td className="px-6 py-4 flex items-center gap-6 ">
        <button
          onClick={() => handleMakeAdmin(data._id)}
          className="bg-rose-600 py-4 px-4 text-white rounded-md"
        >
          Make Admin
        </button>
        <button
          onClick={() => handleMakeInstructor(data._id)}
          className="bg-rose-600 py-4 px-4  text-white rounded-md"
        >
          Make Instructor
        </button>
      </td>
    </tr>
  );
};

export default ManageUsersCard;

import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provaider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  // imgBB API
  // const imgbbKey = "276ccc379deb7c655e6e6e6e8290eebc";

  const onsubmit = (data) => {
    const imgbbKey = "276ccc379deb7c655e6e6e6e8290eebc";

    if (data && data.image && data.image.length > 0) {
      const image = data.image[0];
      console.log(image);
      const formData = new FormData();
      formData.append("image", image);

      const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imageData) => {
          if (imageData.success) {
            const picture = imageData.data.url;
            console.log(picture);

            fetch(
              "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/addClass",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ ...data, status: "Pending", picture }),
              }
            )
              .then((res) => res.json())
              .then((response) => {
                if (response.acknowledged) {
                  toast.success("Class added successfully");
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("No image found in data");
    }

    console.log(data);
    reset();
  };

  return (
    <div>
      <Helmet>
        <title>Add Class | Flaire Dance School React App</title>
      </Helmet>
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Create Class</h2>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="className"
            >
              Class Name
            </label>
            <input
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="className"
              {...register("className")}
              type="text"
              placeholder="Enter class name"
              required
            />
          </div>
          <div className="mt-4 py-2 px-2 text-left bg-rose-500 rounded text-white">
            <label htmlFor="image" className="block mb-2 text-sm">
              Select Image:
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image")}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="instructorName"
            >
              Instructor Name
            </label>
            <input
              className="appearance-none bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight cursor-not-allowed"
              id="instructorName"
              type="text"
              {...register("name")}
              defaultValue={user?.displayName}
              readOnly
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="instructorEmail"
            >
              Instructor Email
            </label>
            <input
              className="appearance-none bg-gray-100 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight cursor-not-allowed"
              id="instructorEmail"
              type="email"
              {...register("email")}
              defaultValue={user?.email}
              readOnly
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="availableSeats"
            >
              Available Seats
            </label>
            <input
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="availableSeats"
              type="number"
              {...register("seats")}
              placeholder="Enter available seats"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="price"
              type="number"
              {...register("price")}
              placeholder="Enter price"
              required
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;

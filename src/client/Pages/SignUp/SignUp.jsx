import Container from "../../../components/Container";
import LoginImg from "../../../assets/Login/login.jpg";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provaider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    if (data.password !== data.confirm_password) {
      toast.error("Password didn't Match.")
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        Navigate("/sign-in");
        console.log(createUser);
      })
      .catch((error) => console.log(error));
    console.log(data);
  };

  return (
    <div>
      <Container>
        <div className="flex ">
          <div>
            <img
              className="rounded-lg"
              src={LoginImg}
              alt=""
              height="300"
              width="500"
            />
          </div>
          <div className=" border-2 w-1/2">
            <h3>Login From Here</h3>

            <div>
              <div className=" p-8 ">
                <form onSubmit={handleSubmit(onsubmit)}>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4" />
                    <a
                      href="#"
                      className="text-xs text-center text-gray-500 uppercase"
                    >
                      or login with email
                    </a>
                    <span className="border-b w-1/5 lg:w-1/4" />
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                      </label>
                    </div>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="password"
                      {...register("password")}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Confirm Password
                      </label>
                      <a href="#" className="text-xs text-gray-500">
                        Forget Password?
                      </a>
                    </div>
                    <input
                      className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="password"
                      {...register("confirm_password")}
                    />
                  </div>

                  <div className="mt-4 py-2 px-2 text-left bg-gray-500 rounded text-white">
                    <label htmlFor="image" className="block mb-2 text-sm">
                      Select Image:
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />
                  </div>

                  <div className="mt-8">
                    <button className="bg-gray-700  text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
                      Sign Up
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4" />
                    <Link className="text-xs text-gray-500 uppercase">
                      or sign up
                    </Link>
                    <span className="border-b w-1/5 md:w-1/4" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;

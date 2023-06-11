import Container from "../../../components/Container";
import LoginImg from "../../../assets/Login/login.jpg";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provaider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { createUser, loading, setLoading, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    if (data.password !== data.confirm_password) {
      toast.error("Password didn't Match.");
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
        console.log(createUser);
      })
      .catch((error) => console.log(error));

    console.log(data);
  };

  // Google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);

        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);

        toast.error(err.message);
      });
  };

  return (
    <div className="py-12">
      <Container>
        <div className="md:flex gap-32 ">
          {/* <div>
            <img
              className="rounded-lg"
              src={LoginImg}
              alt=""
              height="300"
              width="500"
            />
          </div> */}
          <div className=" border-2 w-1/3 mx-auto">
            <h3 className="text-rose-500 font-semibold text-xl pt-4">Login From Here</h3>

            <div>
              <div className=" px-8 ">
                <form onSubmit={handleSubmit(onsubmit)}>
                
                  <div className="mt-8">
                    <button
                      onClick={handleGoogleSignIn}
                      className="bg-gradient-to-r from-[#1e1b4b] via-purple-800 to-rose-600 text-white font-bold py-2 px-4 w-full rounded hover:from-pink-500 hover:to-yellow-500 "
                    >
                      Google
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4" />
                    <p className="text-xs text-center text-rose-500 uppercase">
                      or login with email
                    </p>
                    <span className="border-b w-1/5 lg:w-1/4" />
                  </div>

                  <div className="mt-4">
                    <label className="block text-rose-500 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      className="bg-rose-200 text-rose-700 focus:outline-none focus:shadow-outline border border-rose-300 rounded py-2 px-4 block w-full appearance-none"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-rose-700 text-sm font-bold mb-2">
                        Password
                      </label>
                    </div>
                    <input
                      className="bg-rose-200 text-rose-700 focus:outline-none focus:shadow-outline border border-rose-300 rounded py-2 px-4 block w-full appearance-none"
                      type="password"
                      {...register("password")}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-rose-700 text-sm font-bold mb-2">
                        Confirm Password
                      </label>
                      <a href="#" className="text-xs text-rose-500">
                        Forget Password?
                      </a>
                    </div>
                    <input
                      className="bg-rose-200 text-rose-700 focus:outline-none focus:shadow-outline border border-rose-300 rounded py-2 px-4 block w-full appearance-none"
                      type="password"
                      {...register("confirm_password")}
                    />
                  </div>

                  <div className="mt-4 py-2 px-2 text-left bg-rose-500 rounded text-white">
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
                    <button className="bg-gradient-to-r from-[#1e1b4b] via-purple-800 to-rose-600  text-white font-bold py-2 px-4 w-full rounded hover:from-pink-500 hover:to-yellow-500 transition-all">
                      Sign Up
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4" />
                    <Link to={'/sign-in'} className="text-base text-white border-2 px-2 py-2 rounded-md bg-rose-500 hover:bg-rose-600 uppercase">
                      or sign In
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

import Container from "../../../components/Container";
import LoginImg from "../../../assets/Login/login.jpg";
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provaider/AuthProvider";
import { useState } from "react";

const Login = () => {
  const [err, setErr] = useState("");
  const { signIn, loading, setLoading, signInWithGoogle, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        reset()
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErr(error.message);
      });

    console.log(data);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);

        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };

  

  return (
    <div className="py-24">
      <Container>
        <div className="md:flex items-center  gap-60">
          {/* <div>
            <img
              className="rounded-lg"
              src={LoginImg}
              alt=""
              height="300"
              width="500"
            />
          </div> */}
          <div className=" border-2 mx-auto w-1/3">
            <h3>Login From Here</h3>

            <div>
              <div className=" p-8 ">
                <form onSubmit={handleSubmit(onsubmit)}>
                  <div className="text-rose-800">{err}</div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4" />
                    <p className="text-xs text-center text-gray-500 uppercase">
                      or login with email
                    </p>
                    <span className="border-b w-1/5 lg:w-1/4" />
                  </div>
                  <div className="mt-8">
                    <button
                      onClick={handleGoogleSignIn}
                      className="bg-rose-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-rose-600"
                    >
                      Google
                    </button>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      className="bg-rose-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="email"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                      </label>
                      <a href="#" className="text-xs text-gray-500">
                        Forget Password?
                      </a>
                    </div>
                    <input
                      className="bg-rose-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                      type="password"
                      {...register("password")}
                    />
                  </div>

                  <div className="mt-8">
                    <button className="bg-rose-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-rose-600">
                      Login
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4" />
                    <Link
                      to={"/signup"}
                      className="text-base text-white border-2 px-2 py-2 rounded-md bg-rose-500 hover:bg-rose-600 uppercase"
                    >
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

export default Login;

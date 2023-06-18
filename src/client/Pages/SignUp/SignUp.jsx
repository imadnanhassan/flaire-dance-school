import Container from "../../../components/Container";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provaider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const imgbbKey = "276ccc379deb7c655e6e6e6e8290eebc";
  const {
    createUser,
    loading,
    setLoading,
    signInWithGoogle,
    updateUserProfile,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit, reset } = useForm();

  const onsubmit = (data) => {
    console.log(data.name);
    if (data.password !== data.confirm_password) {
      toast.error("Password didn't Match.");
      return;
    }
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const role = "student";

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
              const name = data.name;
              const userInfo = {
                displayName: name,
                photoURL: picture,
              };
              updateUserProfile(userInfo)
                .then(() => {
                  console.log(user);
                  saveUser(name, email, role, picture);
                  navigate(from, { replace: true });
                  reset();
                })
                .catch((error) => {
                  console.error(error.message);
                });
            }
          });
        console.log(user);
      })
      .catch((error) => console.log(error));
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

  // save ser
  const saveUser = (name, email, role, picture) => {
    const userInfo = { name, email, role, picture };
    fetch(
      "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/create_user",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("You are Successfully Login!");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div className="py-12">
      <Helmet>
        <title>Sign Up | Flaire Dance School React App</title>
      </Helmet>
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
            <h3 className="text-rose-500 font-semibold text-xl pt-4">
              Login From Here
            </h3>

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
                      Your Name
                    </label>
                    <input
                      {...register("name")}
                      className="bg-rose-200 text-rose-700 focus:outline-none focus:shadow-outline border border-rose-300 rounded py-2 px-4 block w-full appearance-none"
                      type="name"
                      placeholder="Your Name"
                    />
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
                      {...register("image")}
                    />
                  </div>

                  <div className="mt-8">
                    <button className="bg-gradient-to-r from-[#1e1b4b] via-purple-800 to-rose-600  text-white font-bold py-2 px-4 w-full rounded hover:from-pink-500 hover:to-yellow-500 transition-all">
                      Sign Up
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4" />
                    <Link
                      to={"/sign-in"}
                      className="text-base text-white border-2 px-2 py-2 rounded-md bg-rose-500 hover:bg-rose-600 uppercase"
                    >
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

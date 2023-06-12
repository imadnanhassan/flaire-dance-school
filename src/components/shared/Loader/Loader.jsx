import { ScaleLoader } from "react-spinners";

const Loader = ({ lable }) => {
  return (
    <div
      className="
      bg-slate-900
      h-[100vh]
      flex 
      gap-3
      flex-col 
      justify-center 
      items-center 
    "
    >
      <ScaleLoader size={200} color="red" />
      <div className="text-transparent text-4xl  text-rose-500 font-bold py-2 px-4 rounded ">
        {lable}
      </div>
    </div>
  );
};

export default Loader;

import React from "react";
import Container from "../../../../components/Container";

const Instructors = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/72rj1Xc/category.png')] bg-center bg-repeat bg-slate-200 py-28 px-14">
      <Container>
        <div className="max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
          <div className="flex justify-center md:justify-start -mt-20 -ml-8">
            <img
              className="w-36 h-36 object-cover rounded-full "
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Design Tools
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#" className="text-xl font-medium text-indigo-500">
              John Doe
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Instructors;

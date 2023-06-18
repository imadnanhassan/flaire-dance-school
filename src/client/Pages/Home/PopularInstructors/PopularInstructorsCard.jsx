import React from 'react';

const PopularInstructorsCard = ({data}) => {
   const { email, picture, name } = data;
   return (
      <div className=" md:max-w-md py-4 px-8 bg-white shadow-xl rounded-lg my-20">
      <div className="flex justify-center md:justify-start sm:justify-start lg:justify-start sm:-ml-8 md:-mt-20 -mt-16  md:-ml-8">
        <img
          className="md:w-36 md:h-36 w-20 h-20 object-cover rounded-full "
          src={picture}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">
          {email}
        </a>
      </div>
    </div>
   );
};

export default PopularInstructorsCard;
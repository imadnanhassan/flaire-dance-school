import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   const error = useRouteError();
   return (
      <div>
         <div className="grid h-screen px-4 bg-white place-content-center ">
            <div className="text-center">
               <img className='w-[350px] mx-auto' src={[]} alt="" />
               <p className="mt-4 text-[#000000] font-Primary text-3xl ">Oops! That page can't be found.</p>
               <div className='border-2 my-3 w-[256px] mx-auto'></div>
               <p className="mt-4 text-[#000000] text-base">We're really sorry but we can't seem to find <br /> the page you were looking for.</p>
               <p className="my-4 text-[#E6382E] font-Primary text-2xl uppercase">{error.statusText || error.message}</p>

               <Link to={'/'} class="relative inline-block text-lg group">
                  <span className="relative z-10 block px-10 py-3 overflow-hidden font-medium leading-tight text-[#E6382E] transition-colors duration-300 ease-out border-2 border-[#E6382E] rounded-lg group-hover:text-white">
                     <span className="absolute inset-0 w-full h-full px-10 py-3 rounded-lg bg-gray-50"></span>
                     <span className="absolute left-0 w-[308px] h-[308px] -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#E6382E] group-hover:-rotate-180 ease"></span>
                     <span className="relative">Back to Homepage</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#E6382E] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
               </Link>

            </div>
         </div>
      </div>
   );
};

export default ErrorPage;
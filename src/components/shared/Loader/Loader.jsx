import { ScaleLoader } from 'react-spinners'

const Loader = ({lable}) => {
   return (
      <div
         className='
      h-[100vh]
      flex 
      gap-3
      flex-col 
      justify-center 
      items-center 
    '
      >
         <ScaleLoader size={200} color='red' /> 
         <div className='text-transparent text-4xl  bg-clip-text bg-gradient-to-r  from-[#2f25bb] via-purple-800 to-rose-600 text-white font-bold py-2 px-4 rounded '>{lable}</div>
      </div>
   )
}

export default Loader
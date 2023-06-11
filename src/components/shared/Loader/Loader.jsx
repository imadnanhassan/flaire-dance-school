import { PropagateLoader } from 'react-spinners'

const Loader = () => {
   return (
      <div
         className='
      h-[70vh]
      flex 
      gap-3
      flex-col 
      justify-center 
      items-center 
    '
      >
         <PropagateLoader size={100} color='red' />
      </div>
   )
}

export default Loader
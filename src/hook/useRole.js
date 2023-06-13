import axios from "axios";
import { useEffect, useState } from "react";

const useRole = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInstructor, setIsInstructro] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   const checkRole = async () => {
      setIsLoading(true); 

      try {
        const response = await axios.get(`https://flaire-dance-schol-server.vercel.app/user/role/${email}`);
        const userData = response.data

        console.log(userData)
        
      } catch (error) {
        console.error('Error checking admin status:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    checkRole();
  }, [email]);
};
export default useRole;

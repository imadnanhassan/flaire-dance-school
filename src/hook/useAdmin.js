import { useEffect, useState } from 'react';
import axios from 'axios';

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      setIsLoading(true); 

      try {
        const response = await axios.get('https://flaire-dance-schol-server.vercel.app/user');
        const userData = response.data.find(user => user.email === email);
        if (userData && userData.role === 'admin') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    checkAdmin();
  }, [email]);

  return { isAdmin, isLoading };
};

export default useAdmin;
import { useEffect, useState } from 'react';
import axios from 'axios';

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user');
        const userData = response.data.find(user => user.email === email  );
        if (userData && userData.role === 'admin'  ) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    checkAdmin();
  }, [email]);

  return isAdmin;
};

export default useAdmin;
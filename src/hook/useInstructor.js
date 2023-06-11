import { useEffect, useState } from "react";
import axios from "axios";

const useInstructor = (email) => {
  const [isInstructor, setInstructor] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user");
        const userData = response.data.find((user) => user.email === email);
        // console.log(userData)
        if (userData && userData.role === "instructor") {
          setInstructor(true);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };

    checkAdmin();
  }, [email]);

  return isInstructor;
};

export default useInstructor;

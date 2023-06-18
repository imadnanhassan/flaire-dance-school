import { useEffect, useState } from "react";
import axios from "axios";

const useInstructor = (email) => {
  const [isInstructor, setInstructor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkisInstructor = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/user"
        );
        const userData = response.data.find((user) => user.email === email);
        if (userData && userData.role === "instructor") {
          setInstructor(true);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkisInstructor();
  }, [email]);

  return { isInstructor, isLoading };
};

export default useInstructor;

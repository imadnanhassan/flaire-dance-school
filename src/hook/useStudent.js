import { useEffect, useState } from "react";
import axios from "axios";

const useStudent = (email) => {
  const [isStudent, setIsStudent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkisStudent = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/user"
        );
        const userData = response.data.find((user) => user.email === email);
        if (userData && userData.role === "student") {
          setIsStudent(true);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkisStudent();
  }, [email]);

  return { isStudent, isLoading };
};

export default useStudent;

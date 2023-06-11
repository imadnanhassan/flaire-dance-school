import axios from "axios";

async function getClass() {
  try {
    const response = await axios.get("http://localhost:5000/class");
    //  console.log(response)
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getClass;

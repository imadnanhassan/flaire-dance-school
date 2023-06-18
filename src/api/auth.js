import axios from "axios";

async function getClass() {
  try {
    const response = await axios.get(
      "https://flaire-dance-schol-server-dev-abulhassan.vercel.app/class"
    );
    //  console.log(response)
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getClass;

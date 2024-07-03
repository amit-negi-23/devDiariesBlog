import axios from "axios";

//---------------GET LABEL---------------------

export const getLabel = async () => {
  try {
    const response = await axios.get("http://localhost:8080/label/get-all-label");
    console.log("data", response.data);
    return response;
  } catch (error) {
    // console.log("error : ", error);
    return error.response;
  }
};

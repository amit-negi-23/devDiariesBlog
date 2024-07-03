import axios from "axios";

//---------------GET LABEL---------------------

export const getLabel = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/label/get-all-label"
    );
    console.log("data", response.data);
    return response;
  } catch (error) {
    // console.log("error : ", error);
    return error.response;
  }
};

//--------------GET LABEL BY NAME-------------------

export const getLabelByName = async (label_name) => {
  try {
    const response = await axios.post("http://localhost:8080/label/get-label", {
      name: label_name.name,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

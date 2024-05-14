import axios from "axios";


export const createUser = async (form_data) => {
    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        username: form_data.username,
        name: form_data.name,
        email: form_data.email,
        password: form_data.password
      });
      return response;
    } catch (error) {
      // console.log("error:", error);
      return error.response;
    }
  };
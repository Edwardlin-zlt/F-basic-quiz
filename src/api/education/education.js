import axios from "axios";
import baseURL from "../base";

const EducationApi = {
  getEducationsByUserId: async (userId) => {
    const response = await axios.get(`${baseURL}/users/${userId}/educations`);
    return response.data;
  },
};

export default EducationApi;

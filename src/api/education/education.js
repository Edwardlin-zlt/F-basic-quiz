import axios from "axios";
import baseURL from "../base";
// TODO GTB-知识点: - Promise的使用不正确：这里应该是返回promise就好了，然后在调用这个api的地方使用async/await
const EducationApi = {
  getEducationsByUserId: async (userId) => {
    const response = await axios.get(`${baseURL}/users/${userId}/educations`);
    return response.data;
  },
};

export default EducationApi;

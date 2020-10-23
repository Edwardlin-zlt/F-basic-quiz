import axios from "axios";
import baseURL from "../base";

// TODO GTB-知识点: - Promise的使用不正确：这里应该是返回promise就好了，然后在调用这个api的地方使用async/await
const UserApi = {
  getUsers: async () => {
    const response = await axios.get(`${baseURL}/users`);
    return response.data;
  },
  getUserById: async (id) => {
    const response = await axios.get(`${baseURL}/users/${id}`);
    return response.data;
  },
};

export default UserApi;

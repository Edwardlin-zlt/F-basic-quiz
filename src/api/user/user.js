import axios from "axios";
import baseURL from "../base";

const UserApi = {
  getUsers: async () => {
    const response = await axios.get(`${baseURL}/users`);
    return response.data;
  },
};

export default UserApi;

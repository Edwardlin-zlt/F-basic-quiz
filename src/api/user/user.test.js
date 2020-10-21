import axios from "axios";
import UserApi from "./user";

jest.mock("axios");
jest.mock("../base", () => "base.url.com");

describe("UserApi", () => {
  describe("getUsers", () => {
    it("should make a Get request to /users", async () => {
      axios.get.mockResolvedValue({});
      await UserApi.getUsers();

      expect(axios.get).toHaveBeenCalledWith("base.url.com/users");
    });

    it("should return users data in response body", async () => {
      const usersData = [{}, {}];
      axios.get.mockResolvedValue({ data: usersData });

      const responseData = await UserApi.getUsers();

      expect(responseData).toEqual(usersData);
    });
  });
});

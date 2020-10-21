import axios from "axios";
import EducationApi from "./education";
import baseURL from "../base";

jest.mock("axios");
jest.mock("../base", () => "base.url.com");

describe("EducationApi", () => {
  describe("getEducationsByUserId", () => {
    it("should make a Get request to /users/{userId}/educations", async () => {
      axios.get.mockResolvedValue({});
      const userId = 1;

      await EducationApi.getEducationsByUserId(userId);

      expect(axios.get).toHaveBeenCalledWith(
        `${baseURL}/users/${userId}/educations`
      );
    });

    it("should return educations data in response body", async () => {
      const educations = [{}, {}];
      const userId = 1;
      axios.get.mockResolvedValue({ data: educations });

      const response = await EducationApi.getEducationsByUserId(userId);

      expect(response).toEqual(educations);
    });
  });
});

import UserApi from "../api/user/user";
import ResumeHead from "../components/ResumeHead/ResumeHead";
import AboutMe from "../components/AboutMe/AboutMe";
import Educations from "../components/Education/Education";
import EducationApi from "../api/education/education";

class Resume {
  constructor() {
    this.user = null;
    this.educations = [];
    this.userId = null;
  }

  getUser = async () => {
    const userId = this.getUserId();
    if (userId) {
      return UserApi.getUserById(userId);
    }
    return null;
  };

  getEducations = async () => {
    const userId = this.getUserId();
    if (userId) {
      return EducationApi.getEducationsByUserId(userId);
    }
    return null;
  };

  getUserId = () => {
    const curUrl = window.location.href;
    return curUrl.split("/").pop();
  };

  pageDidMount = async () => {
    this.user = await this.getUser();
    this.educations = await this.getEducations();
  };

  render = async () => {
    await this.pageDidMount();
    const { user, educations } = this;
    return `${ResumeHead(user)}
                ${AboutMe(user)}
                ${Educations(educations)}`;
  };
}

export default Resume;

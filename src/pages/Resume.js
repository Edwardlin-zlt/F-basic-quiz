import UserApi from "../api/user/user";
import ResumeHead from "../components/ResumeHead/ResumeHead";
import AboutMe from "../components/AboutMe/AboutMe";
import Educations from "../components/Education/Education";
import EducationApi from "../api/education/education";

class Resume {
  getUser = async () => {
    const userId = this.getUserId();
    return UserApi.getUserById(userId);
  };

  getEducations = async () => {
    const userId = this.getUserId();
    return EducationApi.getEducationsByUserId(userId);
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

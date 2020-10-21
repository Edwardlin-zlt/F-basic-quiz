import UserApi from "../api/user/user";
import ResumeHead from "../components/ResumeHead/ResumeHead";
import AboutMe from "../components/AboutMe/AboutMe";
import Educations from "../components/Education/Education";

class Resume {
  getUser = async () => {
    const curUrl = window.location.href;
    const userId = curUrl.split("/").pop();
    return UserApi.getUserById(userId);
  };

  pageDidMount = async () => {
    this.user = await this.getUser();
  };

  render = async () => {
    await this.pageDidMount();
    const { user } = this;
    return `${ResumeHead(user)}
                ${AboutMe(user)}
                ${Educations()}`;
  };
}

export default Resume;

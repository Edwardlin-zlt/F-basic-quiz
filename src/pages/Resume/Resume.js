import UserApi from "../../api/user/user";
import EducationApi from "../../api/education/education";
import ResumeHead from "../../components/ResumeHead/ResumeHead";
import AboutMe from "../../components/AboutMe/AboutMe";
import Educations from "../../components/Education/Educations";

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

  // TODO GTB-工程实践: - 这个function可以抽到一个utils.js里面作为一个工具方法
  getUserId = () => {
    const curUrl = window.location.href;
    // TODO GTB-知识点: - 你这里只是想取最后一个元素而已，但是pop()方法会改变原Array,所以不推荐这种做法
    return parseInt(curUrl.split("/").pop(), 10);
  };

  pageDidMount = async () => {
    this.user = await this.getUser();
    this.educations = await this.getEducations();
  };

  // TODO GTB-完成度: - API挂掉的情况会导致页面是空白
  // TODO GTB-工程实践: - API没有挂掉的情况也非得等API回来了才会进行一次render
  render = async () => {
    await this.pageDidMount();
    const { user, educations } = this;
    return `
      <div class="resume">
        ${ResumeHead(user)}
        ${AboutMe(user)}
        ${Educations(educations)}
      </div>`;
  };
}

export default Resume;

import ResumeHead from "./component/ResumeHead/ResumeHead";
import AboutMe from "./component/AboutMe/AboutMe";
import Educations from "./component/Education/Education";

const renderMain = async () => {
  const main = document.querySelector(".main");
  main.insertAdjacentHTML("beforeend", await ResumeHead());
  main.insertAdjacentHTML("beforeend", await AboutMe());
  main.insertAdjacentHTML("beforeend", await Educations());
};

renderMain();

import ResumeHead from "./components/ResumeHead/ResumeHead";
import AboutMe from "./components/AboutMe/AboutMe";
import Educations from "./components/Education/Education";

const renderMain = async () => {
  const main = document.querySelector(".main");
  main.insertAdjacentHTML("beforeend", await ResumeHead());
  main.insertAdjacentHTML("beforeend", await AboutMe());
  main.insertAdjacentHTML("beforeend", await Educations());
};

renderMain();

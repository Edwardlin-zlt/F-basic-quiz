import ResumeHead from "./component/ResumeHead/ResumeHead";
import AboutMe from "./component/AboutMe/AboutMe";

const renderMain = async () => {
  const main = document.querySelector(".main");
  main.insertAdjacentHTML("beforeend", await ResumeHead());
  main.insertAdjacentHTML("beforeend", await AboutMe());
};

renderMain();

import ResumeHead from "./component/ResumeHead/ResumeHead";

const renderMain = async () => {
  const main = document.querySelector(".main");
  main.insertAdjacentHTML("afterbegin", ResumeHead);
};

renderMain();

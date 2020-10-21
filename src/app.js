import Resume from "./pages/Resume/Resume";

const renderMain = async () => {
  const main = document.querySelector(".main");
  const resume = new Resume();
  main.insertAdjacentHTML("beforeend", await resume.render());
};

renderMain();

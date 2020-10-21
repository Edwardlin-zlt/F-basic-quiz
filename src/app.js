import UserApi from "./api/user/user";

const renderMain = async () => {
  const main = document.querySelector(".main");
  const users = await UserApi.getUsers();
  console.log(users);
  main.innerHTML = JSON.stringify(users[0]);
};

renderMain();

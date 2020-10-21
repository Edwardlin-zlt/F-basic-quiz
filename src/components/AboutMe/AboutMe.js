import UserApi from "../../api/user/user";

const getUser = async () => {
  const curUrl = window.location.href;
  const userId = curUrl.split("/").pop();
  return UserApi.getUserById(userId);
};

const AboutMe = async () => {
  const user = await getUser();
  return `
      <section class="about-me">
        <h1 class="about-me-title">ABOUT ME</h1>
        <p class="about-me-content">${user.description || ""}</p>
      </section>
    `;
};

export default AboutMe;

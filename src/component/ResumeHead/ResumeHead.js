import UserApi from "../../api/user/user";
import avatar from "../../assets/images/garfield.jpg";

const getUser = async () => {
  const curUrl = window.location.href;
  const userId = curUrl.split("/").pop();
  return UserApi.getUserById(userId);
};

const ResumeHead = () => {
  const user = getUser();
  return `<section class="resume-head">
            <img src=${avatar} alt="" class="avatar">
            <h1 class="say-hello">HELLO,</h1>
            <p>
                MY NAME IS <span class="user-name">${
                  user.name || ""
                }</span> AND THIS IS MY RESUME/CV
            </p>
        </section>`;
};

export default ResumeHead();

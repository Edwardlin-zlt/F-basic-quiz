import avatar from "../../assets/images/garfield.jpg";

const ResumeHead = (user) => {
  return `<section class="resume-head">
            <img src=${avatar} alt="" class="avatar">
            <h1 class="say-hello">HELLO,</h1>
            <p>
                MY NAME IS <span class="user-name">${
                  user ? user.name : "USERNAME"
                }</span> AND THIS IS MY RESUME/CV
            </p>
          </section>`;
};

export default ResumeHead;

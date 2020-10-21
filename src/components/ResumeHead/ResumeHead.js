const ResumeHead = (user) => {
  return `<section class="resume-head">
            <img src=${user ? user.avatar : ""} alt="userAvatar" class="avatar">
            <p class="say-hello">HELLO,</p>
            <p class="self-intro">
                MY NAME IS <span class="user-name">${
                  user ? user.name : ""
                }</span> <span class="user-age">${user ? user.age : ""}
                </span>YO AND THIS IS MY RESUME/CV
            </p>
          </section>`;
};

export default ResumeHead;

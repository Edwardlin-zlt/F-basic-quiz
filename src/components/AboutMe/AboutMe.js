// TODO GTB-知识点: -这里可以给参数user默认值，这样你就不用使用三目运算了
const AboutMe = (user) => {
  return `
      <section class="about-me">
        <h1 class="about-me-title">ABOUT ME</h1>
        <p class="about-me-content">${user ? user.description : ""}</p>
      </section>
    `;
};

export default AboutMe;

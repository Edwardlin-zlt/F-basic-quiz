const AboutMe = (user) => {
  return `
      <section class="about-me">
        <h1 class="about-me-title">ABOUT ME</h1>
        <p class="about-me-content">${user.description || ""}</p>
      </section>
    `;
};

export default AboutMe;

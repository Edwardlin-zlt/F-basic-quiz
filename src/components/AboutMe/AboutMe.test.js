import AboutMe from "./AboutMe";

describe("AboutMe", () => {
  // TODO GTB-工程实践: - 测试数据可以意思一下就可以了，不用给这么长
  let user = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
  };
  it("should render user description", () => {
    const aboutMeHtml = AboutMe(user);

    expect(aboutMeHtml).toContain(user.description);
  });
  it("should render title even thought there's no user data", () => {
    user = null;

    expect(AboutMe).not.toEqual("");
  });
});

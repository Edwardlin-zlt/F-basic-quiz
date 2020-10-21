import ResumeHead from "./ResumeHead";

describe("ResumeHead", () => {
  let user = {
    id: 1,
    name: "KAMIL",
    age: 24,
    avatar: "https://inews.gtimg.com/newsapp_match/0/3581582328/0",
  };

  it("should render user data", () => {
    const resumeHeadHtml = ResumeHead(user);

    expect(resumeHeadHtml).toContain(user.avatar);
    expect(resumeHeadHtml).toContain(user.name);
    expect(resumeHeadHtml).toContain(user.age);
  });

  it("should still render basic string even user is null", () => {
    user = null;
    const resumeHeadHtml = ResumeHead(user);

    expect(resumeHeadHtml).not.toEqual("");
  });
});

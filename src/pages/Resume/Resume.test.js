import Resume from "./Resume";
// TODO GTB-完成度: - 核心的render()方法没有测
describe("Resume", () => {
  beforeAll(() => {
    // eslint-disable-next-line
    delete window.location;
    // eslint-disable-next-line
    window.location = {
      href: `http://test.com/1`,
    };
  });

  afterAll(() => {
    // eslint-disable-next-line
    window.location = location;
  });

  // TODO GTB-知识点: - getUserId()只被内部function使用，不应该单独测它
  it("should get userId from current url", () => {
    const resume = new Resume();

    const userId = resume.getUserId();

    expect(userId).toBe(1);
  });
});

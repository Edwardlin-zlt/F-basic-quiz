import Resume from "./Resume";

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

  it("should get userId from current url", () => {
    const resume = new Resume();

    const userId = resume.getUserId();

    expect(userId).toBe(1);
  });
});

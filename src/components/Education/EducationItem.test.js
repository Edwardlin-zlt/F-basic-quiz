import EducationItem from "./EducationItem";

describe("EducationItem", () => {
  let education = {
    userId: 1,
    year: 2009,
    title: "First level graduation in Graphic Design",
    description:
      "Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.",
  };

  it("should render education information", () => {
    const responseHTML = EducationItem(education);

    expect(responseHTML).toContain(education.year);
    expect(responseHTML).toContain(education.title);
    expect(responseHTML).toContain(education.description);
  });

  it("should render basic template HTML even though there's no education data", () => {
    education = null;

    const responseHTML = EducationItem(education);

    expect(responseHTML).not.toBe("");
  });
});

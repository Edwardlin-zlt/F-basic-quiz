import Educations from "./Educations";
import EducationItem from "./EducationItem";

jest.mock("./EducationItem");

describe("Education", () => {
  let educations = [{}, {}];
  it("should render education items", () => {
    const returnString = "eduItem";
    EducationItem.mockReturnValue(returnString);
    const expectHtml = `${returnString}\n${returnString}`;

    const educationHtml = Educations(educations);

    expect(EducationItem).toHaveBeenCalledTimes(2);
    expect(educationHtml).toContain(expectHtml);
  });

  it("should render basic html even though there's no education data", () => {
    educations = null;

    const educationHtml = Educations(educations);

    expect(educationHtml).not.toBe("");
  });
});

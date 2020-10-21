import EducationItem from "./EducationItem";

const Educations = (educations) => {
  return `
      <section class="education">
        <h1 class="education-title">EDUCATION</h1>
        <ul class="education-container">
          ${educations && educations.map((edu) => EducationItem(edu))}
        </ul>
      </section>
    `;
};

export default Educations;

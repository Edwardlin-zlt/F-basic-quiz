const EducationItem = (edu) => {
  return `
          <li class="education-item">
            <div class="edu-year">${edu ? edu.year : ""}</div>
            <div class="edu-item-content">
                <div class="edu-item-title">${edu ? edu.title : ""}</div>
                <div class="edu-item-description">${
                  edu ? edu.description : ""
                }</div>
            </div>
          </li>`;
};

export default EducationItem;

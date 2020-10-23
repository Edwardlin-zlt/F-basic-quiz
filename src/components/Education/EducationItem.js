// TODO GTB-工程实践: - 不要进行无意义的单词缩写
// TODO GTB-工程实践: - 应该把EducationItem建一个独立的文件夹
// TODO GTB-知识点: - 这里应该给函数参数指定默认值，而不是使用三元
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

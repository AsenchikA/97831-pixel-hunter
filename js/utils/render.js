const mainElement = document.querySelector(`#main`);

const renderScreen = (template) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(template);
};

export {renderScreen};

const mainElement = document.querySelector(`#main`);

const renderScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

export default renderScreen;

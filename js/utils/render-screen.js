import greetengBlock from './../screens/greeteng.js';

const mainElement = document.querySelector(`#main`);

const addButtonEventListener = (screen) => {
  const backButton = screen.querySelector(`.back`);
  if (backButton) {
    backButton.addEventListener(`click`, () => {
      renderScreen(greetengBlock);
    });
  }
};

const renderScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
  addButtonEventListener(screen);
};

export default renderScreen;

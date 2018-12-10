import Lives from "../views/lives-view.js";
import Router from "../router/application-router.js";
import BackButton from "../views/back-button-view.js";

const backButton = () => {
  const headerBtn = new BackButton();
  headerBtn.onClick = () => Router.showGreeting();
  return headerBtn.element;
};

const liveCounter = (livesCount) => new Lives(livesCount);

export {backButton, liveCounter};


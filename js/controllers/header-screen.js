import Router from "../router/application-router.js";
import BackButton from "../views/back-button-view.js";

const backButton = () => {
  const headerBtn = new BackButton();
  headerBtn.onClick = () => Router.showGreeting();
  return headerBtn.element;
};

export {backButton};


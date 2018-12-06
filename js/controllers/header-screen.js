import {ButtonHeader, Lives, Timer} from "../views/header-view";
import Router from "../router/application-router";

const backButton = () => {
  const headerBtn = new ButtonHeader();
  headerBtn.onClick = () => Router.showGreeting();
  return headerBtn.element;
};

const liveCounter = (livesCount) => new Lives(livesCount);

const timer = (time) => new Timer(time);

export {backButton, liveCounter, timer};


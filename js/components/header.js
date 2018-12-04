import {ButtonHeader, Lives, Timer} from "../views/header-view";
import {renderScreen} from "../utils/render";
import greeting from "./greeting";

const backButton = () => {
  const headerBtn = new ButtonHeader();
  headerBtn.onClick = () => renderScreen(greeting().element);
  return headerBtn.element;
};

const liveCounter = (livesCount) => new Lives(livesCount);

const timer = (time) => new Timer(time);

export {backButton, liveCounter, timer};


import {Intro} from "../views/intro-view";
import {renderScreen} from "../utils/render";
import greeting from "./greeting";

export default () => {
  const intro = new Intro();
  intro.onContinue = () => renderScreen(greeting().element);
  return intro;
};

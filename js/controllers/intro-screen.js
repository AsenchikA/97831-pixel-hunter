import {Intro} from "../views/intro-view";
import Router from "../router/application-router";
// import {renderScreen} from "../utils/render";
// import greeting from "./greeting";

export default () => {
  const intro = new Intro();
  intro.onContinue = () => Router.showGreeting();
  return intro;
};

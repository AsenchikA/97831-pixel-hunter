import Intro from "../views/intro-view";
import Router from "../router/application-router";

export default class IntroScreen {
  get element() {
    const intro = new Intro();
    intro.onContinue = () => Router.showGreeting();
    return intro.element;
  }
}


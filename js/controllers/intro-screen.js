import Intro from "../views/intro-view.js";
import Router from "../router/application-router.js";

export default class IntroScreen {
  get element() {
    const intro = new Intro();
    intro.onContinue = () => Router.showGreeting();
    return intro.element;
  }
}


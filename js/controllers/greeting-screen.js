import Greeting from "../views/greeteng-view.js";
import Router from "../router/application-router.js";

export default class GreetingScreen {
  get element() {
    const greeting = new Greeting();
    greeting.onContinue = () => Router.showRules();
    return greeting.element;
  }
}

import Greeting from "../views/greeteng-view";
import Router from "../router/application-router";

export default class GreetingScreen {
  get element() {
    const greeting = new Greeting();
    greeting.onContinue = () => Router.showRules();
    return greeting.element;
  }
}

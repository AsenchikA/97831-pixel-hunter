import Greeting from "../views/greeteng-view";
import Router from "../router/application-router";

export default () => {
  const greeting = new Greeting();
  greeting.onContinue = () => Router.showRules();
  return greeting;
};

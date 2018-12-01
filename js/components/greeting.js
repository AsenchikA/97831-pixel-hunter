import {Greeting} from "../views/greeteng-view";
import {renderScreen} from "../utils/render";
import rules from "./rules";

export default () => {
  const greeting = new Greeting();
  greeting.onContinue = () => renderScreen(rules().element);
  return greeting;
};

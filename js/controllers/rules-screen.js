import Rules from "../views/rules-view.js";
import Router from "../router/application-router.js";
import BackButton from "./back-button-screen.js";

export default class RulesScreen {
  get element() {
    const rulesScreen = new Rules();
    const header = rulesScreen.element.querySelector(`.header`);
    header.insertBefore(new BackButton().element, header.children[0]);
    rulesScreen.onContinue = (userName) => Router.showGame(userName);
    return rulesScreen.element;
  }
}

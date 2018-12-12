import Rules from "../views/rules-view";
import Router from "../router/application-router";
import {backButton} from "./header-screen";

export default class RulesScreen {
  get element() {
    const rulesScreen = new Rules();
    const header = rulesScreen.element.querySelector(`.header`);
    header.insertBefore(backButton(), header.children[0]);
    rulesScreen.onContinue = (userName) => Router.showGame(userName);
    return rulesScreen.element;
  }
}

import Router from "../router/application-router.js";
import BackButtonView from "../views/back-button-view.js";

export default class BackButton {
  get element() {
    const headerBtn = new BackButtonView();
    headerBtn.onClick = () => Router.showGreeting();
    return headerBtn.element;
  }
}



import {Rules} from "../views/rules-view";
import Router from "../router/application-router";

export default () => {
  const rulesScreen = new Rules();
  rulesScreen.onContinue = (userName) => Router.showGame(userName);
  return rulesScreen;
};

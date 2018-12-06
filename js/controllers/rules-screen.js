import {Rules} from "../views/rules-view";
import Router from "../router/application-router";


export default () => {
  const rulesScreen = new Rules();
  rulesScreen.onContinue = (userName) => Router.showGame(userName);
    // const firstLevel = LevelData[gameState.level - 1];
    // const firstScreen = gameScreen(firstLevel.type, firstLevel.options, gameState).element;
    // renderScreen(firstScreen);
  return rulesScreen;
};

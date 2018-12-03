import {Rules} from "../views/rules-view";
import {renderScreen} from "../utils/render";
import {LevelData, gameState} from "../data/game-data";
import gameScreen from './game-screen.js'

export default () => {
  const rulesScreen = new Rules();
  rulesScreen.onContinue = () => {
    const firstLevel = LevelData[gameState.level - 1];
    const firstScreen = gameScreen(firstLevel.type, firstLevel.options, gameState).element;
    renderScreen(firstScreen);
  };
  return rulesScreen;
};

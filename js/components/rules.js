import {Rules} from "../views/rules-view";
import {renderScreen} from "../utils/render";
import levelTypes from "../data/level-types";
import {LevelData, gameState} from "../data/game-data";

export default () => {
  const rulesScreen = new Rules();
  rulesScreen.onContinue = () => renderScreen(levelTypes[LevelData[0].type](LevelData[0].options, gameState).element);
  return rulesScreen;
};

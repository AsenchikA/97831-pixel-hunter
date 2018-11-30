import {GameRules} from "../data/game-data.js";

export default (answers) => {
  const statsIcons = `
    <ul class="stats">
      ${answers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
      ${new Array(GameRules.MAX_LEVEL - answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
    </ul>
  `;
  return statsIcons;
};

import {Lives} from "../views/header-view";

export default (lives) => {
  const livesBlock = new Lives(lives);
  return livesBlock;
};

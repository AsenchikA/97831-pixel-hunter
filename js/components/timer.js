import {Timer} from "../views/header-view";

export default (time) => {
  const timer = new Timer(time);
  return timer;
};

import {ButtonHeader} from "../views/header-view";
import {renderScreen} from "../utils/render";
import greeting from "./greeting";

export default () => {
  const headerBtn = new ButtonHeader();
  headerBtn.onClick = () => {
    renderScreen(greeting().element);
  };
  return headerBtn.element;
};

'use strict';

const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const arrows = document.createElement(`div`);
arrows.classList.add(`arrows__wrap`);
arrows.innerHTML = `<style>
.arrows__wrap {
  position: absolute;
  top: 95px;
  left: 50%;
  margin-left: -56px;
}
.arrows__btn {
  background: none;
  border: 2px solid black;
  padding: 5px 20px;
}
</style>
<button id='arrow-left' class="arrows__btn"><-</button>
<button id='arrow-right' class="arrows__btn">-></button>`;

document.querySelector(`body`).appendChild(arrows);

const templates = Array.from(document.querySelectorAll(`template`));
const mainElement = document.querySelector(`#main`);

let currentScreenIndex = templates.findIndex((item) => item.id === `greeting`);

const wrapElement = (element) => {
  const shadow = document.createElement(`div`);
  const content = element.content.cloneNode(true);
  shadow.appendChild(content);
  return shadow.cloneNode(true);
};

const showTemplate = (screenIndex) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(wrapElement(templates[screenIndex]));
};

const selectScreen = (screenIndex) => {
  if (screenIndex < 0) {
    screenIndex = templates.length - 1;
  }
  if (screenIndex > templates.length - 1) {
    screenIndex = 0;
  }
  currentScreenIndex = screenIndex;
  showTemplate(currentScreenIndex);
};

document.addEventListener(`keydown`, (e) => {
  if (e.keyCode === LEFT_ARROW) {
    selectScreen(currentScreenIndex - 1);
  }
  if (e.keyCode === RIGHT_ARROW) {
    selectScreen(currentScreenIndex + 1);
  }
});

document.querySelector(`.arrows__wrap`).addEventListener(`click`, (e) => {
  if (e.target.id === `arrow-left`) {
    selectScreen(currentScreenIndex - 1);
  }
  if (e.target.id === `arrow-right`) {
    selectScreen(currentScreenIndex + 1);
  }
});

showTemplate(currentScreenIndex);

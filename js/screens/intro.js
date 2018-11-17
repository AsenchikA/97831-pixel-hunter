import wrapElement from './../utils/wrap-element.js';
import renderScreen from './../utils/render-screen.js';
import greetengBlock from './greeteng.js';

const template = `<section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>`;

const element = wrapElement(template);

const introAsteriskButton = element.querySelector(`.intro__asterisk`);
introAsteriskButton.addEventListener(`click`, () => {
  renderScreen(greetengBlock);
});

export default element;
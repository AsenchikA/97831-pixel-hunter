import {adaptServerData} from "../data/data-adapter.js";

const URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = 451984296;

const checkResponse = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Loader {
  static loadData() {
    return fetch(`${URL}/questions`)
            .then(checkResponse)
            .then((response) => response.json())
            .then(adaptServerData);
  }
  static saveResult(name, data) {
    data = Object.assign({name}, data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${URL}/stats/${APP_ID}-${name}`, requestSettings)
            .then(checkResponse);
  }
  static loadStats(name) {
    return fetch(`${URL}/stats/${APP_ID}-${name}`)
            .then(checkResponse)
            .then((response) => response.json());
  }
}

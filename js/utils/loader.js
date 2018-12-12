import {adaptServerData} from "../data/data-adapter";

const URL = `https://es.dump.academy/pixel-hunter/questions`;

const checkResponse = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Loader {
  static loadData() {
    return fetch(URL)
            .then(checkResponse)
            .then((response) => response.json())
            .then(adaptServerData);
  }
}

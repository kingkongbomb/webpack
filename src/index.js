//import _ from "lodash";
import "./style.css";
//import(/* webpackPrefetch: true */ "./style.css")
const debounce = require("lodash/debounce");

function component() {
  const element = document.createElement("div");

  const input = document.createElement("input");
  input.addEventListener("input", (e) => {
    const x = debounce(() => setField(e.target.value), 1000, { trailing: false });
    x();
  });
  element.appendChild(input);

  const divEl = document.createElement("h1");
  divEl.innerHTML = "SOME RANDOM HEADER";
  element.appendChild(divEl);

  return element;

  function setField(x) {
    divEl.innerHTML = x;
  }
}

document.body.appendChild(component());

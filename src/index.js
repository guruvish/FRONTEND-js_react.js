import App from "./components/App";
const react = require("react");
const reactDOM = require("react-dom");

// reactDOM.render(what do u want, where do we want);
reactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

// var h1 = document.createElement("h1");
// h1.innerHTML = "hello world";
// document.getElementById("root").appendChild(h1);

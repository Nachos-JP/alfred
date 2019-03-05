const eventListener = require("./modules/eventListener");

window.onload = () => {
  eventListener.add();
  require("./modules/dataBind");
};

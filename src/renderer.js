const eventListener = require("./modules/eventListener");

window.onload = () => {
  eventListener.add();
  const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });
};

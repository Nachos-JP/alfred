const eventListener = require("./modules/eventListener");

eventListener.add();

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

import Vue from "vue";
const eventListener = require("./modules/eventListener");

eventListener.add();

const vm = new Vue({
  el: "#titlebar-project-name",
  data: {
    projectName: "hello"
  }
});

import Vue from "vue";
const eventListener = require("./modules/eventListener");
import "./style/scss/main.scss";

eventListener.add();

const vm = new Vue({
  el: "#titlebar-project-name",
  data: {
    projectName: "hello"
  }
});

import Vue from "vue";
import "../style/main.scss";
import eventListener from "./modules/eventListener";


eventListener.add();

const vm = new Vue({
  el: "#titlebar-project-name",
  data: {
    projectName: "hello"
  }
});

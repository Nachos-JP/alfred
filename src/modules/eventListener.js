const windowControl = require("./windowControl");
const startProject = require("./startProject");

module.exports = {
  add: function(){
    for(const action of Object.keys(this)){
      if(this[action].hasOwnProperty("add")){
        this[action].add();
      }
    }
  },
  windowMinBtn: {
    add: function(){
      const targetElement = document.getElementById("window-min-btn");
      targetElement.onclick = () => windowControl.minimize();
    }
  },
  windowMaxBtn: {
    add: function(){
      const targetElement = document.getElementById("window-max-btn");
      targetElement.onclick = () => windowControl.maximize();
    }
  },
  windowRestoreBtn: {
    add: function(){
      const targetElement = document.getElementById("window-restore-btn");
      targetElement.onclick = () => windowControl.restore();
    }
  },
  windowCloseBtn: {
    add: function(){
      const targetElement = document.getElementById("window-close-btn");
      targetElement.onclick = () => windowControl.close();
    }
  },
  newProjectBtn: {
    add: function(){
      const targetElement = document.getElementById("new-project-btn");
      targetElement.onclick = () => alert("NEW PROJECT");
    }
  },
  openProjectBtn: {
    add: function(){
      const targetElement = document.getElementById("open-project-btn");
      targetElement.onclick = () => startProject.open();
    }
  },
  notificationBtn: {
    add: function(){
      const targetElement = document.getElementById("notification-btn");
      targetElement.onclick = () => alert("Notification");
    }
  }
};

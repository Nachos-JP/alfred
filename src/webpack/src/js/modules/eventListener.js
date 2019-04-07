const windowControl = require("./windowControl");
const fileManager = require("./fileManager");

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
  notificationBtn: {
    add: function(){
      const targetElement = document.getElementById("notification-btn");
      targetElement.onclick = () => alert("Notification");
    }
  },
  menubarNewFileBtn: {
    add: function(){
      const targetElement = document.getElementById("menubar-new-file-btn");
      targetElement.onclick = () => alert("New file");
    }
  },
  menubarOpenFileBtn: {
    add: function(){
      const targetElement = document.getElementById("menubar-open-file-btn");
      targetElement.onclick = () => fileManager.openFile();
    }
  },
  menubarSaveBtn: {
    add: function(){
      const targetElement = document.getElementById("menubar-save-btn");
      targetElement.onclick = () => alert("Save");
    }
  }
};

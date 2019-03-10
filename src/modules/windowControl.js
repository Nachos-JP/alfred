const remote = require("electron").remote;

module.exports = {
  toggleWindowBtn: function(){
    const windowMaxBtn = document.getElementById("window-max-btn");
    const windowRestoreBtn = document.getElementById("window-restore-btn");
    windowMaxBtn.classList.toggle("show");
    windowRestoreBtn.classList.toggle("show");
  },
  minimize: function(){
    const window = remote.getCurrentWindow();
    window.minimize();
  },
  maximize: function(){
    const window = remote.getCurrentWindow();
    window.maximize();
    this.toggleWindowBtn();
  },
  restore: function(){
    const window = remote.getCurrentWindow();
    window.unmaximize();
    this.toggleWindowBtn();
  },
  close: function(){
    const window = remote.getCurrentWindow();
    window.close();
  }
};

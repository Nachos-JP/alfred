const remote = require("electron").remote;

module.exports = {
  minimize: function(){
    const window = remote.getCurrentWindow();
    window.minimize();
  },
  maximize: function(){
    const window = remote.getCurrentWindow();
    window.maximize();
  },
  restore: function(){
    const window = remote.getCurrentWindow();
    window.unmaximize();
  },
  close: function(){
    const window = remote.getCurrentWindow();
    window.close();
  }
};

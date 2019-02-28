const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const Store = require("electron-store");
const store = new Store();

let mainWindow = null;

const createWindow = ()=>{
  mainWindow = new BrowserWindow({
    width: store.get("window.bound.width")?store.get("window.bound.width"):800,
    height: store.get("window.bound.height")?store.get("window.bound.height"):600,
    x: store.get("window.bound.x")?store.get("window.bound.x"):null,
    y: store.get("window.bound.y")?store.get("window.bound.y"):null,
    frame: false
  });
  mainWindow.loadFile("index.html");
  mainWindow.webContents.openDevTools();
  mainWindow.on("close", ()=>{
    const bound = mainWindow.getBounds();
    store.set("window.bound", {
      width: bound.width,
      height: bound.height,
      x: bound.x,
      y: bound.y
    });
  })
  mainWindow.on("closed", ()=>{
    mainWindow = null;
  })
};

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', ()=>{
  if(mainWindow === null){
    createWindow();
  }
});

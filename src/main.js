const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const Store = require("electron-store");
const store = new Store();

let mainWindow = null;

const createWindow = ()=>{
  const storeWidth = store.get("window.bound.width");
  const storeHeight = store.get("window.bound.height");
  const storeCoordX = store.get("window.bound.x");
  const storeCoordY = store.get("window.bound.y");

  mainWindow = new BrowserWindow({
    width: storeWidth ? storeWidth : 800,
    height: storeHeight ? storeHeight : 600,
    x: storeCoordX ? storeCoordX : null,
    y: storeCoordY ? storeCoordY : null,
    frame: false
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
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

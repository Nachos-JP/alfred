const dialog = require("electron").remote.dialog;

const fs = require("fs").promises;
const path = require("path");

const dataManager = require("./dataManager");

const openFile = async ()=>{
  const filePathList = dialog.showOpenDialog(null, {
    properties: ["openFile"],
    title: "Select project file",
    defaultPath: ".",
    filters: [
      {name: "project file", extensions: ["gek"]}
    ]
  });
  const [fileName, ...ext] = path.basename(filePathList[0]).split(".");

  document.getElementById("titlebar-project-name").textContent = fileName;
  const data = await fs.readFile(filePathList[0], "utf8");
  console.log(data);
};

module.exports = {openFile};

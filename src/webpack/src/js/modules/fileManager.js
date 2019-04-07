import {remote} from "electron";
import fs_ from "fs";
import path from "path";
import dataManager from "./dataManager";

const dialog = remote.dialog;
const fs = fs_.promises;


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

export {openFile};

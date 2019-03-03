const dialog = require("electron").remote.dialog;
const fs = require("fs").promises;

module.exports = {
  open: async function(){
    const fileName = dialog.showOpenDialog(null, {
      properties: ["openFile"],
      title: "Select project file",
      defaultPath: ".",
      filters: [
        {name: "project file", extensions: ["gek"]}
      ]
    });
    const data = await fs.readFile(fileName[0], "utf8");
    console.log(data);
  }
};

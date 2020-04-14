// const { contextBridge/*, ipcRenderer*/ } = require('electron');
const project = require('./project');

let api = {
    project: project
}

// contextBridge.exposeInMainWorld('NitroxNative', api);
window.NitroxNative = api;

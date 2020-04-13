// const { contextBridge/*, ipcRenderer*/ } = require('electron');
const project = require('./project');

let api = {
    version: project.nitroxVersion
}

// contextBridge.exposeInMainWorld('NitroxNative', api);
window.NitroxNative = api;

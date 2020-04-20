const { /*contextBridge,*/ ipcRenderer, remote } = require('electron');
const project = require('../project');
const ServerController = require('./serverController');
const AnsiParser = require('ansi-to-html');

let api = {
    project: project,
    ipc: {
        send(channel, ...args) {
            ipcRenderer.send(channel, ...args);
        },
        invoke(channel, ...args) {
            return ipcRenderer.invoke(channel, ...args);
        },
        on(channel, callback) {
            ipcRenderer.on(channel, (event, ...args) => callback(...args));
        },
        removeListener(channel, originCallback) {
            ipcRenderer.removeListener(channel, (event, ...args) => originCallback(...args));
        },
        removeAllListeners(channel) {
            ipcRenderer.removeAllListeners(channel);
        }
    },
    ServerController,
    AnsiParser,
    win: remote.getCurrentWindow(),
    platform: process.platform
}

// contextBridge.exposeInMainWorld('NitroxNative', api);
window.NitroxNative = api;

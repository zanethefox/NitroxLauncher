const { /*contextBridge,*/ ipcRenderer } = require('electron');
const project = require('./project');

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
    }
}

// contextBridge.exposeInMainWorld('NitroxNative', api);
window.NitroxNative = api;

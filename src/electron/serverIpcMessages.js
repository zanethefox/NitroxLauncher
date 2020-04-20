/**
 * @typedef {Object} ipcReceiveMessages
 * @property {String} registerListener ipc message to register a window ipc messages listener
 * @property {String} start ipc message to start the server
 * @property {String} stop ipc message to stop the server
 * @property {String} running ipc message to know if the server is running
 * @property {String} write ipc message to send stdin to th server
 */
/**
 * @type {ipcReceiveMessages}
 */
const ipcReceiveMessages = {
    registerListener: "server:registerListener",
    start: "server:start",
    stop: "server:stop",
    running: "server:running",
    write: "server:write"
}
/**
 * @typedef {Object} ipcSendMessages
 * @property {String} start ipc message on server start
 * @property {String} exit ipc message on server close/stop/exit
 * @property {String} data ipc message on server data
 */
/**
 * @type {ipcSendMessages}
 */
const ipcSendMessages = {
    start: "server:start",
    exit: "server:exit",
    data: "server:data"
}

/**
 * @typedef {Object} ipcMessages
 * @property {ipcReceiveMessages} ipcReceiveMessages
 * @property {ipcSendMessages} ipcSendMessages
 */
/**
 * @type {ipcMessages}
 */
const ipcMessages = { ipcReceiveMessages, ipcSendMessages };
module.exports = ipcMessages;

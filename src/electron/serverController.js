const EventEmitter = require('events');
const { ipcRenderer } = require('electron');

const { ipcReceiveMessages, ipcSendMessages } = require('./serverIpcMessages');

/**
 * Server Controller class
 * @class
 * @extends EventEmitter
 */
class ServerController extends EventEmitter {
    /**
     * Creates a ServerController
     * @constructor
     */
    constructor() {
        super();
        this.registerSelf();
        this.registerEvents();
    }

    /**
     * @private
     */
    registerSelf() {
        ipcRenderer.send(ipcReceiveMessages.registerListener);
    }

    /**
     * @private
     */
    registerEvents() {
        ipcRenderer.on(ipcSendMessages.start, () => {
            this.emit('start');
        });
        ipcRenderer.on(ipcSendMessages.exit, (event, code) => {
            this.emit('exit', code);
        });
        ipcRenderer.on(ipcSendMessages.data, (event, data) => {
            this.emit('data', data);
        });
    }

    /**
     * Starts the server
     * @param {Array<String>} args args to start the server with
     */
    start(args) {
        ipcRenderer.send(ipcReceiveMessages.start, args);
    }

    /**
     * Stops the server
     */
    stop() {
        ipcRenderer.send(ipcReceiveMessages.stop);
    }

    /**
     * Sends data to process stdin (input)
     * @param {any} data data to send to stdin
     */
    write(data) {
        ipcRenderer.send(ipcReceiveMessages.write, data);
    }

    /**
     * is the server running
     * @returns {Boolean} returns if the server is running
     */
    isRunning() {
        // return ipcRenderer.invoke(ipcReceiveMessages.running);
        return ipcRenderer.sendSync(ipcReceiveMessages.running);
    }
}

module.exports = ServerController;

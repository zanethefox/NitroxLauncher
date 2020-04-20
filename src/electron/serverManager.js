const EventEmitter = require('events');
const { ipcMain } = require('electron');
// const pty = require('node-pty');
const pty = require('node-pty-prebuilt-multiarch');

const { ipcReceiveMessages, ipcSendMessages } = require('./serverIpcMessages');

/**
 * Server Manager class
 * @class
 * @extends EventEmitter
 */
class ServerManager extends EventEmitter {
    /* *
     * @type {import('node-pty').IPty}
     */
    /**
     * @type {import('node-pty-prebuilt-multiarch').IPty}
     */
    // server;
    /**
     * @type {String}
     */
    // path;
    /**
     * @type {Array<String>}
     */
    // args;
    /**
     * @type {Array<import('electron').webContents>}
     */
    // listeners;
    
    /**
     * Creates a ServerManager
     * @constructor
     * @param {String} path path to the server
     * @param {Array<String>} args first args of the process
     */
    constructor(path, args) {
        super();
        this.path = path;
        this.args = Array.isArray(args) ? args : [];
        this.listeners = [];
    }

    /**
     * Registers all ipc messages
     */
    registerIpcMain() {
        /* receive ipc messages */
        ipcMain.on(ipcReceiveMessages.registerListener, event => {
            this.registerIpcListener(event.sender);
        });

        ipcMain.on(ipcReceiveMessages.start, (event, /** @type {Array<String>} */ args) => {
            this.start(args);
        });

        ipcMain.on(ipcReceiveMessages.stop, () => { 
            this.stop();
        });

        /* ipcMain.handle(ipcReceiveMessages.running, () => new Promise((resolve) => {
            resolve(this.isRunning());
        })); */

        ipcMain.on(ipcReceiveMessages.running, (event) => event.returnValue = this.isRunning());

        ipcMain.on(ipcReceiveMessages.write, (event, data) => {
            this.write(data);
        });

        /* send ipc message */
        this.on('process:start', () => {
            this.emit('start');
            this.listeners.forEach(listener => listener.send(ipcSendMessages.start));
        });
        this.on('process:exit', (code) => {
            this.listeners.forEach(listener => listener.send(ipcSendMessages.exit, code));
            delete this.server;
            this.emit('exit', code);
        });
        this.on('process:data', (data) => {
            this.emit('data', data);
            this.listeners.forEach(listener => listener.send(ipcSendMessages.data, data));
        });
    }

    /**
     * Registers an ipc listener that receives the events
     * @param {import('electron').webContents} sender
     */
    registerIpcListener(sender) {
        this.listeners.push(sender);
    }

    /**
     * Starts the server
     * @param {Array<String>} args args to start the server with
     */
    start(args) {
        if (this.isRunning()) {
            return false;
        }

        if (!Array.isArray(args)) args = [];

        const finalArgs = [...this.args, ...args];

        this.server = pty.spawn(this.path, finalArgs, {
            cols: 120,
            rows: 30,
            env: { PATH: process.env.PATH }
        });
        this.emit('process:start');

        this.server.on('exit', (code) => {
            this.emit('process:exit', code);
            if (this.server) {
                delete this.server;
            }
        });
        this.server.on('data', (data) => {
            this.emit('process:data', data);
        });
    }

    /**
     * Stops the server
     */
    stop() {
        if (this.isRunning()) {
            this.server.kill();
        }
    }

    /**
     * Sends data to process stdin (input)
     * @param {String} data data to send to stdin
     */
    write(data) {
        if (this.isRunning()) {
            if (data == undefined) data = "";
            this.server.write(data);
        }
    }

    /**
     * is the server running
     * @returns {Boolean} returns if the server is running
     */
    isRunning() {
        return !!this.server;
    }
}

module.exports = ServerManager

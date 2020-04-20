/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const { app, protocol, BrowserWindow, shell, ipcMain } = require('electron');
const VueCLI = require('vue-cli-plugin-electron-builder/lib');
const Path = require('path');
const isDevelopment = process.env.NODE_ENV !== 'production';

/* Windows global references */
let win;
let winLoading;

/* Scheme must be registered before the app is ready */
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }]);
/* btw protocol.registerFileProtocol could be used to create click-to-join buttons on websites for quick connect */
/* To fix the warning with the new Electron 8.2.2 */
app.allowRendererProcessReuse = false;

/* should also use the loading screen for updating the launcher, prob using squirrel for example? */
function createLoadingWindow() {
    /* Loading window */
    winLoading = new BrowserWindow({
        width: 332,
        height: 342,
        frame: false,
        backgroundColor: '#28292C',
        icon: Path.join(__dirname, '../src/assets/img/icon.png'),
        resizable: false
    });

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        /* Load the url of the dev server if in development mode */
        winLoading.loadURL(process.env.WEBPACK_DEV_SERVER_URL + "/loading.html")
    }
    else {
        VueCLI.createProtocol('app');
        /* Load the local loading.html otherwise */
        winLoading.loadURL('app://./loading.html');
    }

    winLoading.on('closed', () => winLoading = undefined);
    winLoading.webContents.on('did-finish-load', () => {
        winLoading.show();
    });
}

function createWindow() {
    /* Main window */
    win = new BrowserWindow({
        width: 1024,
        height: 612,
        minWidth: 1024,
        minHeight: 612,
        frame: false,
        titleBarStyle: 'hidden',
        backgroundColor: '#28292C',
        icon: Path.join(__dirname, '../src/assets/img/icon.png'),
        webPreferences: {
            nodeIntegration: true, /* this has to be changed for preload */
            preload: Path.join(__dirname, '../src/', './electron/preload.js')
        },
        show: false
    });

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        /* Load the url of the dev server if in development mode */
        win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
        /* if (!process.env.IS_TEST) win.webContents.openDevTools() */
    }
    else {
        VueCLI.createProtocol('app');
        /* Load the local index.html otherwise */
        win.loadURL('app://./index.html');
    }

    /* handling links and redirects inside the app */
    function handleRedirect(e, url) {
        e.preventDefault();
        shell.openExternal(url);
    }

    win.webContents.on('new-window', handleRedirect);

    /* Has to be worked on because if there are internal browsing it can cause problems * /
    win.webContents.on('will-navigate', (e, url) => {
        handleRedirect(e, url);
    }); */

    win.on('closed', () => win = undefined);

    win.webContents.on('did-finish-load', () => {
        /// when the content has loaded, hide the loading screen and show the main window
        if (winLoading) {
            winLoading.close();
        }
        win.show();
    });
}

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (!win) {
        createWindow();
    }
})

app.on('window-all-closed', () => {
    win = undefined;
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    /* if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        // Devtools extensions are broken in Electron 6.0.0 and greater
        // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
        // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
        // If you are not using Windows 10 dark mode, you may uncomment these lines
        // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
        // try {
        //   await installVueDevtools()
        // } catch (e) {
        //   console.error('Vue Devtools failed to install:', e.toString())
        // }
    } */

    createLoadingWindow();

    setTimeout(() => {
        createWindow();
    }, 1000);
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', data => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    }
}

const ServerManager = require('./electron/serverManager');

/* messages */
ipcMain.handle('game:start', () => new Promise((resolve, reject) => {
    /* start the game and resolve() when it's done */
    setTimeout(() => {
        resolve();
    }, 2000);
}));

const isUnix = ['linux', 'darwin'].indexOf(process.platform) >= 0;
const nitroxServer = './nitrox-bins/NitroxServer/server.exe'

const serverData = {
    path: isUnix ? 'mono' : nitroxServer,
    args: isUnix ? [nitroxServer] : []
}

const serverManager = new ServerManager('node.exe', []);

serverManager.registerIpcMain();

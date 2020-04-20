const { win } = window.NitroxNative;

function handleWindowControls() {
    // Make minimise/maximise/restore/close buttons work when they are clicked
    document.querySelector('#min-button').addEventListener("click", () => {
        win.minimize();
    });

    document.querySelector('#max-button').addEventListener("click", () => {
        win.maximize();
    });

    document.querySelector('#restore-button').addEventListener("click", () => {
        win.unmaximize();
    });

    document.querySelector('#close-button').addEventListener("click", () => {
        win.close();
    });

    /* Toggle maximize/restore buttons when maximization/un-maximization occurs */
    updateWindowState();
    win.on('maximize', updateWindowState);
    win.on('unmaximize', updateWindowState);

    function updateWindowState() {
        document.body.classList[win.isMaximized() ? 'add' : 'remove']('maximized');
    }
}

/* Change control buttons according to os */
if (window.NitroxNative.platform === 'darwin') {
    let windowControls = document.querySelector("#window-controls");
    windowControls.classList.add("is-mac");
}

window.addEventListener('beforeunload', () => {
    /* If window is reloaded, remove win event listeners
    (DOM element listeners get auto garbage collected but not
    Electron win listeners as the win is not dereferenced unless closed) */
    win.removeAllListeners();
});

handleWindowControls();

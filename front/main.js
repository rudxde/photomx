const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        backgroundColor: '#1e1e1e',
        // icon: `file://${__dirname}/dist/assets/logo.png`
    });


    win.loadURL(`file://${__dirname}/dist/index.html`);

    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function() {
        app.quit();
    });
}

// Create window on electron intialization
app.on('ready', createWindow);


app.on('activate', function() {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
});
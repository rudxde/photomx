const { app, BrowserWindow } = require('electron')

let electronWindow;

require('source-map-support').install();


function createWindow() {
    // Create the browser window.
    electronWindow = new BrowserWindow({
        backgroundColor: '#1e1e1e',
        // icon: `file://${__dirname}/dist/assets/logo.png`
    });


    electronWindow.loadURL(`file://${__dirname}/dist/index.html`);

    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()

    // Event when the window is closed.
    electronWindow.on('closed', function() {
        app.quit();
    });
}

// Create window on electron intialization
app.on('ready', createWindow);


app.on('activate', function() {
    // macOS specific close process
    if (electronWindow === null) {
        createWindow()
    }
});
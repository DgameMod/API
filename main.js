const { app, BrowserWindow } = require('electron')

function createWindow(){
    const ventana = new BrowserWindow({
        width : 500,
        innerHeight : 500,
        webPreferences: {
            nodeIntegration: true
        }
    })

    ventana.loadFile('index.html')

}
app.whenReady().then(createWindow)
const { app, BrowserWindow } = require('electron')

let mainWindow

function onReady () {
  mainWindow = new BrowserWindow({width: 1000, height: 800})
  mainWindow.loadURL('https://youtube.com')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

function onWindowAllClosed() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

function onActivate() {
  if (mainWindow === null) {
    createWindow()
  }
}

app.on('ready', onReady)
app.on('window-all-closed', onWindowAllClosed)
app.on('activate', onActivate)

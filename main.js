const { app, BrowserWindow } = require('electron')

let mainWindow

function onReady () {
  const config = {
    width: 1000,
    height: 800,
    icon: './static/icon/youtube.png'
  }

  app.dock.setIcon(config.icon)
  mainWindow = new BrowserWindow(config)
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

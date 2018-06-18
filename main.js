const { app, BrowserWindow } = require('electron')

let mainWindow
const config = {
  title: "Youtube",
  width: 1000,
  height: 800,
  icon: './static/icon/youtube.png',
  center: true,
}

function onReady () {
  app.dock.setIcon(config.icon)

  mainWindow = new BrowserWindow(config)
  mainWindow.loadURL('https://youtube.com')
  mainWindow.on('closed', onClosed)
}

function onClosed() {
  mainWindow = null
}

function onWindowAllClosed() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

function onActivate() {
  if (mainWindow === null) {
    onReady()
  }
}

app.on('ready', onReady)
app.on('window-all-closed', onWindowAllClosed)
app.on('activate', onActivate)

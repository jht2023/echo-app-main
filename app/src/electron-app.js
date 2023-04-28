const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');


const createMainWindow = () => {
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    backgroundColor: 'white',
    
    webPreferences: {
      nodeIntegration: true      
    }
  });
  const startURL = isDev?'http://localhost:3000':`file://{${path.join(__dirname, '../build/index.html')}`;

  mainWindow.loadURL(startURL);
  // mainWindow.loadFile('./public/index.html')

  mainWindow.once('ready-to-show', () => mainWindow.show());

  // mainWindow.on('closed', () => {
  //   mainWindow = null;
  // });
};

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
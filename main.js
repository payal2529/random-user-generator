const { app, BrowserWindow, dialog } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
      devTools: isDev, // Enable devTools only in development mode
    },
  });

  mainWindow.setMenuBarVisibility(false); // Hide the menu bar
  // mainWindow.setAutoHideMenuBar(true); // Auto-hide the menu bar

  mainWindow.loadFile("index.html");

  // if (isDev) {
  //   mainWindow.webContents.openDevTools(); // Open devTools automatically in development mode
  // }

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

// Enforce single instance application
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
      dialog.showMessageBox({
        type: "info",
        title: "Already Running",
        message: "The application is already running.",
        buttons: ["OK"],
      });
    }
  });

  app.whenReady().then(() => {
    createWindow();

    app.on("activate", function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
  });
}

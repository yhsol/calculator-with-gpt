// // main.js

// // Modules to control application life and create native browser window
// const { app, BrowserWindow, ipcMain } = require("electron");
// const path = require("path");

// const createWindow = () => {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true,
//       sandbox: false,
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });

//   ipcMain.handle("ping", () => "pong");

//   // and load the index.html of the app.
//   mainWindow.loadFile("index.html");

//   // Open the DevTools.
//   // mainWindow.webContents.openDevTools()
// };

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(() => {
//   createWindow();

//   app.on("activate", () => {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });

// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and require them here.

const { app, BrowserWindow } = require("electron");
const axios = require("axios");

function createWindow() {
  // 브라우저 창 생성
  let win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 계산을 수행하는 함수
  function calculate(operation, a, b) {
    const url = `http://localhost:3000/${operation}?a=${a}&b=${b}`;

    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        win.webContents.send("calculationResult", result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 렌더러 프로세스에서 계산 요청을 받음
  const { ipcMain } = require("electron");
  ipcMain.on("calculate", (event, arg) => {
    const { operation, a, b } = arg;
    calculate(operation, a, b);
  });

  // index.html 파일 로드
  win.loadFile("index.html");
}

// 앱이 시작되면 브라우저 창 생성
app.whenReady().then(createWindow);

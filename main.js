const electron = require('electron');
const {
    app, // 控制应用生命周期的模块
    BrowserWindow, // 创建原生浏览器窗口的模块
} = electron;
// 防止在安装过程中程序会多次启动
if (require('electron-squirrel-startup')) return app.quit();
const httpServer = require('http-server');
console.log("httpServer: \n", httpServer.HttpServer);
httpServer.createServer({
    root: app.getAppPath() + "/public"
}).listen(51098);

// 保持一个对于 window 对象的全局引用，如果不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let mainWindow;
// 单例锁
const gotTheLock = app.requestSingleInstanceLock()
// 本地应用直接开启禁用缓存保持每次安装都是最新
app.commandLine.appendSwitch("--disable-http-cache");

function createWindow() {
    // 创建浏览器窗口。

    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    // 加载应用的 index.html。
    // 这里使用的是 file 协议，加载当前目录下的 index.html 文件。
    // 也可以使用 http 协议，如 mainWindow.loadURL('http://nodejh.com')。
    mainWindow.loadURL(`http://127.0.0.1:51098`);
    // 启用开发工具。
    // mainWindow.webContents.openDevTools();

    // 不注册该事件会导致更换语言风格后，点击关闭无反应
    mainWindow.on('close', () => {
        mainWindow = null;
        // app.quit();	// 不要用 quit(); 试了没有用
        app.exit();		// exit() 直接关闭客户端，不会执行 quit();
    })

    // 当 window 被关闭，这个事件会被触发。
    mainWindow.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        mainWindow = null;
    });
}

if (!gotTheLock) {
    app.quit()
} else {

    app.on('second-instance', (event, commandLine, workingDirectory) => {
        // 当运行第二个实例时,将会聚焦到 mainWindow 这个窗口
        if (mainWindow) {
            mainWindow.show()
            if (mainWindow.isMinimized()) mainWindow.restore()
            mainWindow.focus()
        }
    })

    // Electron 会在初始化后并准备
    // 创建浏览器窗口时，调用这个函数。
    // 部分 API 在 ready 事件触发后才能使用。
    app.on('ready', () => {
        createWindow()

        /*app.on('activate', () => {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })*/
    });

    // 当全部窗口关闭时退出。
    app.on('window-all-closed', () => {
        // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
        // 否则绝大部分应用及其菜单栏会保持激活。
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        // 在 macOS 上，当点击 dock 图标并且该应用没有打开的窗口时，
        // 绝大部分应用会重新创建一个窗口。
        if (mainWindow === null || BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    app.on('web-contents-created', (event, contents) => {
        contents.setWindowOpenHandler(({ url }) => {
            // 在此示例中我们要求操作系统
            // 在默认浏览器中打开此事件的 url。
            //
            // 关于哪些URL应该被允许通过shell.openExternal打开，
            // 请参照以下项目。
            /*if (isSafeForExternalOpen(url)) {
                setImmediate(() => {
                    shell.openExternal(url)
                })
            }*/

            return { action: 'deny' }
        })
    })
}

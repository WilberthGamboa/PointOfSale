
const { app, BrowserWindow,ipcMain } = require("electron");
const path = require("path");
const { initDb } = require("./main/db/database");
const { Product } = require("./main/model/product.model");
const { ProductsService } = require("./main/products/products.service");
const productService = new ProductsService();
let appWin;

createWindow = async () => {
    appWin = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Angular and Electron",
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname,'preload', 'preload.js'),
            webSecurity:false,
            allowRunningInsecureContent:true
        }
       
        
    });
    ipcMain.on('set-title', (event, title) => {
        console.log(title)
      })
    
  //  appWin.loadURL(`file://${__dirname}/dist/index.html`);
     appWin.loadURL('http://localhost:4200')

    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });

    initDb();
    ipcMain.handle('getProductByCodeBar',productService.getProductByCodeBar)
    /*
   const producto = new  Product({
    productname: 'sadfds',
    barcode:'1',
    price:120
   })

   await producto.save()
    */
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});
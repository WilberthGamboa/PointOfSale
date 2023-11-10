
const { app, BrowserWindow,ipcMain } = require("electron");
const path = require("path");
const { initDb } = require("./main/db/database");
const ProductController = require("./main/product/controller/product.controller");
const CategoryController = require("./main/category/controller/category.controller");
const SaleProductController = require("./main/saleProduct/controller/saleProduct.controller");

const productController = new ProductController();
const categoryController = new CategoryController();
const saleProductController = new SaleProductController();
let appWin;
let createWindow;
createWindow = async () => {
    appWin = new BrowserWindow({
        width: 800,
        height: 600,
        title: "PointOfSale",
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
    
  //appWin.loadURL(`file://${__dirname}/dist/index.html`);
  console.log(path.join(__dirname, "..","dist","index.html"))
  //const pathname =path.join(__dirname, "..","dist","index.html");
  // appWin.loadURL(pathname);
     appWin.loadURL('http://localhost:4200')

    appWin.setMenu(null);

    appWin.webContents.openDevTools();

    appWin.on("closed", () => {
        appWin = null;
    });

    initDb();
    ipcMain.handle('getProductByCodeBar',productController.getProductByCodeBar);
    ipcMain.on('saveVentaIndividual', saleProductController.postSaleProduct)
    ipcMain.on('generarCorte', async () => {
      
     appWin.hide()
       await  productService.generarCorte()
       appWin.show()
    })
    ipcMain.handle('getCategories',categoryController.getCategories);
    ipcMain.handle('saveNewProduct',productController.postProduct);
    //ipcMain.handle('getProductByCodeBarWithCategory',productController.);
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
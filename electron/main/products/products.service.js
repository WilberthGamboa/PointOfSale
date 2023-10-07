
const { sequelize } = require("../db/database");
const { Product } = require("../model/product.model");
const { VentaIndivudal } = require("../model/ventaIndividual");
const ExcelJS = require('exceljs');
const {dialog} = require('electron')
class ProductsService {
    constructor(){}

    getProductByCodeBar = async (e,data) => {
       try {
      
        const product = await Product.findOne({
            where:{
                barcode:data
            }
        })

        return product;
       } catch (error) {
        console.log(error)
       }
        

    }

    saveVentaIndividual = async(e,data) =>{
        
        const product = await this.getProductByCodeBar(e,data);
        console.log(product.dataValues.id)
       const ventaIndivual = new VentaIndivudal({
        ProductId: product.dataValues.id
       })
        await ventaIndivual.save();
        

    }

    generarCorte = async () =>{
        const fechaActual = new Date();
        
        const selectedFolderPath = await dialog.showSaveDialog({
            
            properties: ['openDirectory'],
            defaultPath:fechaActual.toUTCString(),
            modal: false,
            filters: [
                { name: 'Archivos de Excel', extensions: ['xlsx'] } // Extensión por defecto
              ],
          });
   

const año = fechaActual.getFullYear();
const mes = fechaActual.getMonth() + 1; // Los meses se cuentan desde 0 (enero) hasta 11 (diciembre)
const dia = fechaActual.getDate();
     try {
        const ventas = await VentaIndivudal.findAll({
            include: Product,
            createdAt: {
              [sequelize.fn('strftime', '%d', sequelize.col('createdAt'))]: dia,
              [sequelize.fn('strftime', '%m', sequelize.col('createdAt'))]: mes,
              [sequelize.fn('strftime', '%Y', sequelize.col('createdAt'))]: año
            }
          });
          if (ventas.length > 0) {
            for (const venta of ventas) {
                console.log(venta.dataValues.product.dataValues)
              const { id, createdAt, updatedAt, ProductId } = venta.dataValues;
              const product = venta.Product; // Acceso a la relación Product
        
              console.log('ID:', id);
              console.log('Fecha de creación:', createdAt);
              console.log('Fecha de actualización:', updatedAt);
              console.log('ID del producto:', ProductId);
              console.log('Datos del producto:', product); // Datos del producto relacionado
              console.log('---');
            }
          } else {
            console.log('No se encontraron ventas.');
          }

          const workbook = new ExcelJS.Workbook();
          const sheet = workbook.addWorksheet('My Sheet');
          const worksheet = workbook.getWorksheet('My Sheet');
          worksheet.addRow(['productname', 'barcode','price']);
          ventas.forEach((venta) => {
            worksheet.addRow([venta.dataValues.product.dataValues.productname,venta.dataValues.product.dataValues.barcode,venta.dataValues.product.dataValues.price]);
          });
          console.log(selectedFolderPath)
          workbook.xlsx.writeFile(selectedFolderPath.filePath)
  .then(function () {
    console.log('Archivo guardado exitosamente.');
  })
  .catch(function (error) {
    console.error('Error al guardar el archivo:', error);
  });
     } catch (error) {
        console.log(error)
     }
        
    }
   
}

module.exports = {ProductsService}
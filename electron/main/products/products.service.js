
const { sequelize } = require("../db/database");
const { Product } = require("../model/product.model");
const { VentaIndivudal } = require("../model/ventaIndividual");
const ExcelJS = require('exceljs');
const { dialog } = require('electron');
const { Categoria } = require("../model/categoria.model");
class ProductsService {
    constructor() { }

    getProductByCodeBar = async (e, data) => {
        try {

            const product = await Product.findOne({
                where: {
                    barcode: data
                }
            })

            return product;
        } catch (error) {
            console.log(error)
        }


    }

    saveVentaIndividual = async (e, data) => {

        const product = await this.getProductByCodeBar(e, data);
        console.log(product.dataValues.id)
        const ventaIndivual = new VentaIndivudal({
            ProductId: product.dataValues.id
        })
        await ventaIndivual.save();


    }

    getCategories = async (e) =>{
        try {
            const categories = await  Categoria.findAll();
            return categories;
        } catch (error) {
            
        }
    }
    generarCorte = async () => {
        const fechaActual = new Date();
        const año = fechaActual.getFullYear();
        const mes = fechaActual.getMonth() + 1; // Los meses se cuentan desde 0 (enero) hasta 11 (diciembre)
        const dia = fechaActual.getDate();
        const fecha= `${año}-${mes}-${dia}`
        console.log(mes);
        console.log(dia);
        
        const selectedFolderPath = await dialog.showSaveDialog({

            properties: ['openDirectory'],
            defaultPath: fecha,
            modal: false,
            filters: [
                { name: 'Archivos de Excel', extensions: ['xlsx'] } // Extensión por defecto
            ],
        });

        try {
            const ventas = await VentaIndivudal.findAll({
                include: [
                    {
                        model:Product,
                        include:[Categoria]
                    }
                ],
                createdAt: {
                    [sequelize.fn('strftime', '%d', sequelize.col('createdAt'))]: dia,
                    [sequelize.fn('strftime', '%m', sequelize.col('createdAt'))]: mes,
                    [sequelize.fn('strftime', '%Y', sequelize.col('createdAt'))]: año
                }
            });
          

            const workbook = new ExcelJS.Workbook();
            const sheet = workbook.addWorksheet('My Sheet');
            const worksheet = workbook.getWorksheet('My Sheet');
            worksheet.addRow(['productname', 'barcode', 'price','Categoria']);
            const categorias = await Categoria.findAll();
            const categoriaConPrecio = []
          for (const categoria of categorias) {
            const test = {
                categoriaName:categoria.dataValues.categoriaName,
                precioTotal:0
            }
            categoriaConPrecio.push(test);
          }
            ventas.forEach((venta) => {
                const productDataValues= venta.dataValues.product.dataValues;
                const categoriaDataValues = productDataValues.categorium.dataValues;
                for (const categoria of categoriaConPrecio) {
                    if (categoria.categoriaName===categoriaDataValues.categoriaName) {
                        categoria.precioTotal= categoria.precioTotal+ productDataValues.price;
                        
                    }
                    
                }
                worksheet.addRow([productDataValues.productname, productDataValues.barcode, productDataValues.price,categoriaDataValues.categoriaName]);
            });
            categoriaConPrecio.forEach((row, index) => {
                const rowNumber = index + 2; // La primera fila es para los encabezados
                const cell = worksheet.getCell(`G${rowNumber}`); // B representa la columna 'Edad'
                const cell2 = worksheet.getCell(`F${rowNumber}`);
                cell.value = row.precioTotal;
                cell2.value=row.categoriaName;
              });
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
    saveNewProduct = async(e, data) => {
        const category = await Categoria.findOne({
            where:{
                categoriaName:data.categoryName
            },
            raw:true
        })
        
       
       

    }
}

module.exports = { ProductsService }
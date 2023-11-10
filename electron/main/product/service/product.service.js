//Bibliotecas
const ExcelJS = require('exceljs');
//Electron Import
const { dialog } = require('electron');
// Conexión db
const { sequelize } = require("../../db/database");
// Imports de  modelos
const ProductModel  = require("../model/product.model");
const { CategoryModel } = require('../../category/model/category.model');

class ProductsService {
    constructor() { }

    getProductByCodeBar = async (e, barcode) => {
        try {
            const product = await ProductModel.findOne({
                where: {
                    barcode
                },
                raw:true
            })
            console.log(product)
            return product;
        } catch (error) {
            console.log(error)
        }

    }

    postProduct = async (e, data) => {
        try {
            const { categoryName, ...restData } = data;
            const category = await CategoryModel.findOne({
                where: {
                    categoriaName: data.categoryName
                },
                raw: true
            })
            const test = new ProductModel({
                ...restData,
                categoriaId: category.id

            })
            await test.save()

        } catch (error) {
            return error.errors[0].message;
        }


    }

    getProductByCodeBarWithCategory = async (e, data) => {
        try {
            console.log(data)
            const product = await ProductModel.findOne({
                where: {
                    barcode: data
                },
                include: [
                    { model: CategoryModel }
                ],

            })

            // console.log(JSON.stringify(product))
            const x = JSON.stringify(product)
            console.log(x)
            const z = JSON.parse(x)
            console.log(z)
            return z;
        } catch (error) {
            console.log(error)
        }


    }

    generarCorte = async () => {
        const fechaActual = new Date();
        const año = fechaActual.getFullYear();
        const mes = fechaActual.getMonth() + 1; // Los meses se cuentan desde 0 (enero) hasta 11 (diciembre)
        const dia = fechaActual.getDate();
        const fecha = `${año}-${mes}-${dia}`
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
                        model: ProductModel,
                        include: [CategoryModel]
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
            worksheet.addRow(['productname', 'barcode', 'price', 'Categoria']);
            const categorias = await Categoria.findAll();
            const categoriaConPrecio = []
            for (const categoria of categorias) {
                const test = {
                    categoriaName: categoria.dataValues.categoriaName,
                    precioTotal: 0
                }
                categoriaConPrecio.push(test);
            }
            ventas.forEach((venta) => {
                const productDataValues = venta.dataValues.product.dataValues;
                const categoriaDataValues = productDataValues.categorium.dataValues;
                for (const categoria of categoriaConPrecio) {
                    if (categoria.categoriaName === categoriaDataValues.categoriaName) {
                        categoria.precioTotal = categoria.precioTotal + productDataValues.price;

                    }

                }
                worksheet.addRow([productDataValues.productname, productDataValues.barcode, productDataValues.price, categoriaDataValues.categoriaName]);
            });
            categoriaConPrecio.forEach((row, index) => {
                const rowNumber = index + 2; // La primera fila es para los encabezados
                const cell = worksheet.getCell(`G${rowNumber}`); // B representa la columna 'Edad'
                const cell2 = worksheet.getCell(`F${rowNumber}`);
                cell.value = row.precioTotal;
                cell2.value = row.categoriaName;
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

}

module.exports = ProductsService 
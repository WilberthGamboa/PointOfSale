const { Product } = require("../model/product.model");
const { VentaIndivudal } = require("../model/ventaIndividual");

class ProductsService {
    constructor(){}

    getProductByCodeBar = async (e,data) => {
       try {
        console.log({e,data})
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
        const product = await this.getProductByCodeBar(data);
        console.log(product);
        //const saveVentaIndivual = new VentaIndivudal({})

    }
}

module.exports = {ProductsService}
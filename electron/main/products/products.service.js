const { Product } = require("../model/product.model");
const { VentaIndivudal } = require("../model/ventaIndividual");

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
}

module.exports = {ProductsService}
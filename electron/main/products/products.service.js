const { Product } = require("../model/product.model")

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
}

module.exports = {ProductsService}
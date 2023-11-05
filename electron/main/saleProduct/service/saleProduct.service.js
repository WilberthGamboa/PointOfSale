const ProductsService = require("../../product/service/product.service");
const { SaleProductModel } = require("../model/saleProduct.model");

class SaleProductService {

    constructor() {
        this.productService = new ProductsService();
    }

    postSaleProduct = async (e, data) => {

        try {
            const product = await this.productService.getProductByCodeBar(e, data);
            const saleProduct = new SaleProductModel({
                ProductId: product.dataValues.id
            })
            await saleProduct.save();

        } catch (error) {
            console.log(error)

        }


    }
}

module.exports = SaleProductService
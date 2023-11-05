const SaleProductService = require("../service/saleProduct.service")

class SaleProductController{
    constructor(){
        this.saleProductService = new SaleProductService();
    }

    postSaleProduct = async(e,data) => {
        this.saleProductService.postSaleProduct(e,data);

    }
}

module.exports = SaleProductController;
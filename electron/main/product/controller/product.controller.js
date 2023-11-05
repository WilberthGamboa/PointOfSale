const  ProductsService  = require("../service/product.service")

class ProductController {
    constructor(){
        this.productService = new ProductsService();
    }

    getProductByCodeBar = (e, barcode) => {
        this.productService.getProductByCodeBar(e,barcode);
    }

    postProduct = (e,data) =>{
        this.productService.postProduct(e,data);
    }

    
}
module.exports = ProductController;
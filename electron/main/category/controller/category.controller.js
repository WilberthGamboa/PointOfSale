const CategoryService = require("../service/category.service");

class CategoryController {
    constructor() {
        this.categoryService = new CategoryService();
    }

    getCategories = async (e) => {
        return await this.categoryService.getCategories(e);
    }

}

module.exports = CategoryController;
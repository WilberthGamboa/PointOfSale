const { CategoryModel } = require("../model/category.model");

class CategoryService {
    constructor() { }

    getCategories = async (e) => {
        try {
            const categories = await CategoryModel.findAll();
            return categories;
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = CategoryService;
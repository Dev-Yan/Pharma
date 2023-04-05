import { Product } from "../../models/Product";

class ListProductsByCategoryService {
    async handle(categoryId: string) {

        const product = await Product.find().where('category').equals(categoryId);

        return product;

    }
}

export { ListProductsByCategoryService };
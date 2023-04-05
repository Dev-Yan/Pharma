import { Product } from "../../models/Product";

class FindProductByNameService {
    async handle(name: string) {
        const product = await Product.findOne({ name });

        if (!product) throw new Error('Product not found');

        return product;
    }
}

export { FindProductByNameService };
import { IProductDTO } from "../../DTOs/IProductDTO";
import { Product } from "../../models/Product";

class CreateProductService {
    async handle({ name, description, imagePath, price, category }: IProductDTO) {

        if (!name) throw new Error('Name is required');

        if (price <= 0) throw new Error('Price should be greater than zero');

        const createProduct = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price),
            category
        });

        return createProduct;

    }
}

export { CreateProductService };
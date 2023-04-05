import { Product } from "../../models/Product";

class ListProductsService {
    async handle() {
        const product = await Product.find({}, null, {sort: {name: 1}});

        return product;
    }
}

export { ListProductsService };
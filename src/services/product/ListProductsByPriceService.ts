import { Product } from "../../models/Product";
import { IProductDTO } from "../../DTOs/IProductDTO";

export interface IProductFilterOptions {
    sortBy?: "priceAsc" | "priceDesc";
}

class ListProductsByPriceService {
    async handle(filterOptions: IProductFilterOptions = {}): Promise<IProductDTO[]> {
        const { sortBy } = filterOptions;
    
        let sortQuery = {};
    
        if (sortBy === "priceAsc") {
            sortQuery = { price: 1 };
        } else if (sortBy === "priceDesc") {
            sortQuery = { price: -1 };
        } else {
            sortQuery = { name: 1 };
        }
    
        const products = await Product.find({}, null, { sort: sortQuery });
    
        return products.map((product) => ({
            name: product.get("name"),
            description: product.get("description"),
            imagePath: product.get("imagePath"),
            price: product.get("price"),
            category: product.get("category"),
        }));
    }
}

export { ListProductsByPriceService };

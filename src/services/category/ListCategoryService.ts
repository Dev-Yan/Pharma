import { Category } from "../../models/Category";

class ListCategoriesService {
    async handle() {

        const categories = await Category.find({}, null, {sort: {name: 1}});

        return categories;
    }
}

export { ListCategoriesService };
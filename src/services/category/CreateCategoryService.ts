import { ICategoryDTO } from "../../DTOs/ICategoryDTO";
import { Category } from "../../models/Category";

class CreateCategoryService {
    async handle({ icon, name }: ICategoryDTO) {

        if (!name) throw new Error('Incorrect name');

        const createCategory = await Category.create({ icon, name });

        return createCategory;
    }
}

export { CreateCategoryService };
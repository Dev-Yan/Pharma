import { CreateCategoryService } from "../../services/category/CreateCategoryService";
import { Category } from '../../models/Category';


describe('CreateCategoryService', () => {
    let createCategoryService: CreateCategoryService;

    beforeEach(() => {
        createCategoryService = new CreateCategoryService();
    });

    it('should be able to create a new category', async () => {
        const categoryData = {
            name: 'test category',
            icon: 'test icon',
        };

        const createdCategory = await createCategoryService.handle(categoryData);

        expect(createdCategory).toMatchObject(categoryData);

        const retrievedCategory = await Category.findById(createdCategory._id);

        expect(retrievedCategory).toMatchObject(categoryData);
    });

    it('should throw an error if name is not provided', async () => {
        const categoryData = {
            name: 'test category',
            icon: 'test icon'
        };

        await expect(createCategoryService.handle(categoryData)).rejects.toThrow('Incorrect name');
    });
});

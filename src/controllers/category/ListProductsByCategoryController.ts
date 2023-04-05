import { Request, Response } from "express";
import { ListProductsByCategoryService } from "../../services/category/ListProductsByCategoryService";

class ListProductsByCategoryController {
    async execute(req: Request, res: Response) {
        const { categoryId } = req.params;

        const service = new ListProductsByCategoryService();

        const listProductByCategory = await service.handle(categoryId);

        return res.json(listProductByCategory);
    }
}

export { ListProductsByCategoryController }
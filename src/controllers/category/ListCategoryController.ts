import { Request, Response } from "express";
import { ListCategoriesService } from "../../services/category/ListCategoryService";

class ListCategoriesController {
    async execute(req: Request, res: Response) {
        try {
            const service = new ListCategoriesService();

            const list = await service.handle();

            return res.json(list);
        } catch (error){
            res.sendStatus(500);
        }
    }
}

export { ListCategoriesController };
import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async execute(req: Request, res: Response) {
        try {
            const { icon, name } = req.body;

            const service = new CreateCategoryService();

            const createCategory = await service.handle({ icon, name });

            return res.json(createCategory);

        } catch {
            res.sendStatus(500);
        }
    }
}

export { CreateCategoryController };
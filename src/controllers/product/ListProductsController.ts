import { Request, Response } from "express";
import { ListProductsService } from "../../services/product/ListProductsService";

class ListProductsController {
    async execute(req: Request, res: Response) {
        try {

            const service = new ListProductsService();

            const list = await service.handle();

            return res.json(list);

        } catch (error) {
            res.sendStatus(500);
        }
    }
}

export { ListProductsController };
import { Request, Response } from "express";
import { FindProductByNameService } from "../../services/product/FindProductByNameService";

class FindProductByNameController {
    async execute(req: Request, res: Response) {
        try {
            const { name } = req.params;

            const service = new FindProductByNameService();

            const product = await service.handle(name);

            return res.json(product);

        } catch {
            res.sendStatus(500);
        }

    }
}

export { FindProductByNameController };
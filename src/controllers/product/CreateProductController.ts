import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async execute(req: Request, res: Response) {
        try {
            const imagePath = req.file?.filename;
            const {name, description, price, category} = req.body;

            const service = new CreateProductService();

            const createProduct = await service.handle({
                name,
                description,
                imagePath,
                price,
                category
            });

            return res.json(createProduct);

        } catch(error) {
            console.log(error)
            res.sendStatus(500);
        }
    }
}

export { CreateProductController };
import { Request, Response } from "express";
import { ListProductsByPriceService } from "../../services/product/ListProductsByPriceService";

class ListProductsByPriceController {
  async execute(req: Request, res: Response) {
    try {
      const sortBy = req.query.sortBy as string | undefined;

      if (sortBy !== "priceAsc" && sortBy !== "priceDesc" && sortBy !== undefined) {
        throw new Error("Invalid sort parameter");
      }

      const service = new ListProductsByPriceService();

      const list = await service.handle({ sortBy });

      return res.json(list);
    } catch (error) {
      res.sendStatus(500);
    }
  }
}

export { ListProductsByPriceController };

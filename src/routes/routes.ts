import { Router } from "express";
import { Category } from "../models/Category";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";

const routes = Router();

routes.get("/", async (req, res) => {
});

routes.post("/", new CreateCategoryController().execute);

export default routes;

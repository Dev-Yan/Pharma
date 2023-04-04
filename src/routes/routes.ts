import { Router } from "express";
import { Category } from "../models/Category";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoriesController } from "../controllers/category/ListCategoryController";

const routes = Router();

routes.get("/category", new ListCategoriesController().execute);
routes.post("/category", new CreateCategoryController().execute);

export default routes;

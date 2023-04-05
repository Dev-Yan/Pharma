import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoriesController } from "../controllers/category/ListCategoryController";

const routes = Router();

routes.get("/category", new ListCategoriesController().execute);

export default routes;

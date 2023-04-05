import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoriesController } from "../controllers/category/ListCategoryController";
import { ListProductsByCategoryController } from "../controllers/category/ListProductsByCategoryController";

const routes = Router();

routes.post("/category", new CreateCategoryController().execute);
routes.get("/categories", new ListCategoriesController().execute);
routes.get('/categories/:categoryId/products', new ListProductsByCategoryController().execute);


export default routes;

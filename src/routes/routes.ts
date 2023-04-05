import { Router } from "express";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoriesController } from "../controllers/category/ListCategoryController";
import { ListProductsByCategoryController } from "../controllers/category/ListProductsByCategoryController";
import { CreateProductController } from "../controllers/product/CreateProductController";
import { ListProductsController } from "../controllers/product/ListProductsController";
import { ListProductsByPriceController } from "../controllers/product/ListProductsByPriceController";
import { FindProductByNameController } from "../controllers/product/FindProductByNameController";

const routes = Router();

routes.post("/category", new CreateCategoryController().execute);
routes.get("/categories", new ListCategoriesController().execute);
routes.get('/categories/:categoryId/products', new ListProductsByCategoryController().execute);

routes.post('/product', new CreateProductController().execute);
routes.get('/products', new ListProductsController().execute);
routes.get('/products/by-price', new ListProductsByPriceController().execute);
routes.get('/product/:name', new FindProductByNameController().execute);

export default routes;

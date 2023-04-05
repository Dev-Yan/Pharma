import { CreateProductService } from "../../services/product/CreateProductService";
import { Product } from "../../models/Product";

describe('CreateProductService', () => {
  let createProductService: CreateProductService;

  beforeEach(() => {
    createProductService = new CreateProductService();
  });

  it('should be able to create a new product', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 9.99,
      category: 'test-category'
    };

    const createdProduct = await createProductService.handle(productData);

    expect(createdProduct).toMatchObject(productData);

    const retrievedProduct = await Product.findById(createdProduct._id);

    expect(retrievedProduct).toMatchObject(productData);
  });

  it('should throw an error if name is not provided', async () => {
    const productData = {
      name: 'teste',
      description: 'This is a test product',
      price: 9.99,
      category: 'test-category'
    };

    await expect(createProductService.handle(productData)).rejects.toThrow('Name is required');
  });

  it('should throw an error if price is less than or equal to zero', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 0,
      category: 'test-category'
    };

    await expect(createProductService.handle(productData)).rejects.toThrow('Price should be greater than zero');
  });
});

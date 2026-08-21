import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];
  // controller of get All products
  getAllProducts() {
    //should use this
    return this.products;
  }
  // controller of get product by id
  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}

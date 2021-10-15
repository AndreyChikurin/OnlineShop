import { NewProduct } from './models/Product';
import { API_CATEGORIES, API_PRODUCTS, SERVER } from './utils/consts';

export class Service {
  async getProducts() {
    try {
      const response = await fetch(API_PRODUCTS);
      const productData = await response.json();
      return productData;
    } catch (error) {
      throw Error('Failed to fetch products');
    }
  }

  async getProduct(id: string) {
    try {
      const response = await fetch(API_PRODUCTS + '/' + id);
      const productData = await response.json();
      return productData;
    } catch (error) {
      throw Error('Failed to fetch 1 product');
    }
  }

  async getCategories() {
    try {
      const ans = await fetch(API_CATEGORIES);
      const categoryData = await ans.json();
      return categoryData;
    } catch (error) {
      throw Error('Failed to fetch categories');
    }
  }

  async saveProduct(product: NewProduct) {
    try {
      const reqOptions = {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log(reqOptions.body)
      const response = await fetch(SERVER + API_PRODUCTS, reqOptions);
      const result = await response.json();
      return result.id;
    } catch (error) {
      throw Error('Failed to save the product');
    }
  }

  async deleteProduct(id: string) {
    try {
      const reqOptions = {
        method: 'DELETE',
      };
      const response = await fetch(SERVER + API_PRODUCTS + '/' + id, reqOptions);
      return response;
    } catch (error) {
      throw Error('Failed to delete the product');
    }
  }

  async putProduct(product: NewProduct) {
    try {
      const reqOptions = {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(SERVER + API_PRODUCTS, reqOptions);
      const result = await response.json();
      return result;
    } catch (error) {
      throw Error('Failed to put the product');
    }
  }
}

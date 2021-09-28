export class Service {
  async getProducts() {
    try {
      const response = await fetch('api/Products');
      const productData = await response.json();
      return productData;
    } catch (error) {
      throw Error('Failed to fetch products');
    }
  }
  
  async getCategiories() {
    try {
      const ans = await fetch('api/Categories');
      const categoryData = await ans.json();
      return categoryData;
    } catch (error) {
      throw Error('Failed to fetch categories');
    }
  }
}

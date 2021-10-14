export class Service {
  async getProducts() {
    try {
      const response = await fetch('/api/Products');
      const productData = await response.json();
      return productData;
    } catch (error) {
      throw Error('Failed to fetch products');
    }
  }

  async getProduct(id: string) {
    try {
      const response = await fetch('/api/Products/' + id);
      const productData = await response.json();
      return productData;
    } catch (error) {
      throw Error('Failed to fetch 1 product');
    }
  }
  
  async getCategories() {
    try {
      const ans = await fetch('/api/Categories');
      const categoryData = await ans.json();
      return categoryData;
    } catch (error) {
      throw Error('Failed to fetch categories');
    }
  }
}

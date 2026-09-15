export const productsApi = {
  getProducts: async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
  },
  getProductById: async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
  },
};

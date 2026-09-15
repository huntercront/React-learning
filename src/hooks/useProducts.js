import { useState, useEffect } from "react";
import { productsApi } from "../api/products";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await productsApi.getProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const uniqueCategories = [...new Set(products.map((item) => item.category))];
  console.log(uniqueCategories);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return {
    products,
    isLoading,
    selectedProduct,
    uniqueCategories,
    handleProductClick,
    handleCloseModal,
  };
}
export default useProducts;

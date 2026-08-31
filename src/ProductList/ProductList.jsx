import { useState, useEffect } from "react";
import Product from "../Product/Product";
import Preloader from "../Components/Preloader/Preloader";
import ProductModal from "../ProductModal/ProductModal";
import "./style.scss";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Ошибка загрузки:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const onProcductClick = (product) => {
    console.log(product);
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}

      <ul className="no-list products products-grid">
        {isLoading && <Preloader />}
        {products.map((product) => (
          <li className="product-wrap" key={product.id}>
            <Product productData={product} onProcductClick={onProcductClick} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductList;

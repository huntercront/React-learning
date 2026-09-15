import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";
import Preloader from "../../../Components/Preloader/Preloader";
import ProductModal from "../ProductModal/ProductModal";
import EmptyContent from "../../../Components/EmptyContent/EmptyContent";
import { AnimatePresence } from "motion/react";
import "./ProductList.scss";
function ProductList() {
  const {
    products,
    isLoading,
    selectedProduct,
    handleProductClick,
    handleCloseModal,
  } = useProducts();

  if (isLoading) {
    return <Preloader />;
  }

  if ((!isLoading && !products) || products.length === 0) {
    return (
      <EmptyContent
        emptyTitle="Товаров не найдено"
        emptyDescr="Попробуйте обновить страницу или вернуться на главную страницу"
        buttonLabel="На главную"
        onAction={handleCloseModal}
      />
    );
  }

  return (
    <>
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            key={selectedProduct.id}
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
      <ul className="no-list products products-grid">
        {products.map((product) => (
          <li className="product-wrap" key={product.id}>
            <Product
              productData={product}
              onProcductClick={handleProductClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductList;

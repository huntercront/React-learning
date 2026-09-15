import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import ProductList from "./ProductsPage/ProductList/ProductList";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<ProductList />} />
    </Routes>
  );
}
export default AppRoutes;

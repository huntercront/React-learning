import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Contexts/Theme/ThemeProvider";
import ProductList from "./Pages/ProductsPage/ProductList/ProductList";
import Home from "./Pages/HomePage/Home";
import Header from "./Components/navigation/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <main className={`main`}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<ProductList />} />
            </Routes>
          </div>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;

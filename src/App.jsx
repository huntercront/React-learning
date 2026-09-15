import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Pages/AppRoutes";
import { ThemeProvider } from "./Contexts/Theme/ThemeProvider";
import Header from "./Components/navigation/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <main className="main">
          <div className="container">
            <AppRoutes />
          </div>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;

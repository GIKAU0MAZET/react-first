import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./routes/Main";
import ProductPage from "./components/ProductPage/Product";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

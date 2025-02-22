import "./App.css";
import Header from "./components/Header";
import AddProduct from "./pages/AddProduct";
import ProductListPage from "./pages/ProductListPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

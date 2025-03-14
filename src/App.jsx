import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./slices/ProductSlices";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
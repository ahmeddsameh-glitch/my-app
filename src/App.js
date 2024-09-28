import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import BasicExample from "./navbar";
import ProductsList from "./products";
function App() {
  return (
    <>
      <BasicExample />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

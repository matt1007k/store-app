import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage, ProductPage } from "../pages";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default Routers;

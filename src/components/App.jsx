import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import "./App.css";
import Layout from "./Layout/Layout";
import Catalog from "../pages/Catalog/Catalog";
import CatalogDetails from "../pages/CatalogDetails/CatalogDetails";
import Features from "../components/Features/Features";
import Reviews from "../components/Reviews/Reviews";
import NotFound from "../pages/NotFound/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogDetails />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

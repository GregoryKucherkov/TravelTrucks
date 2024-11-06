import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import { lazy } from "react";

// import Selected from "./Selected/Selected";

const Home = lazy(() => import("../pages/Home/Home"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
const CatalogDetails = lazy(() =>
  import("../pages/CatalogDetails/CatalogDetails")
);
const Features = lazy(() => import("../components/Features/Features"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="favorites" element={<Catalog />} />
        </Route>
        <Route path="/catalog/:id" element={<CatalogDetails />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";

import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import Loader from "./Loader/Loader";
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
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path="favorites" element={<Catalog />} />
          </Route>
          <Route path="/catalog/:id" element={<CatalogDetails />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
}

export default App;

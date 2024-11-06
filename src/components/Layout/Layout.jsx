import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet /> {/* Wrap Outlet in Suspense for lazy-loaded components */}
        </Suspense>
        <Toaster />
      </main>
    </div>
  );
};

export default Layout;

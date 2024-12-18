import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Breadcrumbs from "./Breadcrumbs";
import Tags from "./Tags";
import ProductGrid from "./ProductGrid";
import "./App.css";

const App = () => {
  return (
    <div className="page-wrapper">
      <Breadcrumbs />
      <Tags />
      <div className="page-container">
        <Sidebar />
        <ProductGrid />
      </div>
    </div>
  );
};

export default App;

import React, { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Categories = lazy(() => import("../pages/Categories/Categories"));
const AllProducts = lazy(() => import("../pages/AllProducts/AllProducts"));
const AllSales = lazy(() => import("../pages/AllSales/AllSales"));

export const routes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/categories", element: <Categories /> },
  { id: 3, path: "/all-products", element: <AllProducts /> },
  { id: 4, path: "/all-sales", element: <AllSales /> },
  { id: 5, path: "*", element: "404" }
];
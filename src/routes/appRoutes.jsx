import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const AllCategories = lazy(() => import("../pages/AllCategories/AllCategories"));
const AllProducts = lazy(() => import("../pages/AllProducts/AllProducts"));
const AllSales = lazy(() => import("../pages/AllSales/AllSales"));
const CategoryPage = lazy(() => import("../pages/AllCategories/CategoryPage/CategoryPage"));


export const appRoutes = [
  { id: 1, path: "/", element: <Home /> },
  { id: 2, path: "/categories", element: <AllCategories /> },
  { id: 3, path: "/categories/:categoryId", element: <CategoryPage /> },
  { id: 4, path: "/all-products", element: <AllProducts /> },
  { id: 5, path: "/all-sales", element: <AllSales /> },
  { id: 6, path: "*", element: "404" }
];
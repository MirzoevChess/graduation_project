import { lazy } from "react";
import { Navigate } from "react-router-dom";

const NotFound = lazy(() => import("../pages/404/404"));
const Home = lazy(() => import("../pages/Home/Home"));
const AllCategories = lazy(() =>
  import("../pages/AllCategories/AllCategories")
);
const AllProducts = lazy(() => import("../pages/AllProducts/AllProducts"));
const AllSales = lazy(() => import("../pages/AllSales/AllSales"));
const CategoryPage = lazy(() =>
  import("../pages/AllCategories/CategoryPage/CategoryPage")
);
const ProductPage = lazy(() =>
  import("../pages/AllProducts/ProductPage/ProductPage")
);
const FavoritesPage = lazy(() => import("../pages/Favorites/Favorites"));

export const appRoutes = [
  { id: 1, path: "/", element: <Home />, showBreadcrumbs: true },
  {
    id: 2,
    path: "/categories",
    element: <AllCategories />,
    showBreadcrumbs: true,
  },
  {
    id: 3,
    path: "/categories/:categoryId",
    element: <CategoryPage />,
    showBreadcrumbs: true,
  },
  {
    id: 4,
    path: "/all-products",
    element: <AllProducts />,
    showBreadcrumbs: true,
  },
  {
    id: 5,
    path: "/all-products/:productId",
    element: <ProductPage />,
    showBreadcrumbs: true,
  },
  { id: 6, path: "/all-sales", element: <AllSales />, showBreadcrumbs: true },
  {
    id: 7,
    path: "/favorites",
    element: <FavoritesPage />,
    showBreadcrumbs: true,
  },
  {
    id: 8,
    path: "*",
    element: <Navigate to="/404" replace />,
  },
  {
    id: 9,
    path: "/404",
    element: <NotFound />,
  },
];

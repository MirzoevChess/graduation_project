import { Suspense } from "react";
import { Routes } from "react-router-dom";
import { appRoutes } from "./routes/appRoutes";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import { renderRoutes } from "./routes/renderRoutes";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Suspense fallback={<div>Skeleton...</div>}>
        <Routes>{renderRoutes(appRoutes)}</Routes>
      </Suspense>
    </>
  );
}

export default App;

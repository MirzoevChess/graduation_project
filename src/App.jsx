import { Suspense } from "react";
import { Routes } from "react-router-dom";
import { appRoutes } from "./routes/appRoutes";
import { renderRoutes } from "./routes/renderRoutes";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Suspense fallback={<div>Skeleton...</div>}>
        <Routes>{renderRoutes(appRoutes)}</Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

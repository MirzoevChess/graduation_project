import { Suspense } from "react";
import { Routes, Route  } from "react-router-dom";
import { routes } from "./routes/appRoutes";
import Header from "./components/Header/Header";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

function App() {

  return (
    <>
      <Header />
      <Breadcrumbs />
      <Suspense fallback={<div>Skeleton...</div>}>
        <Routes>
          <Route>
            {routes.map(({ path, element, id }) => (
              <Route key={id} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

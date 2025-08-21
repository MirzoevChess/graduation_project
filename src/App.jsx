import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/appRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
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

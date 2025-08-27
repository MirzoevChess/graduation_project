import { Route } from "react-router-dom";

export const renderRoutes = (routesArray) =>
  routesArray.map(({ id, path, element, children }) => (
    <Route key={id} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/ui/header";
import MainLoyout from "./layouts/mainLayout";
import ServicesLayout from "./layouts/servicesLayout";
import ShowcasesProvider from "./hooks/useShowcases";
import ProductsProvider from "./hooks/useProducts";
import CategoriesProvider from "./hooks/useCategories";
import ProtectedRoute from "./components/common/protectedRoute";

function App() {
  return (
    <div className="container">
      <Header />
      <ShowcasesProvider>
        <ProductsProvider>
          <CategoriesProvider>
            <Switch>
              <Route
                path="/login/:type(register|login)?"
                component={ServicesLayout}
              />
              <ProtectedRoute path="/my-showcases" component={ServicesLayout} />
              <ProtectedRoute
                path="/showcase-settings/:id?"
                component={ServicesLayout}
              />
              <Route
                path="/statistics-and-analytics"
                component={ServicesLayout}
              />
              <Route
                path="/:target(showcases|products)/:id?"
                component={MainLoyout}
              />
              <Redirect to="/showcases" />
            </Switch>
          </CategoriesProvider>
        </ProductsProvider>
      </ShowcasesProvider>
    </div>
  );
}

export default App;

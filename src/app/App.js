import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/ui/header";
import routes from "./routes";
import AppProvider from "./hooks/useApp";
import AppLoader from "./components/ui/hoc/appLoader";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "./store/user";

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const elements = useRoutes(routes(isLoggedIn));

  return (
    <div id="app" className="container d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <AppLoader>
          <AppProvider>{elements}</AppProvider>
        </AppLoader>
      </main>
      <footer>!</footer>
    </div>
  );
}

export default App;

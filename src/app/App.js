import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import MainLoyout from "./components/layouts/mainLoyout";
import MyShowcases from "./components/main/myShowcases";
import StatisticsAndAnalytics from "./components/main/statisticsAndAnalytics";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={MainLoyout} />
        <Route path="/goods-and-services" component={MainLoyout} />
        <Route path="/my-showcases" component={MyShowcases} />
        <Route
          path="/statistics-and-analytics"
          component={StatisticsAndAnalytics}
        />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { useLocation } from "react-router-dom";
import MyShowcasesPage from "../components/page/myShowcasesPage";
import StatisticsAndAnalyticsPage from "../components/page/statisticsAndAnalyticsPage";
import LoginPage from "../components/page/loginPage";
import ShowcaseSettingsPage from "../components/page/showcaseSettingsPage/showcaseSettingsPage";

const ServicesLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/login" && <LoginPage />}
      {pathname === "/my-showcases" && <MyShowcasesPage />}
      {pathname === "/statistics-and-analytics" && (
        <StatisticsAndAnalyticsPage />
      )}
      {pathname === "/showcase-settings" && <ShowcaseSettingsPage />}
    </>
  );
};

export default ServicesLayout;

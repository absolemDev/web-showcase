import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import MainPage from "./components/page/mainPage/mainPage";
import Showcase from "./components/ui/showcase";
import Product from "./components/ui/product";
import ServicesLayout from "./layouts/servicesLayout";
import LoginPage from "./components/page/loginPage";
import StatisticsAndAnalyticsPage from "./components/page/statisticsAndAnalyticsPage";
import UserShowcasesLayout from "./layouts/userShowcasesLayout";
import MyShowcasesPage from "./components/page/myShowcasesPage/myShowcasesPage";
import ProtectShowcaseSettings from "./components/page/showcaseSettingsPage/protectShowcaseSettings";
import ShowcaseSettingsPage from "./components/page/showcaseSettingsPage/showcaseSettingsPage";

const routes = (isLoggedIn) => [
  {
    path: "",
    element: <Navigate to="/showcases" />
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "showcases",
        children: [
          { path: "", element: <MainPage /> },
          { path: ":id", element: <Showcase /> }
        ]
      },
      {
        path: "products",
        children: [
          { path: "", element: <MainPage /> },
          { path: ":id", element: <Product /> }
        ]
      }
    ]
  },
  {
    path: "my-showcases",
    element: isLoggedIn ? (
      <UserShowcasesLayout />
    ) : (
      <Navigate to="/showcases" />
    ),
    children: [
      {
        path: "",
        element: <MyShowcasesPage />
      },
      {
        path: "create",
        element: <ShowcaseSettingsPage />
      },
      {
        path: ":id",
        element: <ProtectShowcaseSettings />
      }
    ]
  },
  {
    element: <ServicesLayout />,
    children: [
      {
        path: "authorization/:type?",
        element: isLoggedIn ? <Navigate to="/showcases" /> : <LoginPage />
      },
      {
        path: "statistics-and-analytics",
        element: <StatisticsAndAnalyticsPage />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/showcases" />
  }
];

export default routes;

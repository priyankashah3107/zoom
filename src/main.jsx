import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Rightbar from "./components/ui/Rightbar.jsx";
import Layout from "./components/ui/Layout.jsx";
import Webinars from "./components/ui/Webinars.jsx";
import Upcoming from "./components/ui/Upcoming.jsx";
import Live from "./components/ui/Live.jsx";
import Previous from "./components/ui/Previous.jsx";
import Billing from "./components/ui/Billing.jsx";
import UserManagement from "./components/ui/UserManagement.jsx";
import SettingsPage from "./components/ui/SettingsPage.jsx";
import ProfileGrid from "./components/ui/Videos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Rightbar />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "usermanagement",
        element: <UserManagement />,
      },

      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "videos",
        element: <ProfileGrid />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "webinars",
        element: <Webinars />,
      },
      {
        path: "webinars/upcoming",
        element: <Upcoming />,
      },
      {
        path: "webinars/live",
        element: <Live />,
      },
      {
        path: "webinars/previous",
        element: <Previous />,
      },
    ],
  },

  // {
  //   path: "/videos",
  //   element: <ProfileGrid />,
  // },

  // {
  //   path: "/webinars",
  //   element: <Webinars />,
  //   children: [
  //     {
  //       path: "/webinars/upcoming",
  //       element: <Upcoming />,
  //     },
  //     {
  //       path: "/webinars/live",
  //       element: <Live />,
  //     },
  //     {
  //       path: "/webinars/previous",
  //       element: <Previous />,
  //     },
  //   ],
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);

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

import PaymentHistory from "./components/ui/PaymentHistory.jsx";
import BillingManagement from "./components/ui/BillingManagement.jsx";
import PlanManagement from "./components/ui/PlanManagement.jsx";
import SigninPage from "./components/ui/signlogin/SigninPage.jsx";
import LoginPage from "./components/ui/signlogin/LoginPage.jsx";
import MyProfile from "./components/ui/MyProfile.jsx";
import LeaveWebinarPage from "./components/ui/LeaveWebinar.jsx";
import MicCamera from "./components/ui/MicCamera.jsx";

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
        path: "plan/management",
        element: <PlanManagement />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "billing/history",
        element: <PaymentHistory />,
      },
      {
        path: "billing/management",
        element: <BillingManagement />,
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
      {
        path: "/myprofile",
        element: <MyProfile />,
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

  {
    path: "/signin",
    element: <SigninPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/leave",
    element: <LeaveWebinarPage />,
  },

  {
    path: "/camic",
    element: <MicCamera />,
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

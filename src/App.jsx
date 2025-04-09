import { createBrowserRouter, RouterProvider, useLocation } from "react-router";
import Demo1 from "./Demo1";
import Login from "./features/authenticate/Login";
import Landing from "./features/landing/Landing";
import Main, { loader as VListLoader } from "./features/browse/Main";
import ProfilePage from "./features/profile/ProfilePage";
import MainAppContent from "./ui/MainAppContent";
import VruddhaDetails from "./features/browse/VruddhaDetails";
import Reservations from "./features/profile/Reservations";
import EditProfile from "./features/profile/EditProfile";
import Dashboard from "./features/profile/Dashboard";
import Messages from "./features/profile/Messages";
import Notifications from "./features/profile/Notifications";
import Activity from "./features/profile/Activity";
import Feedback from "./features/profile/Feedback";
import Support from "./features/profile/Support";
import Employers from "./features/landing/Employers";
import Features from "./features/landing/Features";
import Resources from "./features/landing/Resources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo1 />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "employers",
        element: <Employers />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "vm",
        element: <MainAppContent />,
        children: [
          {
            index: true,
            path: "app",
            element: <Main />,
            loader: VListLoader,
          },
          {
            path: "profile",
            element: <ProfilePage />,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
              {
                path: "reservations",
                element: <Reservations />,
              },
              {
                path: "editprofile",
                element: <EditProfile />,
              },
              {
                path: "messages",
                element: <Messages />,
              },
              {
                path: "notifications",
                element: <Notifications />,
              },
              {
                path: "activity",
                element: <Activity />,
              },
              {
                path: "feedback",
                element: <Feedback />,
              },
              {
                path: "support",
                element: <Support />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

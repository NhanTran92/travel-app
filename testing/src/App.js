import logo from "./logo.svg";
import "./App.css";
import Features from "./Pages/Features/Features.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Features/Home/Home";
import Inbox from "./Pages/Features/Inbox/Inbox";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Group from "./Pages/Features/Group/Group";
import NewPassword from "./Pages/newPassword/NewPassord";

const router = createBrowserRouter([
  {
    path: "",
    element: <Features></Features>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "inbox",
        element: <Inbox></Inbox>,
      },
      {
        path: "group",
        element: <Group></Group>,
      },
    ],
  },
  // {
  //   path: "login",
  //   element: <Login></Login>,
  // },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "newpassword",
    element: <NewPassword></NewPassword>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

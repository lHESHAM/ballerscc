import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import './App.css';
import './index.css';
import './i18n';
import reportWebVitals from './reportWebVitals';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './pages/errorpage';
import Home from './pages/home'
import Team from './pages/team'
import About from './pages/about'
import JoinUs from './pages/JoinUs'
import Amro from './personal/Amro/amro';
import Ahmad from './personal/Ahmad/ahmad';
import Hussien from './personal/Hussien/hussien'
import Laith from './personal/Laith/LaithS'
import Rania from './personal/Rania/RaniaS'
import './App.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/Amro",
    element: <Amro />,
  },
  {
    path: "/Ahmad",
    element: <Ahmad />,
  },
  {
    path: "/Hussien",
    element: <Hussien />,
  },
  {
    path: "/Laith",
    element: <Laith />,
  },
  {
    path: "/Rania",
    element: <Rania />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/join",
    element: <JoinUs />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
reportWebVitals();

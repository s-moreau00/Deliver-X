import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ClickCollect from "./components/Click'n'collect/ClickCollect";
import Livraison from "./components/Livraison/Livraison";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "clickncollect",
    element: <ClickCollect />,
  },
  {
    path: "livraison",
    element: <Livraison />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <RouterProvider router={router} />
);

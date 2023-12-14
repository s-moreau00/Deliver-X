import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cities from "./components/Cities/Cities";
import ClickOrDeliver from "./components/ClickOrDeliver/ClickOrDeliver";
import Livraison from "./components/Livraison/Livraison";
import App from "./App";
import Layout from "./components/layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cities",
    element: <Cities />,
  },

  {
    path: "clickordeliver",
    element: <ClickOrDeliver />,
  },

  {
    path: "livraison",
    element: <Livraison />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Layout>
    <RouterProvider router={router} />
  </Layout>
);



import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Errorpage from "./components/Errorpage";
import Layout from "./components/Layout";
import "./index.css";
import EditarCLiente, {
  loader as editarCLienteLoader,
  action as editarCLienteAction,
} from "./pages/EditarCLiente";
import Index, { loader as clientesLoader } from "./pages/Index";
import NuevoCliente, {
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <Errorpage />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
      },
      {
        //hace un path para editar clientes
        path: "/clientes/:clienteId/editar",
        element: <EditarCLiente />,
        loader: editarCLienteLoader,
        action: editarCLienteAction,
        errorElement: <Errorpage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

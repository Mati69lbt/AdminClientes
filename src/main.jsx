import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as eliminarCliente } from "./components/Cliente";
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

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "./firebaseConfig";
import db from "./db.json";
import app from "./firebaseConfig";

// const appy = initializeApp(firebaseConfig);
const database = getDatabase(app);

db.clientes.forEach((cliente) => {
  set(ref(database, `clientes/${cliente.id}`), cliente);
});

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
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarCliente,
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

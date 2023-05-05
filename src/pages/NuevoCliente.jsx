import { Form, useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

export async function action({ request }) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);
  console.log(datos);

  return null;
}

const NuevoCliente = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3 ">
        Llena Todos los Campos para Registrar un Nuevo Cliente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-5">
        <Form method="POST">
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;

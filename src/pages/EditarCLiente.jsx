import { actualizarCliente, obtenerCliente } from "../data/clientes";
import {
  Form,
  useNavigate,
  useLoaderData,
  redirect,
  useActionData,
} from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Ese Cliente No Existe!",
    });
  }
  return cliente;
}

export async function action({ request, params }) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  const email = formData.get("email");

  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los Datos son Obligatorios");
  }

  // let regex = new RegExp(
  //   "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  // );
  let regex = new RegExp("/^w+@[a-zA-Z_]+?.[a-zA-Z] {2,3}$/");
  if (!regex.test(email)) {
    errores.push("Email Invalido");
  }

  if (Object.keys(errores).length) {
    return errores;
  }
  await actualizarCliente(params.clienteId, datos);

  return redirect("/");
}

const EditarCLiente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Seccion Editar </h1>
      <p className="mt-3 ">Aqui puedes Editar a un Cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-5">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST">
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Actualizar"
          />
        </Form>
      </div>
    </>
  );
};

export default EditarCLiente;

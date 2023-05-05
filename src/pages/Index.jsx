import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function loader() {
  const clientes = [
    {
      id: 1,
      nombre: "Juan",
      telefono: 3436030758,
      email: "juan@gmail.com",
      empresa: "Bichito de Looz",
    },
    {
      id: 2,
      nombre: "Karen",
      telefono: 3472502174,
      email: "karen@Yahoo.com",
      empresa: "Inpoolcor",
    },
    {
      id: 3,
      nombre: "Josue",
      telefono: 3472426911,
      email: "josue@hotmail.com",
      empresa: "Contigiani SRL",
    },
    {
      id: 4,
      nombre: "Miguel",
      telefono: 3436215488,
      email: "miguel@gmail.com",
      empresa: "La Peruana",
    },
    {
      id: 5,
      nombre: "Pedro",
      telefono: 3472625897,
      email: "pedro@juan.com",
      empresa: "Bertoto Boglione",
    },
    {
      id: 6,
      nombre: "Matias",
      telefono: 3472554185,
      email: "mati69_lbt@hotmail.com",
      empresa: "LBT",
    },
    {
      id: 5,
      nombre: "Carolina",
      telefono: 3436115022,
      email: "langhicarolina@hotmail.com",
      empresa: "Integral Software",
    },
  ];
  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3 ">Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay Clientes aún</p>
      )}
    </>
  );
};

export default Index;

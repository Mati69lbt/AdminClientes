import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();
  console.log(error.message);
  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
        CRM - CLIENTES
      </h1>
      <p>Hubo un error</p>
      <p>{error.message}</p>
    </div>
  );
};

export default Errorpage;

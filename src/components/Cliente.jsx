const Cliente = ({ cliente }) => {
  //extrae todo de cliente
  const { nombre, empresa, email, telefono, id } = cliente;
  return (
    <tr>
      <td className="p-2">{nombre}</td>
      <td className="p-2">{telefono}</td>
      <td className="p-2">{nombre}</td>
    </tr>
  );
};

export default Cliente;

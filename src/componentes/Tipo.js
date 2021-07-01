import { FaPen, FaTimes } from "react-icons/fa";

export const Tipo = (props) => {
  const {
    tipo: { id, tipo },
    onClickEditar,
    borrarTipo,
  } = props;
  return (
    <li>
      {tipo} <FaPen onClick={() => onClickEditar(id)} />
      <FaTimes onClick={() => borrarTipo(id)} />
    </li>
  );
};

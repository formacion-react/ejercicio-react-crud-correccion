import { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import { FaPen, FaTimes } from "react-icons/fa";
import { TiposContext } from "../contexts/TiposContext";
import { Tipo } from "./Tipo";

export const Listado = (props) => {
  const { formularioAbierto, setIdEditando, abrirFormulario } = props;
  const { tipos, borrarTipo } = useContext(TiposContext);
  const onClickEditar = (id) => {
    abrirFormulario();
    setIdEditando(id);
  };
  const onClickCrear = (id) => {
    abrirFormulario();
    setIdEditando(null);
  };
  return (
    <>
      <Col xs="12">
        {formularioAbierto || (
          <Button variant="warning" onClick={onClickCrear}>
            Nuevo tipo de gato
          </Button>
        )}
      </Col>
      <Col xs="12" as="ul" className="listado list-unstyled">
        {tipos.map((tipo) => (
          <Tipo key={tipo.id} tipo={tipo} />
        ))}
      </Col>
    </>
  );
};

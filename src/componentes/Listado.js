import { Button, Col } from "react-bootstrap";
import { FaPen, FaTimes } from "react-icons/fa";

export const Listado = () => {
  return (
    <>
      <Col xs="12">
        <Button variant="warning">Nuevo tipo de gato</Button>
      </Col>
      <Col xs="12" as="ul" className="listado list-unstyled">
        <li>
          Tipo 1 <FaPen />
          <FaTimes />
        </li>
        <li>
          Tipo 2 <FaPen />
          <FaTimes />
        </li>
        <li>
          Tipo 3 <FaPen />
          <FaTimes />
        </li>
      </Col>
    </>
  );
};

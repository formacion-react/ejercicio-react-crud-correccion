import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { TiposContext } from "../contexts/TiposContext";

export const Formulario = (props) => {
  const { idEditando, cerrarFormulario } = props;
  const { crearTipo, modificarTipo, getTipo } = useContext(TiposContext);
  const [tipo, setTipo] = useState("");
  const estaEditando = !!idEditando;
  useEffect(() => {
    if (estaEditando) {
      getTipo(idEditando).then((tipo) => {
        setTipo(tipo.tipo);
      });
    }
  }, [estaEditando, getTipo, idEditando]);
  const enviarFormulario = (e) => {
    e.preventDefault();
    if (estaEditando) {
      modificarTipo({ id: idEditando, tipo });
    } else {
      crearTipo({ tipo });
    }
    cerrarFormulario();
  };
  return (
    <Col xs="12">
      <Form noValidate autoComplete="off" onSubmit={enviarFormulario}>
        <Form.Group controlId="nombre">
          <Form.Label>Tipo de gato:</Form.Label>
          <Form.Control
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="info">
          {estaEditando ? "Modificar" : "Crear"}
        </Button>
        <Button type="button" variant="warning" onClick={cerrarFormulario}>
          Cancelar
        </Button>
      </Form>
    </Col>
  );
};

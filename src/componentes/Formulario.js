import { Col, Form, Button } from "react-bootstrap";

export const Formulario = () => {
  return (
    <Col xs="12">
      <Form noValidate>
        <Form.Group controlId="nombre">
          <Form.Label>Tipo de gato:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button type="submit" variant="info">
          Crear
        </Button>
        <Button type="button" variant="warning">
          Cancelar
        </Button>
      </Form>
    </Col>
  );
};

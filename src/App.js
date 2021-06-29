import { FaPen, FaTimes } from "react-icons/fa";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Cargando } from "./componentes/Cargando";
import { Formulario } from "./componentes/Formulario";
import { Error } from "./componentes/Error";
import { Listado } from "./componentes/Listado";

function App() {
  return (
    <Container className="contenedor">
      <Row as="header">
        <Col as="h1">Tipos de gatos</Col>
      </Row>
      {/* <Error /> */}
      <Row as="main">
        {/* <Formulario /> */}
        <Listado />
      </Row>
      {/* <Cargando /> */}
    </Container>
  );
}

export default App;

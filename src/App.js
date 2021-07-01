import { FaPen, FaTimes } from "react-icons/fa";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Cargando } from "./componentes/Cargando";
import { Formulario } from "./componentes/Formulario";
import { Error } from "./componentes/Error";
import { Listado } from "./componentes/Listado";
import { useCallback, useState } from "react";
import { TiposContext } from "./contexts/TiposContext";
import { useFetch } from "./hooks/useFetch";
import { useEffect } from "react";
import { TiposContextProvider } from "./contexts/TiposContextProvider";
import { APIContextProvider } from "./contexts/APIContextProvider";

function App() {
  const [formularioAbierto, setFormularioAbierto] = useState(false);
  const [idEditando, setIdEditando] = useState(null);
  const abrirFormulario = () => {
    setFormularioAbierto(true);
  };
  const cerrarFormulario = () => {
    setFormularioAbierto(false);
  };
  return (
    <APIContextProvider>
      <TiposContextProvider>
        <Container className="contenedor">
          <Row as="header">
            <Col as="h1">Tipos de gatos</Col>
          </Row>
          <Error />
          <Row as="main">
            {formularioAbierto && (
              <Formulario
                idEditando={idEditando}
                cerrarFormulario={cerrarFormulario}
              />
            )}
            <Listado
              formularioAbierto={formularioAbierto}
              setIdEditando={setIdEditando}
              abrirFormulario={abrirFormulario}
            />
          </Row>
          <Cargando />
        </Container>
      </TiposContextProvider>
    </APIContextProvider>
  );
}

export default App;

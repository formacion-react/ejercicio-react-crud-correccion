import { useContext } from "react";
import { APIContext } from "../contexts/APIContext";

export const Cargando = () => {
  const { cargando } = useContext(APIContext);
  return (
    <>
      {cargando && (
        <div className="contenedor-spinner">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

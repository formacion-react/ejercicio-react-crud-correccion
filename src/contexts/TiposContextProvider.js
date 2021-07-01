import { useContext } from "react";
import { useCallback, useEffect, useState } from "react";
import { APIContext } from "./APIContext";
import { TiposContext } from "./TiposContext";

export const TiposContextProvider = (props) => {
  const { children } = props;
  const { cargar, getById, crear, modificar, borrar } = useContext(APIContext);
  const [tipos, setTipos] = useState([]);
  const cargarTipos = useCallback(async () => {
    try {
      const datos = await cargar();
      setTipos(datos);
    } catch {}
  }, [cargar]);
  const getTipo = useCallback(
    async (id) => {
      try {
        const tipo = await getById(id);
        return tipo;
      } catch {}
    },
    [getById]
  );
  const borrarTipo = async (id) => {
    try {
      await borrar(id);
      setTipos(tipos.filter((tipo) => tipo.id !== id));
    } catch {}
  };
  const crearTipo = async (tipo) => {
    try {
      const nuevoTipo = await crear(tipo);
      setTipos([...tipos, nuevoTipo]);
    } catch {}
  };
  const modificarTipo = async (tipo) => {
    try {
      const tipoModificado = await modificar(tipo);
      setTipos(
        tipos.map((tipoBuscado) => {
          if (tipoBuscado.id === tipo.id) {
            return tipoModificado;
          } else {
            return tipoBuscado;
          }
        })
      );
    } catch {}
  };
  useEffect(() => {
    cargarTipos();
  }, [cargarTipos]);
  return (
    <TiposContext.Provider
      value={{ tipos, getTipo, crearTipo, modificarTipo, borrarTipo }}
    >
      {children}
    </TiposContext.Provider>
  );
};

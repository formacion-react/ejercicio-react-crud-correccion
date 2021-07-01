import { useCallback, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { APIContext } from "./APIContext";

export const APIContextProvider = (props) => {
  const { children } = props;
  const urlAPI = "http://localhost:3001/tipos/";
  const { cargando, error, superFetch } = useFetch();
  const cargar = useCallback(async () => {
    try {
      const datosAPI = await superFetch(urlAPI);
      return datosAPI;
    } catch (e) {
      throw e;
    }
  }, [superFetch]);
  const getById = useCallback(
    async (id) => {
      try {
        const datosAPI = await superFetch(urlAPI + id);
        return datosAPI;
      } catch (e) {
        throw e;
      }
    },
    [superFetch]
  );
  const borrar = async (id) => {
    try {
      const datosAPI = await superFetch(urlAPI + id, { method: "DELETE" });
      return datosAPI;
    } catch (e) {
      throw e;
    }
  };
  const crear = async (dato) => {
    try {
      const datosAPI = await superFetch(urlAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dato),
      });
      return datosAPI;
    } catch (e) {
      throw e;
    }
  };
  const modificar = async (dato) => {
    try {
      const datosAPI = await superFetch(urlAPI + dato.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dato),
      });
      return datosAPI;
    } catch (e) {
      throw e;
    }
  };
  return (
    <APIContext.Provider
      value={{ cargando, error, cargar, getById, crear, modificar, borrar }}
    >
      {children}
    </APIContext.Provider>
  );
};

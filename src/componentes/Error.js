import { useContext } from "react";
import { APIContext } from "../contexts/APIContext";

export const Error = () => {
  const { error } = useContext(APIContext);
  return <>{error && <p className="error">Algo ha fallado</p>}</>;
};

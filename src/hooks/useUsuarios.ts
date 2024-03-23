import { useContext } from "react"
import { UsuarioContext } from "../context/usuarios/UsuarioContext"

export const useUsuarios = () => {
    const usuariosContext = useContext(UsuarioContext);
    if (usuariosContext === undefined) {
        throw new Error("useUsuarios must be used within a UsuariosContext");
    }
    return usuariosContext;
}
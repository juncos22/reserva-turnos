import { createContext } from "react";
import { UsuarioState } from "../../interfaces/usuario";
import { LoginUserDTO, RegisterUserDTO } from "../../interfaces/dtos/usuario.dto";

export const initialState: UsuarioState = {
    token: localStorage.getItem('token') || undefined,
    cargando: false
}

type UsuariosContextProps = {
    usuarioState: UsuarioState,
    login: (loginUser: LoginUserDTO) => void,
    logout: () => void
    register: (registerUser: RegisterUserDTO) => void
}

export const UsuarioContext = createContext<UsuariosContextProps>({} as UsuariosContextProps);

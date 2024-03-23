import { UsuarioAction, UsuarioActions, UsuarioState } from "../../interfaces/usuario"
import { initialState } from "./UsuarioContext"


export const UsuarioReducer = (state = initialState, action: UsuarioAction): UsuarioState => {
    const { type, payload } = action
    switch (type) {
        case UsuarioActions.REGISTER:
            localStorage.setItem('token', payload!);
            return { ...state, token: payload, cargando: false }
        case UsuarioActions.LOGIN:
            localStorage.setItem('token', payload!);
            return { ...state, token: payload, cargando: false }
        case UsuarioActions.LOGOUT:
            localStorage.removeItem('token')
            return { ...state, token: "", cargando: false }
        case UsuarioActions.CARGANDO:
            return {
                ...state,
                cargando: true
            }
        default:
            return state
    }
}

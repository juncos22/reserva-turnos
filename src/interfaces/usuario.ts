export interface UsuarioState {
    token?: string;
    cargando: boolean;
}

export enum UsuarioActions {
    REGISTER = 'REGISTER',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    CARGANDO = 'CARGANDO'
}

export interface UsuarioAction {
    type: UsuarioActions;
    payload?: string;
}
export interface UsuarioState {
    token?: string;
    cargando: boolean;
    error?: string;
}

export enum UsuarioActions {
    REGISTER = 'REGISTER',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    CARGANDO = 'CARGANDO',
    BAD_REQUEST = 'BAD_REQUEST',
}

export interface UsuarioAction {
    type: UsuarioActions;
    payload?: string;
}
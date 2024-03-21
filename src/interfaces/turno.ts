export interface Turno {
    id?: number;
    title: string;
    description?: string;
    date: string;
}
export interface TurnoState {
    turnos: Turno[]
    turno?: Turno
    cargando: boolean
    status: number
}
export enum TurnoActions {
    TRAER_TURNOS = 'TRAER_TURNOS',
    TRAER_TURNO = 'TRAER_TURNO',
    GUARDAR_TURNO = 'GUARDAR_TURNO',
    ELIMINAR_TURNO = 'ELIMINAR_TURNO',
    ACTUALIZAR_TURNO = 'ACTUALIZAR_TURNO',
    CARGANDO = 'CARGANDO'
}

export interface TurnoAction {
    type: TurnoActions;
    payload?: Turno[] | Turno | number;
}
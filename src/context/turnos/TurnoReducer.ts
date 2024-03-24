import { Turno, TurnoAction, TurnoActions, TurnoState } from "../../interfaces/turno";
import { initialState } from "./TurnoContext";


export default (state = initialState, action: TurnoAction): TurnoState => {
    const { type, payload } = action
    switch (type) {
        case TurnoActions.TRAER_TURNOS:
            return { ...state, cargando: false, turnos: payload as Turno[] }
        case TurnoActions.TRAER_TURNO:
            return { ...state, turno: payload as Turno }
        case TurnoActions.GUARDAR_TURNO:
            return { ...state, mensaje: payload as string }
        case TurnoActions.ELIMINAR_TURNO:
            return { ...state, mensaje: payload as string }
        case TurnoActions.ACTUALIZAR_TURNO:
            return { ...state, mensaje: payload as string }
        case TurnoActions.CARGANDO:
            return {
                ...state,
                cargando: true
            }
        case TurnoActions.BAD_REQUEST:
            return {
                ...state,
                error: payload as string
            }
        default:
            return state
    }
}

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
            return { ...state, status: payload as number }
        case TurnoActions.ELIMINAR_TURNO:
            return { ...state, status: payload as number }
        case TurnoActions.ACTUALIZAR_TURNO:
            return { ...state, status: payload as number }
        case TurnoActions.CARGANDO:
            return {
                ...state,
                cargando: true
            }
        default:
            return state
    }
}

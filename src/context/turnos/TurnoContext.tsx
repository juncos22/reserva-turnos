import { createContext } from "react";
import { TurnoState } from "../../interfaces/turno";
import { CrearTurnoDTO, ActualizarTurnoDTO } from "../../interfaces/dtos/turno.dto";

export const initialState: TurnoState = {
    turnos: [],
    cargando: false,
    status: 0
}

export type TurnoContextProps = {
    turnoState: TurnoState,
    traerTurnos: () => void,
    traerTurno: (id: number) => void,
    guardarTurno: (turno: CrearTurnoDTO) => void,
    eliminarTurno: (id: number) => void,
    actualizarTurno: (id: number, turno: ActualizarTurnoDTO) => void
}

export const TurnosContext = createContext<TurnoContextProps>({} as TurnoContextProps)





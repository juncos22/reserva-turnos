import React, { useReducer } from "react";
import { TurnosContext, initialState } from "./TurnoContext";
import turnoReducer from './TurnoReducer'
import { Turno, TurnoActions } from "../../interfaces/turno";
import { api } from "../../api/axiosConfig";
import { ActualizarTurnoDTO, CrearTurnoDTO } from "../../interfaces/dtos/turno.dto";

type TurnoProviderProps = {
    children: React.JSX.Element | React.JSX.Element[]
}

export default function TurnoProvider({ children }: TurnoProviderProps) {
    const [state, dispatch] = useReducer(turnoReducer, initialState)
    const traerTurnos = async () => {
        try {
            dispatch({ type: TurnoActions.CARGANDO })
            const res = await api.get('/turnos', {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            dispatch({ type: TurnoActions.TRAER_TURNOS, payload: res.data.turnos as Turno[] })
        } catch (error) {
            console.log(error);
            dispatch({ type: TurnoActions.BAD_REQUEST, payload: "No tiene permisos para acceder" })
        }
    }
    const guardarTurno = async (turno: CrearTurnoDTO) => {
        try {
            const res = await api.post('/turnos', turno, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            });
            console.log(res.data);
            dispatch({ type: TurnoActions.GUARDAR_TURNO, payload: "Turno agendado!" })
            await traerTurnos();
        } catch (error) {
            console.log(error);
            dispatch({ type: TurnoActions.BAD_REQUEST, payload: "No se pudo agendar el turno" })
        }
    }

    const traerTurno = async (id: number) => {
        try {
            const res = await api.get(`/turnos/${id}`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            })
            dispatch({ type: TurnoActions.TRAER_TURNO, payload: res.data.turno as Turno })
        } catch (error) {
            console.log(error);
            dispatch({ type: TurnoActions.BAD_REQUEST, payload: "No se pudo encontrar el turno" })
        }
    }
    const eliminarTurno = async (id: number) => {
        try {
            const res = await api.delete(`/turnos/${id}`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            });
            console.log(res.data);
            dispatch({ type: TurnoActions.ELIMINAR_TURNO, payload: "Turno eliminado!" })
            await traerTurnos();
        } catch (error) {
            console.log(error);
            dispatch({ type: TurnoActions.BAD_REQUEST, payload: "No se pudo eliminar el turno" })
        }
    }
    const actualizarTurno = async (id: number, turno: ActualizarTurnoDTO) => {
        try {
            dispatch({ type: TurnoActions.CARGANDO })
            const res = await api.put(`/turnos/${id}`, turno, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`,
                }
            });
            console.log(res.data);
            dispatch({ type: TurnoActions.ACTUALIZAR_TURNO, payload: "Turno modificado!" })
            await traerTurnos();
        } catch (error) {
            console.log(error);
            dispatch({ type: TurnoActions.BAD_REQUEST, payload: "No se pudo modificar el turno" })
        }
    }

    return (
        <TurnosContext.Provider value={{
            turnoState: state,
            traerTurnos,
            traerTurno,
            eliminarTurno,
            actualizarTurno,
            guardarTurno
        }}>
            {children}
        </TurnosContext.Provider>
    )
}
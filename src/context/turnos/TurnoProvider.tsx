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
        dispatch({ type: TurnoActions.CARGANDO })
        const res = await api.get('/turnos', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token') || '41708e23493461a501f131c2b39d9904d8d15a6d'}`,
            }
        })
        dispatch({ type: TurnoActions.TRAER_TURNOS, payload: res.data.turnos as Turno[] })
    }
    const guardarTurno = async (turno: CrearTurnoDTO) => {
        const res = await api.post('/turnos', turno, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token') || '41708e23493461a501f131c2b39d9904d8d15a6d'}`,
            }
        });
        console.log(res.data);
        dispatch({ type: TurnoActions.GUARDAR_TURNO, payload: res.status })
        await traerTurnos();
    }

    const traerTurno = async (id: number) => {
        const res = await api.get(`/turnos/${id}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token') || '41708e23493461a501f131c2b39d9904d8d15a6d'}`,
            }
        })
        dispatch({ type: TurnoActions.TRAER_TURNO, payload: res.data.turno as Turno })
    }
    const eliminarTurno = async (id: number) => {
        const res = await api.delete(`/turnos/${id}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token') || '41708e23493461a501f131c2b39d9904d8d15a6d'}`,
            }
        });
        console.log(res.data);
        dispatch({ type: TurnoActions.ELIMINAR_TURNO, payload: res.status })
        await traerTurnos();
    }
    const actualizarTurno = async (id: number, turno: ActualizarTurnoDTO) => {
        const res = await api.put(`/turnos/${id}`, turno, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token') || '41708e23493461a501f131c2b39d9904d8d15a6d'}`,
            }
        });
        console.log(res.data);
        dispatch({ type: TurnoActions.ACTUALIZAR_TURNO, payload: res.status })
        await traerTurnos();
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
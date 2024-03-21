import { useContext } from "react"
import { TurnosContext } from "../context/turnos/TurnoContext"

export const useTurnos = () => {
    const turnosContext = useContext(TurnosContext);
    if (turnosContext === undefined) {
        throw new Error("useTurnos must be used within a TurnoContext");
    }

    return turnosContext;
}
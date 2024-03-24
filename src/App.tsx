import { useEffect, useState } from "react";
import CustomAlert from "./components/CustomAlert";
import FormularioReserva from "./components/FormularioReserva";
import TurnoList from "./components/TurnoList";
import { useTurnos } from "./hooks/useTurnos";
import { useUsuarios } from "./hooks/useUsuarios";
import { useNavigate } from "react-router-dom";

function App() {
  const { turnoState } = useTurnos();
  const { usuarioState } = useUsuarios()
  const [formMode, setFormMode] = useState({ type: "add", turnoId: 0 })
  const navigate = useNavigate();

  const handleSelectTurno = (turnoId: number) => {
    setFormMode(prev => ({ ...prev, type: 'edit', turnoId }))
  }
  useEffect(() => {
    if (!usuarioState.token) {
      navigate('/auth')
    }
  }, [])

  return (
    <div className="flex items-start justify-evenly gap-x-5 flex-wrap">
      <div className="flex flex-col items-center justify-center gap-y-5 mx-3">
        <h3 className="mx-auto text-2xl my-5 text-white">
          Vite Project - Reserva de Turnos
        </h3>
        {
          turnoState.error && (
            <CustomAlert message={turnoState.error} color="red" />
          )
        }
        {
          turnoState.error && (
            <CustomAlert color="red" message={turnoState.error} />
          )
        }
        {
          turnoState.mensaje && (
            <CustomAlert color="green" message={turnoState.mensaje} />
          )
        }
        <FormularioReserva formMode={formMode} />
      </div>
      <TurnoList onSelectTurno={handleSelectTurno} />
    </div>
  );
}

export default App;

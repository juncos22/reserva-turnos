import { useState } from "react";
import CustomAlert from "./components/CustomAlert";
import FormularioReserva from "./components/FormularioReserva";
import TurnoList from "./components/TurnoList";
import { useTurnos } from "./hooks/useTurnos";

function App() {
  const { turnoState } = useTurnos();
  const [formMode, setFormMode] = useState({ type: "add", turnoId: 0 })

  const handleSelectTurno = (turnoId: number) => {
    setFormMode(prev => ({ ...prev, type: 'edit', turnoId }))
  }
  return (
    <div className="flex items-start justify-evenly gap-x-5 flex-wrap">
      <div className="flex flex-col items-center justify-center gap-y-5 mx-3">
        <h3 className="mx-auto text-2xl my-5 text-white">
          Vite Project - Reserva de Turnos
        </h3>
        {
          (turnoState.status === 200 || turnoState.status === 201) && (
            <CustomAlert color="green" message={`Turno ${formMode.type === 'add' ? 'guardado' : 'modificado'}`} />
          )
        }
        <FormularioReserva formMode={formMode} />
      </div>
      <TurnoList onSelectTurno={handleSelectTurno} />
    </div>
  );
}

export default App;

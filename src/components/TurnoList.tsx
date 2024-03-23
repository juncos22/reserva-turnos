import { TurnoCard } from './TurnoCard';
import { useTurnos } from '../hooks/useTurnos';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import ConfirmAlert from './ConfirmAlert';

type TurnoListProps = {
    onSelectTurno: (id: number) => void
}
export default function TurnoList({ onSelectTurno }: TurnoListProps) {
    const { turnoState, traerTurnos, eliminarTurno } = useTurnos();
    const [showAlert, setShowAlert] = useState(false);
    const [turnoId, setTurnoId] = useState(0)

    useEffect(() => {
        traerTurnos()
    }, [])

    return (
        <div className='flex flex-col items-center gap-y-5'>
            {
                showAlert && (
                    <ConfirmAlert title='Eliminar Turno' message='Esta seguro de eliminar este turno?'
                        onConfirm={() => {
                            eliminarTurno(turnoId)
                            setShowAlert(false)
                        }} onCancel={() => {
                            setTurnoId(0)
                            setShowAlert(false)
                        }} />
                )
            }
            <div className='flex flex-col items-center justify-center gap-y-5 mt-5'>
                <h3 className='text-2xl text-center text-white'>
                    Lista de turnos
                </h3>
                {turnoState.cargando && (
                    <LoadingSpinner message='Cargando turnos' />
                )}
                <div className='grid gap-x-3 grid-cols-2 mt-5'>
                    {
                        turnoState.turnos.map(turno => (
                            <TurnoCard onSelect={onSelectTurno} turno={turno} key={turno.id} onDelete={(id) => {
                                setTurnoId(id)
                                setShowAlert(true)
                            }} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

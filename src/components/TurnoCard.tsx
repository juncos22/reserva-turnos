import { Turno } from '../interfaces/turno'
import DeleteButton from './DeleteButton'

type TurnoCardProps = {
    turno: Turno,
    onDelete: (id: number) => void
}

export function TurnoCard({ turno, onDelete }: TurnoCardProps) {
    return (
        <>
            <div className='bg-transparent border border-indigo-500 rounded-lg shadow-md shadow-white-1/2 flex flex-col items-start justify-center py-2 px-5 h-fit'>
                <DeleteButton size={'4'} onClick={() => onDelete(turno.id!)} />
                <h2 className='text-indigo-300'>{turno.title}</h2>
                <p className='text-indigo-300'>{turno.description}</p>
                <p className='text-indigo-300'>{new Date(turno.date).toLocaleString('en-US')}</p>
            </div>
        </>
    )
}

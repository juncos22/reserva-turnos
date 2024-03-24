import React, { useEffect, useState } from "react";
import { useTurnos } from "../hooks/useTurnos";
import { ActualizarTurnoDTO, CrearTurnoDTO } from "../interfaces/dtos/turno.dto";
import { LoadingSpinner } from "./LoadingSpinner";

type props = {
  formMode: { type: string, turnoId: number }
}
export default function FormularioReserva({ formMode }: props) {
  const { traerTurno, turnoState, guardarTurno, actualizarTurno } = useTurnos();
  const [reserva, setReserva] = useState<CrearTurnoDTO | ActualizarTurnoDTO>({
    title: "",
    date: "",
    description: "",
  });
  const [formEdit, setFormEdit] = useState({ title: '', date: '', description: '' })

  const handleReserva = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (formMode.type === 'add') {
      // console.log(reserva);
      setReserva(prev => ({ ...prev, [e.target.name]: e.target.value }))
    } else {
      // console.log(formEdit);
      setFormEdit(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formMode.type === 'add') {
      // console.log(reserva);
      guardarTurno(reserva as CrearTurnoDTO);
    } else {
      // console.log(formEdit);
      actualizarTurno(formMode.turnoId, formEdit as ActualizarTurnoDTO)
    }
    setReserva(prev => ({ ...prev, title: '', date: '', description: '' }))
  }
  // const renderInput = () => {
  //   if (!isAddMode) return (
  //     <input
  //       type="text"
  //       id="title"
  //       value={turnoEdit?.title}
  //       onChange={handleReserva}
  //       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //       placeholder={turnoEdit?.title}
  //       required
  //     />
  //   )
  //   return (
  //     <input
  //       type="text"
  //       id="title"
  //       name="title"
  //       value={reserva.title}
  //       onChange={handleReserva}
  //       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //       placeholder="Cita con..."
  //       required
  //     />
  //   )
  // }
  const getTurno = () => {
    traerTurno(formMode.turnoId);
    if (turnoState.turno) {
      setReserva(prev => ({ ...prev, ...turnoState.turno as ActualizarTurnoDTO }))
    }
  }
  useEffect(() => {
    if (formMode.type === 'edit' && formMode.turnoId !== 0) {
      getTurno();
    }
  }, [formMode.type, formMode.turnoId, turnoState.turno?.id, reserva.title])


  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-start justify-center gap-y-5 border border-indigo-500 rounded-md px-10 py-5"
    >
      <h3 className="text-lg font-medium text-indigo-300">
        {formMode.type === 'add' ? 'Agendá' : 'Modificá'} tu cita aquí
      </h3>
      <div>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Titulo {`(*)`}
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formMode.type === 'add' ? reserva.title : formEdit.title}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={formMode.type === 'edit' && reserva.title ? reserva.title : "Cita con..."}
          onChange={handleReserva}
        />
      </div>
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-full">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>

        <input
          datepicker-format="yyyy-MM-ddThh:mm"
          type="datetime-local"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // placeholder={formMode.type === 'edit' ? reserva.date : "Elegí la fecha que te convenga(*)"}
          name="date"
          value={formMode.type === 'add' ? reserva.date : formEdit.date}
          onChange={handleReserva}
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Comentarios (opcional)
        </label>
        <textarea
          rows={3}
          cols={28}
          id="description"
          name="description"
          value={formMode.type === 'add' ? reserva.description : formEdit.description}
          placeholder={formMode.type === 'edit' && reserva.description ? reserva.description : 'Agrega un comentario adicional'}
          onChange={handleReserva}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      {
        turnoState.cargando ? (
          <LoadingSpinner message={`${formMode.type === 'edit' ? 'Modificando' : 'Guardando'} turno...`} />
        ) : (
          <button
            className="bg-blue-500 rounded-full ml-auto text-white px-5 py-2 font-medium transition-colors hover:bg-indigo-800"
            type="submit"
          >
            {formMode.type === 'edit' ? 'Guardar Cambios' : 'Agendar Turno'}
          </button>
        )
      }
    </form>
  );
}

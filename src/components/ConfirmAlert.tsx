type ConfirmAlertProps = {
    title: string,
    message: string,
    onConfirm: () => void,
    onCancel: () => void
}

export default function ConfirmAlert({ title, message, onConfirm, onCancel }: ConfirmAlertProps) {
    return (
        <div id="alert-additional-content-4" className="p-4 mb-4 mt-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-300 dark:border-red-800" role="alert">
            <div className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">{title}</span>
            </div>
            <div className="mt-2 mb-4 text-sm">
                {message}
            </div>
            <div className="flex">
                <button onClick={onConfirm} type="button" className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-300 dark:text-gray-800 dark:hover:bg-red-400 dark:focus:ring-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-trash size-4 stroke-red-500 hover:cursor-pointer ml-auto`}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                    Proceder
                </button>
                <button onClick={onCancel} type="button" className="text-indigo-800 bg-transparent border border-indigo-800 hover:bg-indigo-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-indigo-300 dark:border-indigo-300 dark:text-indigo-300 dark:hover:text-gray-800 dark:focus:ring-indigo-800" data-dismiss-target="#alert-additional-content-4" aria-label="Close">
                    Cancelar
                </button>
            </div>
        </div>
    )
}


type CustomAlertProps = {
    color: string
    message: string
}

export default function CustomAlert({ color, message }: CustomAlertProps) {
    return (
        <span className={`bg-${color}-100 text-${color}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300`}>{message}</span>
    )
}

export interface CrearTurnoDTO {
    title: string;
    description?: string;
    date: string;
}

export interface ActualizarTurnoDTO {
    title?: string;
    description?: string;
    date?: string;
}
export interface EstadoServicioCreate{
    nombre_estado_servicio: string
}

export interface EstadoServicioResponse{
    id_estado_servicio:number
    nombre_estado_servicio: string
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date
}

export interface EstadoServicioUpdate{
    id_estado_servicio:number
    nombre_estado_servicio: string
    estado_rg: number
    fecha_md: Date
}
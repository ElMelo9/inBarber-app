
export interface ServicioCreate{
    id_usuario: number
    id_ubicacion: number
    id_estado_servicio: number
    id_tipo_servicio: number
    precio_servicio: number
}

export interface ServicioResponse{

    id_servicio:number
    id_usuario: number
    id_ubicacion: number
    id_estado_servicio: number
    id_tipo_servicio: number
    precio_servicio: number
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date
}

export interface ServicioUpdate{
    id_servicio:number
    id_usuario: number
    id_ubicacion: number
    id_estado_servicio: number
    id_tipo_servicio: number
    precio_servicio: number
    estado_rg: number
    fecha_md: Date
}

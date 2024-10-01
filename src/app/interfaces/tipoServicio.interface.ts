
export interface TipoServicioCreate{
    nombre_tipo_servicio: string
}

export interface TipoServicioResponse{

    id_tipo_servicio:number
    nombre_tipo_servicio: string
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date
}

export interface TipoServicioUpdate{

    id_tipo_servicio:number
    nombre_tipo_servicio: string
    estado_rg: number
    fecha_md: Date
}


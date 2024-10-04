
export interface UbicacionCreate{
    id_usuario: number
    longitud_ubicacion: string
    latitud_ubicacion: string
}

export interface UbicacionResponse{

    id_ubicacion:number
    id_usuario: number
    longitud_ubicacion: string
    latitud_ubicacion: string
    estado_rg: number
    fecha_rg: Date
    fecha_md: Date
}

export interface UbicacionUpdate{

    id_ubicacion:number
    id_usuario: number
    longitud_ubicacion: string
    latitud_ubicacion: string
    estado_rg: number
    fecha_md: Date
}
